export { renderers } from '../../renderers.mjs';

const prerender = false;
const ZOHO_CLIENT_ID = "1000.9ZOU74F8CONM4KY241HZFIK5ET00RV";
const ZOHO_CLIENT_SECRET = "fa3518137e4b8a96ccbe2be817bac972d6a5bfa525";
const ZOHO_REFRESH_TOKEN = "1000.c34c343350760957039ee029743831b9.f7ff493b4be48e9721e16d1a6741bc1f";
const POST = async ({ request }) => {
  console.log("Received request to /api/totalis");
  try {
    const contentType = request.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      return new Response(
        JSON.stringify({ error: "Content-Type must be application/json" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      console.error("Failed to parse request JSON:", parseError);
      return new Response(
        JSON.stringify({ error: "Invalid JSON format in request body" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    if (!body.First_Name || !body.Email || !body.Mobile) {
      return new Response(
        JSON.stringify({
          error: "Missing required fields: First_Name, Email, and Mobile are required"
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    console.log("Requesting Zoho access token...");
    const tokenUrl = `https://accounts.zoho.in/oauth/v2/token?refresh_token=${ZOHO_REFRESH_TOKEN}&client_id=${ZOHO_CLIENT_ID}&client_secret=${ZOHO_CLIENT_SECRET}&grant_type=refresh_token`;
    console.log(
      "Making token request to:",
      tokenUrl.replace(ZOHO_CLIENT_SECRET, "***").replace(ZOHO_REFRESH_TOKEN, "***")
    );
    let tokenResponse;
    try {
      tokenResponse = await fetch(tokenUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });
    } catch (fetchError) {
      console.error("Fetch error:", fetchError);
      throw new Error(
        `Network error connecting to Zoho: ${fetchError instanceof Error ? fetchError.message : String(fetchError)}`
      );
    }
    const responseText = await tokenResponse.text();
    console.log("Token response status:", tokenResponse.status);
    console.log("Token response text length:", responseText.length);
    if (responseText.length > 0) {
      console.log(
        "Token response text preview:",
        responseText.substring(0, 200)
      );
    } else {
      console.log("Token response is empty");
    }
    if (!tokenResponse.ok) {
      console.error("Token request failed with status:", tokenResponse.status);
      throw new Error(
        `Zoho token request failed: ${tokenResponse.status} - ${responseText}`
      );
    }
    if (!responseText || responseText.trim() === "") {
      throw new Error("Empty response from Zoho token endpoint");
    }
    let tokenData;
    try {
      tokenData = JSON.parse(responseText);
    } catch (parseError) {
      console.error("Failed to parse token response as JSON:", responseText);
      if (responseText.includes("<html") || responseText.includes("<!DOCTYPE")) {
        throw new Error(
          "Zoho returned HTML instead of JSON. Check your credentials and API endpoint."
        );
      }
      throw new Error(
        `Invalid JSON response from Zoho: ${responseText.substring(0, 100)}`
      );
    }
    if (tokenData.error) {
      console.error("Zoho authentication error:", tokenData);
      throw new Error(
        `Zoho error: ${tokenData.error} - ${tokenData.error_description}`
      );
    }
    if (!tokenData.access_token) {
      console.error("No access token in response:", tokenData);
      throw new Error("No access token received from Zoho");
    }
    const accessToken = tokenData.access_token;
    console.log("Access Token obtained successfully");
    const leadData = {
      data: [
        {
          Mobile: body.Mobile,
          Phone: body.Mobile,
          Lead_Status: "New Enquiry",
          First_Name: body.First_Name,
          Last_Name: body.Last_Name || "NA",
          Email: body.Email,
          Originating_Source: "Digital Organic",
          Zip_Code: body.Zip_Code || "",
          Lead_Sub_Source1: "SEO",
          Touchpoint_Source: "Website",
          Likely_Budget: body.Price_Bracket || "",
          Purpose: body.Requirement?.[0] || "",
          I_am_a: body.User_Persona || "",
          City: body.City || "",
          State_Name: body.State_Name || "",
          Layout: "158127000261416569"
        }
      ]
    };
    console.log("Attempting to create lead in Zoho CRM");
    const leadResponse = await fetch("https://www.zohoapis.in/crm/v6/Leads", {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(leadData)
    });
    const leadResponseText = await leadResponse.text();
    console.log("Lead response status:", leadResponse.status);
    console.log("Lead response text:", leadResponseText);
    let leadResult;
    try {
      leadResult = JSON.parse(leadResponseText);
    } catch (parseError) {
      console.error("Failed to parse lead response:", leadResponseText);
      throw new Error(
        `Invalid JSON response from Zoho CRM: ${leadResponseText.substring(
          0,
          100
        )}`
      );
    }
    const mainResponse = leadResult.data?.[0];
    if (mainResponse?.code === "DUPLICATE_DATA" && mainResponse?.details?.duplicate_record?.id) {
      const duplicateRecordId = mainResponse.details.duplicate_record.id;
      const duplicateField = mainResponse.details.api_name;
      console.log(
        `Duplicate detected on field: ${duplicateField}, Record ID: ${duplicateRecordId}`
      );
      const updateData = { ...leadData.data[0] };
      if (duplicateField && duplicateField in updateData) {
        delete updateData[duplicateField];
      }
      updateData.Lead_Status = "New Enquiry";
      updateData.Touchpoint_Source = "Website";
      updateData.Lead_Sub_Source1 = "SEO";
      console.log("Updating existing record with ID:", duplicateRecordId);
      const updateResponse = await fetch(
        `https://www.zohoapis.in/crm/v6/Leads/${duplicateRecordId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Zoho-oauthtoken ${accessToken}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ data: [updateData] })
        }
      );
      const updateResponseText = await updateResponse.text();
      console.log("Update response status:", updateResponse.status);
      console.log("Update response text:", updateResponseText);
      if (!updateResponse.ok) {
        throw new Error(
          `Failed to update duplicate record: ${updateResponseText}`
        );
      }
      let updateResult;
      try {
        updateResult = JSON.parse(updateResponseText);
      } catch (parseError) {
        console.error("Failed to parse update response:", updateResponseText);
        throw new Error(
          `Invalid JSON response from Zoho update: ${updateResponseText.substring(
            0,
            100
          )}`
        );
      }
      return new Response(
        JSON.stringify({
          success: true,
          data: updateResult,
          message: "Thank you for contacting us! Our team will get in touch with you soon."
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    if (mainResponse?.code === "MULTIPLE_OR_MULTI_ERRORS") {
      const errors = mainResponse?.details?.errors;
      const duplicateErrors = errors?.filter(
        (error) => error.code === "DUPLICATE_DATA"
      );
      if (duplicateErrors && duplicateErrors.length > 0 && duplicateErrors[0].details?.duplicate_record?.id) {
        const duplicateRecordId = duplicateErrors[0].details.duplicate_record.id;
        const updateData = { ...leadData.data[0] };
        duplicateErrors.forEach((error) => {
          if (error.details?.api_name) {
            const fieldName = error.details.api_name;
            delete updateData[fieldName];
          }
        });
        updateData.Lead_Status = "New Enquiry";
        updateData.Touchpoint_Source = "Website";
        updateData.Lead_Sub_Source1 = "SEO";
        console.log("Updating existing record with ID:", duplicateRecordId);
        const updateResponse = await fetch(
          `https://www.zohoapis.in/crm/v6/Leads/${duplicateRecordId}`,
          {
            method: "PUT",
            headers: {
              Authorization: `Zoho-oauthtoken ${accessToken}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ data: [updateData] })
          }
        );
        const updateResponseText = await updateResponse.text();
        console.log("Update response status:", updateResponse.status);
        console.log("Update response text:", updateResponseText);
        if (!updateResponse.ok) {
          throw new Error(
            `Failed to update duplicate record: ${updateResponseText}`
          );
        }
        let updateResult;
        try {
          updateResult = JSON.parse(updateResponseText);
        } catch (parseError) {
          console.error("Failed to parse update response:", updateResponseText);
          throw new Error(
            `Invalid JSON response from Zoho update: ${updateResponseText.substring(
              0,
              100
            )}`
          );
        }
        return new Response(
          JSON.stringify({
            success: true,
            data: updateResult,
            message: "Thank you for contacting us! Our team will get in touch with you soon."
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
      }
    }
    if (!leadResponse.ok) {
      throw new Error(`Zoho CRM error: ${JSON.stringify(leadResult)}`);
    }
    return new Response(
      JSON.stringify({
        success: true,
        data: leadResult,
        message: "Thank you for contacting us! Our team will get in touch with you soon."
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    console.error("Error in Totalis form submission:", error);
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        details: error instanceof Error ? error.message : String(error)
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
