<p>
	Over the course of the past 8 months, I have been fiddling around with writing my own Framework.
	Why do you ask? It's because sometimes the best way to learn is tear something apart and find out
	how it works from the inside-out. What I came across a few months ago was my strange urge to have
	multiple applications in one MVC framework.
</p>

<p></p>

<p>I wanted:</p>
<p>http://mikemunsie.com/app/controller/view</p>

<p></p>

<p>The problem was this:</p>

<p>http://mikemunsie.com/controller/view</p>

<p></p>

<p>
	How could I figure out the app if I wanted to keep the integrity of MVC? Well this was my
	solution: I simply made the first parameter an application check. If the application name existed,
	then we would point to that application. So "http://mikemunsie.com/mobile" would go directly to
	the mobile application. This made the URL very clean and memorable.
</p>

<p></p>

<p>
	Now, the next issue I had was how would I keep all the links relative to the application. That's
	where the BASE tag had come into play. Since I could specify the base tag as
	"http://mikemunsie.com/app" - I could then reference all the links to be relative to this path.
	This helped everything allowing me to create mulitple applications in one framework.
</p>

<p></p>

<p>
	Of course there is even more issues. What about images? If I am working relative and have multiple
	instances of my framework on my server, how can I reference each of the public folders by root
	relative? I couldn't say "/app/app/images" because I had mutliple websites in one folder; rather I
	wanted root relative paths. So that's why I learned more about the .htaccess and a simulative root
	relative path (sounds cool) by saying "_app/" -&gt; this allows me to access the current
	applications public folder. I also created "_app/appname/_public" to reference another
	applications public folder.
</p>

<p></p>

<p>
	All this was to help me manage multiple websites and create them as quickly as possible. This
	framework is extremely small and very manageable... at least for me lol. I know it's not perfect,
	and I know I am probably the only one who uses it, but it's absolutely great for what I wanted to
	do!
</p>

<p></p>

<p>No more clearing the htdocs each time for a new site :)</p>

<p></p>

<p>http://projects.mikemunsie.com/munsieMVC</p>
