<script lang="ts">
	import Footer from "./Footer.svelte";
	import Header from "./Header.svelte";
	import { codeArticles, projectArticles } from "@/blog/articles";
	import { getGlobalContext } from "@/context/globalContext";

	const { category, currentSlug, featuredImage, currentArticle, nextArticle } = getGlobalContext();
	const articles = $category === "code" ? codeArticles : projectArticles;
	let articleDropdown: any = null;

	$: {
		if (articleDropdown) {
			if ($currentSlug === "/" || $currentSlug === "/code" || $currentSlug === "/projects") {
				articleDropdown.selectedIndex = 0;
			}
		}
	}

	function handleArticleChange(e: any) {
		window.location.pathname = e.target.value;
	}
</script>

<body class="layouts-default">
	<Header category={$category} />
	<div class="postTemplate">
		<div class="hero">
			<div class="bg" style="background-image: url('{$featuredImage || $currentArticle.bg}')" />
			<div class="overlay" />
			<div class="container">
				<div class="title">
					<h1>{$currentArticle.title}</h1>
					<h2>{$currentArticle.date}</h2>
					<a href={$currentArticle.url}>{$currentArticle.url}</a>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="rightWidgets">
				<div class="nextPost">
					<div class="custom-dropdown big">
						<select bind:this={articleDropdown} on:change={handleArticleChange}>
							{#each articles as article}
								<option selected={article.url.indexOf($currentSlug) > -1} value={article.url}
									>{article.title}</option
								>
							{/each}
						</select>
					</div>
					<div>
						<strong>Next up on {$category}:</strong>
						<div class="desc">
							<div class="previewText">
								{@html $nextArticle.preview}
							</div>
						</div>
						<a class="button red" href={$nextArticle.url}>Read Now</a>
					</div>
				</div>
				<div class="aboutMe">
					<img
						src="https://pbs.twimg.com/profile_images/974815348053524481/QDOaJSRJ_400x400.jpg"
						class="pic"
					/>
					<div class="info">
						<strong>Michael Munsie</strong>
						<span>Front End Engineer</span>
						<a href="http://www.linkedin.com/in/michaelmunsie" target="_blank">
							<span>@munstrocity</span>
						</a>
					</div>
				</div>
				<div class="social">
					<a target="_blank" class="fa fa-github" href="http://github.com/mikemunsie" />
					<a
						target="_blank"
						class="fa fa-linkedin"
						href="http://www.linkedin.com/in/michaelmunsie"
					/>
				</div>
			</div>
			<div class="entry">
				<div class="templateContent">
					<slot />
				</div>
			</div>
		</div>
	</div>
	<Footer />
</body>
