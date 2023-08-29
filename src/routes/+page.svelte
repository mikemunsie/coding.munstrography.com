<script lang="ts">
	import { codeArticles, projectArticles } from "@/blog/articles";
	import { onMount } from "svelte";
	import { setGlobalContext } from "@/context/globalContext";
	import BlogLayout from "@/components/BlogLayout.svelte";
	import { writable } from "svelte/store";
	import { page } from "$app/stores";
	import asyncDerivedConsistent from "@/lib/derivedConsistent";

	let blogPost = writable<any>("");
	const currentSlug = writable($page.url.pathname);
	const category = writable<"projects" | "code">();
	$category = $currentSlug.indexOf("/projects") > -1 ? "projects" : "code";

	// Article lookup
	const articles = $category === "code" ? codeArticles : projectArticles;
	let nextArticle = writable(articles[0]);
	let currentArticle = writable(articles[0]);
	let featuredImage = writable("");

	function setFeaturedImage(url = "") {
		$featuredImage = url;
	}

	setGlobalContext("global", {
		currentArticle,
		nextArticle,
		category,
		currentSlug,
		setFeaturedImage,
		featuredImage
	});

	// Right widgets should stay in place as the browser moves
	const handleResize = (e) => {
		let rightWidgetsXPos;
		const rightWidgets = document.querySelector(".rightWidgets");
		const width = window.innerWidth;
		const top = document.body.scrollTop;
		if (top > 80 && width >= 840) {
			rightWidgetsXPos = rightWidgets.getBoundingClientRect().left;
			rightWidgets.classList.add("fixed");
			rightWidgets.style.left = "${rightWidgetsXPos}px";
		} else {
			rightWidgets.classList.remove("fixed");
			rightWidgets.style.left = "auto";
		}
	};

	$: {
		if ($currentSlug.indexOf("/code") > -1 || $currentSlug === "/") {
			if ($currentSlug === "/" || $currentSlug === "/code") {
				(async () => {
					$blogPost = (await import(`@/blog/code/${codeArticles[0].slug}.svelte`)).default;
				})();
			} else {
				(async () => {
					$blogPost = (await import(`@/blog/code/${$currentSlug.substring(6)}.svelte`)).default;
				})();
			}
		} else if ($currentSlug.indexOf("/projects") > -1) {
			if ($currentSlug === "/projects") {
				(async () => {
					$blogPost = (await import(`@/blog/projects/${projectArticles[0].slug}.svelte`)).default;
				})();
			} else {
				(async () => {
					$blogPost = (await import(`@/blog/projects/${$currentSlug.substring(10)}.svelte`))
						.default;
				})();
			}
		}
	}

	$: {
		setFeaturedImage("");
		let currentArticleIndex = articles.findIndex((article) => article.url === $currentSlug);
		if (currentArticleIndex === -1) currentArticleIndex = 0;
		let nextArticleIndex = currentArticleIndex + 1;
		if (nextArticleIndex > articles.length - 1) nextArticleIndex = 0;
		$nextArticle = articles[nextArticleIndex];
		$currentArticle = articles[currentArticleIndex];
	}

	onMount(() => {
		// Pressing right or left can take you to magical places
		window.addEventListener("keydown", (e) => {
			if (e.keyCode === 39) {
				const nextPost = document.querySelector(".nextPost .button").getAttribute("href");
				window.location = nextPost;
			}
			if (e.keyCode === 37) {
				const selectedDropdown = document.querySelector(".rightWidgets select option[selected]");
				const prevDropdown = selectedDropdown.previousSibling.previousSibling;
				if (prevDropdown && prevDropdown.tagName === "OPTION") {
					window.location = prevDropdown.value;
				}
			}
		});

		window.addEventListener("scroll", handleResize);
		window.addEventListener("resize", handleResize);
	});
</script>

<svelte:head>
	<title>Mike Munsie Portfolio</title>
	<meta name="description" content="Mike Munsie Portfolio" />
	<link rel="icon" href="/images/favicon.png" />
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
	/>
</svelte:head>

{#if $blogPost}
	<BlogLayout>
		<svelte:component this={$blogPost} />
	</BlogLayout>
{/if}
