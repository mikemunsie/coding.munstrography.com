<iframe
	height="300"
	style="width: 100%;"
	scrolling="no"
	title="Circle Stuffs"
	src="https://codepen.io/mikemunsie/embed/mygGQZ?default-tab=result&theme-id=dark"
	frameborder="no"
	loading="lazy"
	allowtransparency="true"
	allowfullscreen="true"
></iframe>
<p>
	So this was pretty fun. I was shown this watch-me-build-this effect Codepen @ <a
		href="http://codepen.io/jakealbaugh/full/PwLXXP/">http://codepen.io/jakealbaugh/full/PwLXXP/</a
	> and I was blown away. I thought it was really cool, so I decided to dissect the code and recreate
	it myself.
</p>
<p>
	It turns out the idea is not complicated at all. Basically you have a string that is the final
	output of the CSS, and then you slowly add the CSS string into a style element. Add a little
	interval to keep adding to the string and inject into the style element and you can simulate
	typing (there's no backspaces, so it's the most realistic simulator lol).
</p>
<p>
	Love to experiment new things that I find interesting. Thanks <a
		href="https://twitter.com/krisgiamello">Kris Giamello</a
	> for showing me this!
</p>
<p>
	Here's the link if you are on mobile: <a href="http://codepen.io/mikemunsie/pen/mygGQZ/"
		>http://codepen.io/mikemunsie/pen/mygGQZ/</a
	>
</p>
