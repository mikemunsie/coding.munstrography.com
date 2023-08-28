<p>
	I've been working a lot with KnockoutJS lately and was told about a framework that I could
	possibly like even better. Even better? Now that's a pretty bold statement, so I decided to check
	it out. I started off by taking a trip over to http://angularjs.org/ and seeing what it's all
	about. It was comforting to see some examples and how simple everything looked.
</p>

<p>
	What instantly caught my attention was these little curly braces, &#123;&#123; expression }}, that
	you could stick anywhere in your markup and Angular would pick up and parse. I'm used to seeing
	data-bind="text:value" in my markup and this was pretty slick. But of course it would take a bit
	more than just a prettier syntax to grab my attention. The scoping in Angular is awesome. Being
	able to apply a controller to an element through markup was pretty sweet and with Knockout I had
	faced a few problems when it came to having multiple controllers on one element. The issue was if
	there was a data-bind that didn't exist in the class, Knockout would have a panic attack. To
	resolve those issues I would have to use a custom binding to stop Knockout from applying it's
	data-binds to that element. With AngularJS it becomes a breath of fresh air. I can have an element
	use one controller, and then within that element have a child element use a different controller.
	Widgets are SO easy to create now.
</p>

<p>
	Fun doesn't stop there though, the coolest feature of Angular by far is the use of directives.
	Directives allow me to create a set of custom elements with events that can be used all throughout
	the site. Pretty nifty to have an element called &lt;search&gt; and have all of it's functionality
	built right in! Makes it super easy to create a set of reusable functional elements on the front
	end. No more having to copy and paste markup!
</p>

<p>
	But with all the awesome features of Angular, I'm still only in the beginning stages. My
	experience with Knockout has helped me learn this framework, but there are still many things I
	have yet to learn. I've been keeping up with the tutorials @ http://egghead.io/ and they are
	incredibly helpful. The documentation for Angular is good, but I feel since I'm incredibly new to
	a lot of the terminology and features it's easier to have see it all in action.
</p>

<p>
	I've also completely rewritten my current site in AngularJS! Decided it would be a fun switch to
	learn a new framework and see its advantages and disadvantages. Really right now the biggest
	disadvantage is that I'm a bit slower writing the code because I'm still learning as I go. I
	wouldn't suggest completely migrating to AngularJS until you have a full understanding so that
	when making the switch you can easily migrate your code. I do like the fact that it really
	encourages testing which is what I want to start learning next. You can write the cleanest
	JavaScript code in the world, but when you start working with a team you want to make sure your
	code still works and remains functional.
</p>

<p>
	Anyways I love it and it's been pretty fun to learn thus far. I will be continuing my expedition
	over the course of the next few weeks.
</p>
