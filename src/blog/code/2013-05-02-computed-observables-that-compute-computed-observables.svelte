<p>
	Yes, you have read that correctly. In one of my more recent projects I had to use a computed
	observable to get an object that I needed, but from that object I also needed to display another
	object based on values from the computed observable. I haven't ran into this issue before, but I'm
	pretty glad I ran into this recently.
</p>

<p>
	This is actually a really cool technique I learned from trial and error. Basically in your
	computed observable check to make sure the computed observable you are wanting to check against
	actually returns a value. If it does, then use that value and get what you need. It requires one
	if statement in the logic of your observable, so it actually comes out quite nicely.
</p>

<p>
	I created a very simple example that shows exactly what I mean. Here you just simply change the
	value of the drop down and watch the values update. Those values are computed observables that get
	its value from another computed observable.
</p>

<p></p>
