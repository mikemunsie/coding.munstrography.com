import { fileURLToPath, URL } from "url";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import generateRoutes from "./generateRoutes";

export default defineConfig({
	plugins: [sveltekit(), generateRoutes()],
	resolve: {
		alias: [
			{
				find: "@",
				replacement: fileURLToPath(new URL("./src", import.meta.url))
			}
		]
	}
});
