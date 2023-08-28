<script>
	import Highlight from "svelte-highlight";
	import javascript from "svelte-highlight/languages/javascript";
	import atomOneDark from "svelte-highlight/styles/atom-one-dark";

	const code1 = `
  munstro.import(["jqueryui","fancybox"], function() { /* done */ });
  `;

	const code2 = `
  switch(vendor) {
    case "fancybox":
      munstro.import_js("vendors/js/fancybox/fancybox.jquery.js"), 
      function() { /* recursion */ }
    });
  }
`;
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

<p>
	Keeping JavaScript structured and organized is a challenge. As part of my daily tasks as a web
	developer, I am constantly utilizing different plugins such as Fancybox, Datatables, JQueryUI, and
	so much more. In order to use a plugin you must import the JS and the CSS - so with that a few
	months ago I had this idea to import vendors with a simple line of code that included both the CSS
	and JS, but the only problem is that dynamically loading the CSS for the plugin can look choppy.
	So what I started doing instead was I placed the Plugin CSS in my main stylesheet and just
	dynamically import the JavaScript. I would have something like:
</p>

<Highlight language={javascript} code={code1} />

<p>
	The only problem is that in order to load "jqueryui" or "fancybox", I would run a switch statement
	and then find the JS file from there:
</p>

<Highlight language={javascript} code={code2} />

<p>
	So a few days ago I had a solution, and it just made too much sense. Instead of having this long
	switch statement for each vendor, why don't I have just one line of code that simply says "import
	[vendor_name] from [vendors_folder] and load in the [vendor_name].js" - bam. No more switch
	statements. If I wanted to load "fancybox" it would search for the folder "vendors/js/fancybox"
	and then find the file "fancybox.js" and load it in. Now I have incredibly easy access to my
	vendor scripts... now only if I can structure the CSS better life would be wine.
</p>
