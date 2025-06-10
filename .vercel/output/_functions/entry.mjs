import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_M7XDdel7.mjs';
import { manifest } from './manifest_CagjqM9u.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_BYcr18DI.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_Bcjovjyr.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/libro/_id_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/libro/[id].astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "c34b0160-0fa0-45f3-8870-ff87e97c3e25",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
