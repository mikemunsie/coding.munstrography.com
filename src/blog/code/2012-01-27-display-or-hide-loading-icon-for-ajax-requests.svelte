<script>
	import Highlight from "svelte-highlight";
	import javascript from "svelte-highlight/languages/javascript";
	import atomOneDark from "svelte-highlight/styles/atom-one-dark";

	const code1 = `
  // Before the request
$(".loader").show();
munstro.get("something/somewhere", data, function(response){
  // After the Request
  $(".loader").hide();
});
  `;
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

<p>
	Funny enough I have been doing this the hard way! Everytime I would go into an Ajax request I
	would basically say
</p>

<Highlight language={javascript} code={code1} />

<p>Why didn't I just latch on to the AjaxStart and AjaxStop methods as shown here?</p>

<p>
	<a
		href="http://nolovelust.com/post/Display-and-Hide-Ajax-loading-icon-on-every-ajax-request-with-jQuery.aspx"
		>http://nolovelust.com/post/Display-and-Hide-Ajax-loading-icon-on-every-ajax-request-with-jQuery.aspx</a
	>
</p>

<p>Sometimes you overcomplicate the simplest things :)</p>
