import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_DJqiqETO.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$BuyButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BuyButton;
  const SPAIN = "ES";
  const country = Astro2.request.headers.get("X-Vercel-IP-Country") ?? "ES";
  const storeCountry = country === SPAIN ? "spain" : "usa";
  const { buy } = Astro2.props;
  const url = buy[storeCountry];
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} title="Comprar libro" target="_blank" rel="noopener noreferrer" class="text-balance inline-flex gap-2 items-center bg-black-400 hover:bg-blue-500 active:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg border border-yellow-500 transition duration-200 ease-in-out hover:scale-105 justify-center text-center">
Comprar ahora
</a>`;
}, "C:/Users/Emosl/dev/e-books/src/components/BuyButton.astro", void 0);

const $$file = "C:/Users/Emosl/dev/e-books/src/components/BuyButton.astro";
const $$url = undefined;

export { $$BuyButton as default, $$file as file, $$url as url };
