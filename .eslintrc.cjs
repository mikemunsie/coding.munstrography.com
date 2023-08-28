module.exports = {
	root: true,
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:svelte/recommended",
		"prettier"
	],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "prettier"],
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2020,
		extraFileExtensions: [".svelte"]
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ["*.svelte"],
			parser: "svelte-eslint-parser",
			parserOptions: {
				parser: {
					ts: "@typescript-eslint/parser",
					js: "espree",
					parser: "@typescript-eslint/parser"
				}
			}
		}
	],
	rules: {
		"prettier/prettier": [
			"error",
			{
				useTabs: true,
				singleQuote: false,
				trailingComma: "none",
				printWidth: 100,
				tabWidth: 2
			}
		]
	}
};
