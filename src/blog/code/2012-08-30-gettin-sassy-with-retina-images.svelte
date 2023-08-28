<script>
	import Highlight from "svelte-highlight";
	import scss from "svelte-highlight/languages/scss";
	import atomOneDark from "svelte-highlight/styles/atom-one-dark";

	const code = `
/**
 * Retina-PNG
 *
 * If the screen is retina, it will display the @2x version of the image.
 * This is designed for png, it is a routine in progress.
 *
 * Usage:
 * +retina-png("../images/responsive/linen", linear-gradient(rgba(73, 79, 91, 1) 0%, rgba(73, 79, 91, 1) 9%, rgba(46, 49, 57, 1) 47%, rgba(38, 40, 46, 1) 48%, rgba(21, 22, 25, 1) 100%))
 */

@mixin retina-png($img, $etc: "")
  +background-image(url("#{$img}.png"), $etc)
  @media only screen and (-webkit-min-device-pixel-ratio: 2)
    +background-image(url("#{$img}@2x.png"), $etc)
    background-size: 50% auto, auto
  `;
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

<p>
	One of my projects lately has been to develop a new responsive design for MyADT.com. The issue I
	ran into was that I needed a simple way to detect retina display, show the retina image, and apply
	other backgrounds on top of the retina image. At first I tried searching to see if there was a
	mixin, but as it seemed there weren't any that met what I was looking for.
</p>

<p>
	So instead of searching for too long, I decided to get creative and write my own mixin. Works like
	a charm and is pretty simple to use.
</p>

<Highlight language={scss} {code} />
