<p>
	<strong>TLDR: Frameworks make you lazy. Learn the Basics.</strong>
</p>
<p>
	It's 2017 and I've realized that I've spent too much time letting a framework do most of the 💪
	heavy lifting for me. To be fair, that's what a lot of us have done. Who can argue that using a
	library or framework to help you get the job done isn't a smart move. The problem I've learned is
	that if you spend too much time using a framework, things start to become "magical".
</p>
<p>
	I realized this recently when I needed to write a simple popover component. The problem was that I
	needed to add an event where the popover would hide if you clicked outside the element. My first
	thought was to see if React had a special blur function that could solve this for me, and of
	course adding an onBlur event did not solve the issue. I then proceeded to see what others were
	doing, and it was all DIY or just use some popover component that already works. Of course I opted
	to use the component already written (for time sake), but I felt silly not knowing how to approach
	this.
</p>
<p>
	Turns out I just needed to learn some of the basics of JS again. With plain vanillaJS, I could
	have easily added an event listener to the body element and checked the target against the div. A
	simple callback is all I would need and I could make all this happen. Why didn't I think of this
	in the first place? It was because I was expecting to have the framework solve it for me - when in
	fact I needed to do it myself.
</p>
<p>
	My new goal lately has been to avoid using JQuery so I can improve my skills in the most primitive
	way.
</p>
<p style="text-align: center">
	<img src="/images/nojquerybro.jpg" />
</p>
<p>
	If I know how things work on the lowest level, then I can better solve for complex components. I
	know this is a simple example, but it proves that once in a while you need to revisit the basics.
	I've actually rewritten all the JS on this site so I could remove the dependency on JQuery. It was
	actually a fun exercise, and as a benefit my site is much smaller in size.
</p>
<p>Here's the codepen for fun: (click square, and click off the square)</p>
<iframe
	height="300"
	style="width: 100%;"
	scrolling="no"
	title="Event Listeners and some React"
	src="https://codepen.io/mikemunsie/embed/PWgJOG?default-tab=result&theme-id=dark"
	frameborder="no"
	loading="lazy"
	allowtransparency="true"
	allowfullscreen="true"
>
	See the Pen <a href="https://codepen.io/mikemunsie/pen/PWgJOG"> Event Listeners and some React</a>
	by Michael Munsie (<a href="https://codepen.io/mikemunsie">@mikemunsie</a>) on
	<a href="https://codepen.io">CodePen</a>.
</iframe>
<br />
<p>
	Oh, and it's 2017! I haven't updated this site in almost 2 years :( So I made this whole process
	much easier to manage. I even made a github now so I can encourage myself to make some progress <a
		href="https://github.com/mikemunsie/munstrocity.com"
		>https://github.com/mikemunsie/munstrocity.com</a
	>
</p>
