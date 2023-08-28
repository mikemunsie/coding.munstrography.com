<script>
	import Highlight from "svelte-highlight";
	import sql from "svelte-highlight/languages/sql";
	import atomOneDark from "svelte-highlight/styles/atom-one-dark";

	const code1 = `
distance_lat = 69.1*(lat_2-lat_1);
distance_long = 69.1*(long_2-long_1)*cos(lat_1/57.3);
distance = sqrt((distance_lat^2)+(distance_long^2));
`;

	const code2 = `SELECT * FROM zipcodes WHERE SQRT(POWER((69.1*(latitude-32.466252)),2)+POWER((69.1*(longitude-97.401123)*COS(latitude/57.3)),2))  < 50`;
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

<p>In today's programming session, I wanted to develop a technique in which you could calculate the distance between 2 zip codes using Longitude and Latitude. Here's the basic formula that I researched:</p>

<Highlight language={sql} code={code1} />

<p>This basically converts the distance between the two zip codes in miles. Since I was able to use this formula and get accurate results, I wanted to take the first step in developing a routine that will find all the cities within so many miles of your zip.</p>

<p>My idea (in english was this):</p>

<p>Select all the information from zipcodes where (distance between these two zip codes) is less than  &lt; insert miles here &gt;</p>

<p>Then my brain giggled in excitement and everything just clicked. I came up with:</p>

<p>My cities Longitude and Latitude = 97.401123, 32.466252</p>

<Highlight language={sql} code={code2} />

<p>This allowed me to view all the zip codes within 50 miles of mine :)</p>

<p>:D * 9000!</p>
