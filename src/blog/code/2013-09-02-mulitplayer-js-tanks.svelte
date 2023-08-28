<script>
	import Highlight from "svelte-highlight";
	import javascript from "svelte-highlight/languages/javascript";
	import atomOneDark from "svelte-highlight/styles/atom-one-dark";
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

<p>
	<a href="http://www.screencast.com/t/0kwMPvrUyMSz" target="_blank">
		<img src="/images/multiplayer-jstanks.png" />
	</a>
</p>

<h1>Dude, Web Sockets Rock.</h1>

<p>
	Here's the game in action @ <a href="http://www.screencast.com/t/0kwMPvrUyMSz"
		>http://www.screencast.com/t/0kwMPvrUyMSz</a
	>
</p>

<p>
	Today I decided to learn a little about NodeJS... well about 6 hours later I conquered one of my
	childhood goals: to create a multiplayer JS game! Granted it's not much of a game and really only
	serves as a small example of what's to come, but I'm pretty ecstatic that it works as well as it
	does. My goals for today were relatively simple: To learn about NodeJS, create a basic api call,
	and to possibly create a small website. Well that escalated quickly and I went down a path of
	learning about Web Sockets and my mind just completely had a field trip.
</p>

<p>
	For the browser side of things, I'm using <a href="http://socket.io/">socket.io</a>. It really
	does make it super easy to send and receive messages. Here's an example:
</p>

<Highlight
	language={javascript}
	code={`// Don't judge too harshly, this is not optimized :)
var socket = io.connect('192.168.0.4:4040');
socket.on('welcome', function (data) {
  playerNumber = data.player;
  randomSeed = data.time;
  Math.seedrandom(randomSeed);
  player1.x = Math.floor(Math.random() * playfield_width/32) * 32;
  player1.y = Math.floor(Math.random() * playfield_height/32) * 32;
  player2.x = Math.floor(Math.random() * playfield_width/32) * 32;
  player2.y = Math.floor(Math.random() * playfield_height/32) * 32;
  construct_walls();
  setInterval("main_loop()", frame_rate);
});
`}
/>

<p>
	Basically I went through a whole lot of tutorials that were planted all over <a
		href="http://reddit.com/r/nodejs">reddit.com/r/nodejs</a
	>. It's pretty neat to have a backend language that can work asynchronously and have a syntax
	that's as flexible as JavaScript. I'm really liking NodeJS so far and surprised that I didn't dive
	into it more previously. Dare I say I'll be moving into NodeJS from PHP? It's a very possible
	option ;)
</p>
