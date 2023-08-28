<script>
	import Highlight from "svelte-highlight";
	import javascript from "svelte-highlight/languages/javascript";
	import atomOneDark from "svelte-highlight/styles/atom-one-dark";
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

<p>
	For very long I have used a routine in which involves a for-loop and going through every element's
	value and then selecting the option that matches the value specified. How about we scratch that.
	How about we make all of this one line of code?
</p>

<Highlight
	language={javascript}
	code={`$('select[name=SELECTNAME] option[value=VALUE').attr("selected", true);`}
/>

<p>Enjoy! :D</p>
