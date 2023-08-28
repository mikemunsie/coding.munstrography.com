<p>
	So I finally got to playing around with the Mutation Observer today and am ultra excited for the
	future of JavaScript! I'm also glad that this works on IE9+, but unfortunately won't be able to
	use this anytime soon until IE9 becomes the new IE8.
</p>

<p>
	That aside, I've been working on a little personal project that utilizes custom elements (just
	like AngularJS) but with the ability to add custom elements into the DOM and automatically update
	to the appropriate snippet. So by adding in &lt;custom element="header"&gt;&lt;/custom&gt; gets
	replaced with &lt;div class="header"&gt;...&lt;/div&gt; through an insert. That means Inspect
	Element - add element - mutation observer callback gets fired and bam - the new element is on the
	page.
</p>

<p>This is something I've heard about for a while and could not wait to get my hands onto.</p>

<p>
	<a href="http://www.screencast.com/t/mEDsueZnvrg" target="_blank">Check out the video!</a>
</p>
