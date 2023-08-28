<script lang="ts">
	export let category = "code" as "code" | "projects";
</script>

<div class="header">
	<div class="container">
		<!-- svelte-ignore a11y-missing-content -->
		<a class="image logo" href="/" />
		<div class="nav">
			<a class={`code ${category === "code" ? "selected" : ""}`} href="/code">Code</a>
			<a class={`projects ${category === "projects" ? "selected" : ""}`} href="/projects"
				>Projects</a
			>
			<a class="last" href="https://munstrography.com">Photography</a>
		</div>
	</div>
</div>
