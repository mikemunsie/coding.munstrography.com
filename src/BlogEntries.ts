export const codeEntries = Object.keys(import.meta.glob("@/components/code/*.svelte")).sort();
export const projectEntries = Object.keys(
	import.meta.glob("@/components/projects/*.svelte")
).sort();
export const allEntries = [...codeEntries, ...projectEntries].sort();
export const latestEntry = allEntries[0];
