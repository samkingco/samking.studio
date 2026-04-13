import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { FontaineTransform } from "fontaine";

export default defineConfig({
	site: "https://samking.studio",
	output: "static",
	vite: {
		plugins: [
			tailwindcss(),
			FontaineTransform.vite({
				fallbacks: ["Arial"],
				resolvePath: (id) => new URL(`./public${id}`, import.meta.url),
			}),
		],
	},
});
