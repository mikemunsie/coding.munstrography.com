<iframe
	width="560"
	height="315"
	src="https://www.youtube.com/embed/-EV2ua8QPyo"
	frameborder="0"
	allowfullscreen
/>
<p>
	<a href="https://github.com/mikemunsie/minecraft-status" target="_blank"
		>https://github.com/mikemunsie/minecraft-status</a
	>
</p>
<p>
	In the last week, I purchased myself a Raspberry Pi to start hacking around with. I thought it
	would be fun to try something new and get into the IoT. For my first project, I wanted to build an
	indicator to let me know when my friends were playing Minecraft.
</p>
<p>
	So the first thing I did was try to read the server logs and get information when someone logs in
	or out. By doing this I learned I could not just find out when people are online, but also when
	someone dies, gets an achievement, sends a message, and so much more. This was pretty cool, but
	finding out when people were online or not was not actually very efficient. Turns out there's a
	way more effective way using and I found a great NPM module, <a
		href="https://www.npmjs.com/package/gamedig"
		target="_blank">https://www.npmjs.com/package/gamedig</a
	>, that lets me query the status of any game server. That's pretty sweet.
</p>
<p>
	The next thing I did was expose an API that I could hit from my Raspberry Pi. So I quickly made a
	small Node project using Express, and then queried the logs and status every 5 seconds. Once that
	was up and running, I then set up my Raspberry Pi to hit that API every few seconds to see what
	the latest status was. This worked out great in the beginning, and I was able to detect when
	people were online and trigger my hue lights to change. It was a little slow at first at detecting
	changes, but hey every 5 seconds is not too bad.
</p>
<p>Here's what that version looked like:</p>
<iframe
	width="560"
	height="315"
	src="https://www.youtube.com/embed/CKOvsyrzrGA"
	frameborder="0"
	allowfullscreen
/>
<p>
	After proving my concept worked, I then went crazy and decided to reduce the lag. I created a
	websocket, and then queried the server and the logs every half a second to make sure I get the
	latest information. Any new events would then broadcast to anyone listening on the socket and get
	immediate updates. This worked out great and the first video on this page shows just how quickly
	it updates.
</p>
<p>
	Last but not least, you can't forget the aesthetics. I headed down to Toys R Us and picked up a
	Minecraft Wearable Creeper Head. It was the perfect design because the lights were all cut out and
	it fitted my lamp perfectly. I actually got really lucky because I had no idea if it would work
	out or not! This was all a lot of fun and I plan on making many more projects with the Pi.
</p>
