import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_UE_aKrTU.mjs';
import { manifest } from './manifest_Bfzp9rmq.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_CaPeozAP.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_CB5rAsGp.mjs')],
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
    "middlewareSecret": "ee34dc44-5d97-4fe3-80a5-7a2ab6fb5d60",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
