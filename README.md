# Astro Starter Kit: Minimal

```sh
bun create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                           |
| :-------------------- | :----------------------------------------------- |
| `bun install`         | Installs dependencies                            |
| `bun dev`             | Starts local dev server at `localhost:4321`      |
| `bun build`           | Build your production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying     |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

# For New Deployment:-

## Upload the corrected build:

npm run build
scp -P 4422 -r ./dist/ 98f92fd80d7697849c20e0903904730e9375928fec8046f3b785fabd61e54ef9@BMCSLBTPMPBRK2.abgplanet.abg.com:/tmp/

## Deploy as before:

ssh -p 4422 98f92fd80d7697849c20e0903904730e9375928fec8046f3b785fabd61e54ef9@BMCSLBTPMPBRK2.abgplanet.abg.com
sudo su
rm -rf /var/www/totalis.in/\*
mv /tmp/dist/\* /var/www/totalis.in/
chown -R www-data:www-data /var/www/totalis.in
chmod -R 755 /var/www/totalis.in
rm -rf /tmp/dist/

##Location to start
pm2 start /var/www/totalis.in/server/entry.mjs --name totalis
