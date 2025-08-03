export interface AccordionItem {
  question: string;
  answer: string;
}

export type PostalPincodeResponse = {
  PostOffice: Array<{
    District: string;
    State: string;
  }>;
  Status: 'Error' | 'Success';
};
