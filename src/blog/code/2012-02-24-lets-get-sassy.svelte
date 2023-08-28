<script>
	import Highlight from "svelte-highlight";
	import scss from "svelte-highlight/languages/scss";
	import atomOneDark from "svelte-highlight/styles/atom-one-dark";

	const code1 = `
/* Global.SCSS */
$blue: #00f;
$red: #f00;
  `;

	const code2 = `
/* Style.SCSS */
@import "global";
body {
  background:$blue;
  color: $red;
}
`;
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

<p>
	Thanks to a conversation with Jason Cypret (<a href="http://jasoncypret.com/"
		>http://jasoncypret.com/</a
	>), I have stumbled upon SASS. For those who don't know what that is, don't feel bad - I didn't
	understand know what it was either. Well it's syntactically awesome stylesheets, and quite frankly
	that's the best description for it. What's cool is that using SASS you can place variables inside
	of your stylesheet and use conditional statements. Allow me to demonstrate a piece of the
	awesomeness:
</p>

<Highlight language={scss} code={code1} />

<Highlight language={scss} code={code2} />

<p>
	And that's all you need to know to understand why it's so awesome! Now lets get to the links: <a
		href="http://sass-lang.com/">http://sass-lang.com/</a
	>
	<a href="http://compass-style.org/">http://compass-style.org/</a>
</p>
