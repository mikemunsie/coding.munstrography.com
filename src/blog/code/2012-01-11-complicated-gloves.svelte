<script>
	import Highlight from "svelte-highlight";
	import php from "svelte-highlight/languages/php";
	import atomOneDark from "svelte-highlight/styles/atom-one-dark";

	const code1 = `$users = $this->Models->Users->test();`;
	const code2 = `
$users = $this->Models->Users->select_all();
$tasks = $this->Models->Tasks->select_all();
$notes = $this->Models->Tasks->select_all();
$notifications = $this->Models->Tasks->select_all();	
`;
	const code3 = `
$users = self::$Models->Users->select_all();
$tasks = self::$Models::Tasks->select_all();
$notes = self::$Models::Tasks->select_all();
$notifications = self::$Models::Tasks->select_all();	
`;
	const code4 = `
$users = \\Database\\Models\\Users::select_all();
$tasks =\\Database\\Models\\Tasks::select_all();
$notes = \\Database\\Models\\Notes::select_all();
$notifications =\\Database\\Models\\Notifications::select_all();
`;
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

<p>
	A friend of mine, showed me an article the other day about how some developers fall into the trap
	of wearing the "Complicated Gloves" (see: <a
		href="http://thedailywtf.com/Articles/The_Complicator_0x27_s_Gloves.aspx"
		>http://thedailywtf.com/Articles/The_Complicator_0x27_s_Gloves.aspx</a
	>). I would like to say that even though my philosophy is to constantly try and find better and
	simpler ways of doing things, I find myself at many times writing things the more complicated way.
</p>

<p>
	Take for example the reason why I use my own framework. It started off as a small project of last
	December (no i'm not talking about a month ago) to learn more about programming in general. I was
	a noob. I admittedly did not know much about frameworks, JQuery, MVC, and structure in general -
	so I dove deep into a framework developed from a co-worker (see: <a
		href="https://github.com/tinypress">https://github.com/tinypress</a
	>) at my first web dev job at MedFactory. I wanted to discover how everything worked because I was
	fascinated by the simplicity and structure that just seemed to work so "magical".
</p>

<p>
	At the time I knew a little bit about classes, so with my limited knowledge I took about a week
	diving into the framework and started climbing up the classes to see exactly what was going on.
	What was so fascinating was that "$this" could be anything from Models to Libraries to pretty much
	anything you defined it to be, but where did it get it's classes from and how was it constructed?
	Well after staring and picking my brain for so long it all just clicked at once. I had never
	learned about the process of overloading before and boy did it take me by surprise. I quickly saw
	how "$this->Users->test()" worked so magically, and I was immediately hooked on learning more.
</p>

<p>
	So as I started learning how everything came together, I wanted to experiment on my own (after all
	I realized I learn best by getting my hands dirty). That project eventually went on to become
	"openM" - my first PHP MVC framework. It contained all the basics from Controllers, Models, Views,
	Elements, Layouts, and Libraries. Here's what the code looked like:
</p>

<Highlight language={php} code={code1} />

<p>
	Granted that was some simple code. It was direct, to the point, and just worked... but as I
	continued to learn more, I realized that each time I wanted to use my "Users" Model, it had to be
	constructed... which ultimately was not good for a little class I like to call "Database". My
	Database class had to be instantiated every time in order for me to use it. So one could only
	imagine, but for a single page I would have something like this:
</p>

<Highlight language={php} code={code2} />

<p>
	First of all, that's not hard to read, but the database class is going to have to be constructed 4
	times! Yes, 4 times just for four calls! I shouldn't be complaining too much because honestly
	that's not bad with only four calls, but what about 20? Or how about more than that? Anyways, I
	thought of scalability and I didn't like the fact I had so many instances of the database class
	floating around. This had to be fixed.
</p>

<p>
	So that brings me to the next framework I developed, munsieMVC. This framework was based on the
	idea of using static variables to basically keep hold of the classes and only have them
	instantiated once. So now my calls would look like this:
</p>

<Highlight language={php} code={code3} />

<p>
	This was much better! Now in my framework I could setup static variables each time I wanted a
	class to only be constructed once. It was a clever method because I used a static variable to hold
	an object (this meant I only had one instance in the memory instead of holding multiple
	instances). This worked great and solved many of the issues the previous framework was having.
</p>

<p>
	But there was still a problem, now that we had everything as static, isn't there a simpler way to
	call the classes instead of having to define all these static variables in your main core class? I
	didn't like the fact I had "static $Models", "static $Libs", etc. That meant each time I want to
	add something to my framework, I need to create a static variable.
</p>

<p>
	So after a year later I came up with a solution. My third framework, flexMVC does just that. I
	have read many articles on how we shouldn't go back to non OO classes, but there is definitely a
	time and a place where it comes handy - and MVC is just that. Here is what the new code looks
	like:
</p>

<Highlight language={php} code={code4} />

<p>
	Now since I have created singletons, all my functions are very readable! No guess work, no more
	"self::function" type code because you will know exactly where everything is. I even created
	static class constructors by using the name of the class preceded by an underscore (so "users"
	would have the constructor "_users()"). The beauty of how I developed this framework is now all my
	classes are "autoloaded" as needed. That means if I request "\Database::select_all()" - it will
	require_once the database class (if it's not defined) and call the constructor if it exists. Each
	time that database class is called after that, it just works and isn't constructed again. Just
	like old times.
</p>

<p>
	Of course with this framework I wanted to incorporate some fancy fun stuff I learned throughout
	the year such as the ability to sink the framework, a base configuration file, htaccess mods for
	simpler css calls, and including an API class which makes it a freaking breeze to handle calling
	functions that belong to a particular group (mainly used for Ajax calls, but can send different
	return types based on the header). That's just a given...
</p>

<p>But does this mean I am wearing the complicated gloves?</p>

<p>
	Yes, why yes it does. But if I didn't take the route of wearing the complicated gloves for a bit,
	I would not be able to debug and learn so much about structure and the way things work like I do
	now. I am by no means an expert - and I have quite a long way to becoming one, but if I simply
	just used what "works" - I, personally, would not have learned as much as I have now. I can easily
	adapt to another framework and be able to fix problems rather than relying on a manual to help me
	do so.
</p>

<p>
	I ripped apart an engine piece by piece to figure out how it works rather than just be the driver.
</p>

<p>
	I love programming and my main goal will always be simplicity - even if that means I have to take
	a few extra steps to get there. If the end result does not make your life easier, then you are
	doing it wrong. I have looked back into the beginning of where I started and where I am now and I
	have definitely learned a few things.
</p>
