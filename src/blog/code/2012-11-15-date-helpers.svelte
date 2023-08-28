<script>
	import Highlight from "svelte-highlight";
	import javascript from "svelte-highlight/languages/javascript";
	import atomOneDark from "svelte-highlight/styles/atom-one-dark";
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

<p>
	Lately I've been writing a lot of functionality that involves using the JavaScript Date Object. In
	one of the more recent projects I needed to pass a start and end date to hand me back a set of
	schedules; however the start and date wasn't as simple as picking two dates and going from there -
	I had to figure out the week's start day (sunday at midnight) and the end day (saturday 11:59:59)
	from the week chosen. This meant if I picked November 17, 2012 then the start Date would be
	November 11 and the end date would be November 17.
</p>

<p>
	So that got me thinking and I wrote a routine to make my life a bit simpler when coming to
	situations like this, and it also might help in future projects where I need to get last tuesday's
	set of information. Check out how simple this is:
</p>

<Highlight
	language={javascript}
	code={`startDate = getRelativeDate("sun"); // This week's Sunday
endDate = getRelativeDate("sat", 2, "11:59:59 PM"); // Next week's Saturday  
`}
/>

<p>Not too bad eh? I find it pretty nifty!</p>

<p>
	<a href="https://github.com/mikemunsie/Date-Helpers" target="_blank"
		>https://github.com/mikemunsie/Date-Helpers</a
	>
</p>
