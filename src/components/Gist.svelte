<script lang="ts">
	export let url = "";
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<iframe
	width="100%"
	height="350"
	src={`data:text/html;charset=utf-8,
    <head><base target='_blank' /></head>
    <body><script src='${url}'></script>
    </body>"`}
/>
