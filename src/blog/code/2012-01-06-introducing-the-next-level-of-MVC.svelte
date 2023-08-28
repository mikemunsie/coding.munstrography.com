<script>
	import Highlight from "svelte-highlight";
	import php from "svelte-highlight/languages/php";
	import atomOneDark from "svelte-highlight/styles/atom-one-dark";

	const code1 = `self::$Libs-&gt;Validate-&gt;test();`;
	const code2 = `Libs/Validate::test();`;
	const code3 = `Controllers/Test::make_test();`;
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

<p>
	I am in development of a completely new framework yet again. This time around it's extremely
	flexible and also packs something brand new. Allow me to explain in simple terms why I felt the
	need to create something new.
</p>

<p>Here was the problem:</p>

<Highlight language={php} code={code1} />

<p>Here's what I want to see:</p>

<Highlight language={php} code={code2} />

<p>
	You see how much cleaner the second one is? Also by using this technique, the idea will be to
	never have a list of static variables ever again telling me the API, Models, Controllers, Etc.
	Already I am seeing great benefits. For one, I can completely construct a project to my liking
	now. My entire website directory is fully customizable, but better yet - I don't have to use the
	framework as a website mvc anymore. I can simply bring it with me to any project. One simple
	include to the framework and I can say:
</p>

<Highlight language={php} code={code3} />

<p>
	It's that simple. As usual the framework is sinkable, contains multiple controllers, mulitple
	views, API, Models, and everything else I could ever want. I feel like this one might be the real
	winner here ;)
</p>
