import { resolve } from "node:path";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	root: "src",
	plugins: [react(), vanillaExtractPlugin()],
	build: {
		outDir: resolve(__dirname, "dist"),
		emptyOutDir: true,
		rollupOptions: {
			input: {
				"": resolve(__dirname, "src/index.html"),
			},
			output: {
				entryFileNames: "assets/[name]/bundle.js",
			},
		},
	},
});
