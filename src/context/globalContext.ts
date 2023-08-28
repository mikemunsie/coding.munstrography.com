import type { codeArticles } from "@/blog/articles";
import { getContext, setContext } from "svelte";
import type { writable } from "svelte/store";

type Writable<T = string> = ReturnType<typeof writable<T>>;

type globalContext = {
	category: Writable<"code" | "projects">;
	currentSlug: Writable;
	currentArticle: Writable<(typeof codeArticles)[0]>;
	nextArticle: Writable<(typeof codeArticles)[0]>;
	setFeaturedImage: (url: string) => any;
	featuredImage: Writable;
};

export const setGlobalContext = setContext<globalContext>;
export const getGlobalContext = () => getContext<globalContext>("global");
