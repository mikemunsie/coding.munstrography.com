<script>
	import Highlight from "svelte-highlight";
	import php from "svelte-highlight/languages/php";
	import atomOneDark from "svelte-highlight/styles/atom-one-dark";

	const code1 = `
  <style>
  .cloud { background:url(cloud.png); width:50px; height:50px; position:absolute;
  </style>
  <div class="cloud"></div>
`;

	const code2 = `
<style>
.cloud { background:url(cloud.png); width:50px; height:50px; position:absolute;
background: none\\9; filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="cloud.png", sizingMethod="crop");
</style>
<div class="cloud"></div>
`;
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

<p>
	So i've been having this issue for quite some time dealing with how to properly fade in and out
	elements on IE7/IE8. The issue has been that anything I fadeout it basically has this nasty black
	border that comes along with it. I use the JQuery library and I have seen many people complain
	about this issue in numerous amounts of forums. The biggest issue was that sure some of the
	solutions worked, but there wasn't really a clear understanding why.
</p>

<p>
	Well recently I stumbled across how much the filter attribute can change your life for older
	versions of IE. So, instead of using:
</p>

<Highlight language={php} code={code1} />

<p>Use this:</p>

<Highlight language={php} code={code2} />

<p>
	It's the magical filter: filter: progid:DXImageTransform.Microsoft.AlphaImageLoader that will do
	the trick. That's all you need, cheers and seabiscuits.
</p>
