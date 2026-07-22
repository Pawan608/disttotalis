import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_0f6HyQjs.mjs';
import { manifest } from './manifest_CGM0Ndy7.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/contact.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/cookie-policy.astro.mjs');
const _page6 = () => import('./pages/data-privacy-policy.astro.mjs');
const _page7 = () => import('./pages/locate-us.astro.mjs');
const _page8 = () => import('./pages/privacy.astro.mjs');
const _page9 = () => import('./pages/product/_slug_.astro.mjs');
const _page10 = () => import('./pages/terms.astro.mjs');
const _page11 = () => import('./pages/why.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/contact.ts", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/cookie-policy.astro", _page5],
    ["src/pages/data-privacy-policy.astro", _page6],
    ["src/pages/locate-us.astro", _page7],
    ["src/pages/privacy.md", _page8],
    ["src/pages/product/[slug].astro", _page9],
    ["src/pages/terms.md", _page10],
    ["src/pages/why.astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///D:/projects/totalis/dist/client/",
    "server": "file:///D:/projects/totalis/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
{
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
