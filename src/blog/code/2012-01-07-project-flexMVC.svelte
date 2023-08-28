<script>
	import Highlight from "svelte-highlight";
	import php from "svelte-highlight/languages/php";
	import atomOneDark from "svelte-highlight/styles/atom-one-dark";

	const code1 = `class API_User_Test{ }`;
	const code2 = `
$users = $this->Models->Users->select_all();
$tasks = $this->Models->Tasks->select_all();
$notes = $this->Models->Tasks->select_all();
$notifications = $this->Models->Tasks->select_all();	
`;
	const code3 = `
// Define Application Directory
define('APPLICATION', realpath(dirname(__FILE__))."/application/");

// Include flexMVC
require_once(realpath(dirname(__FILE__))."/core/flexmvc.php");

// Start a session, sanatize form input, and include API
@session_start();
flexMVC::sanatize_form_input();
flexMVC::check_api();

// Check for form post
if(!empty(flexMVC::$post)){
  var_dump(flexMVC::$post);
  exit;
}
`;
	const code4 = `\\Pizza\\Pepperoni::eat();`;
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

<p>
	Well so far the test framework I have been developing is going well. It's definitely a change in
	how I am used to doing things (way more things are now static), but I have to admit it's coming
	along really well! The project codename is FlexMVC and my goal is to create a framework that is
	flexible for the application used.
</p>

<p>
	The problem with my previous framework is that I was building so much onto it that the names and
	variables were becoming messy.
</p>

<p>Old:</p>

<Highlight language={php} code={code1} />

<p>New:</p>

<Highlight language={php} code={code2} />

<p>
	Also, the framework wasn't as flexible as what it could be. I would have to define variables such
	as Models, Controllers, API, Plugin, etc. just to reference the different classes and be somewhat
	organized. What if I wanted to add something like helpers? I would then have to create a new
	variable and class that would tell the framework where the files are and what do with them. The
	limitation didn't stop there though, my original goal as well as developing a web framework was to
	make it portable - so if I liked the structure of my MVC, I could take it with me to other
	projects as well. Consider the framework like a mobile home, only in this case it wasn't that
	mobile.
</p>

<p>
	So with that in mind I wanted to shift gears into something completely new. Just like the project
	name says, flexibility is exactly what I am aiming for here. Regardless of how big or small the
	project is, the framework will adapt to my needs. What's even more beautiful about it is that now
	the core file is exactly 1 file! Yes, one file. I do not have all these core classes such as
	"helpers", "api", "models", "database" - etc. With the new framework, I call those libraries that
	can be accessed within your application. These do not have to be included with the framework
	whatsoever.
</p>

<p>
	Allow me to show you an example where this is really handy. Lets say we are working with WordPress
	and we want a way to add in my special API functionality with the ability to sanatize form input.
</p>

<Highlight language={php} code={code3} />

<p>
	Wasn't that simple? Just include the engine, define your application folder (which holds the
	libraries used for the projects, or views if it's a web app), call the functions you want to use,
	and bam! It's really easy and can be completely flexible to the project you are developing.
</p>

<p>
	What's also great about this framework is how it autoloads the classes. Lets say you want to use a
	new class you made up called "pizza" - well this is the code:
</p>

<Highlight language={php} code={code4} />

<p>
	This will go inside of the application folder, find the "pizza" folder, and then look for a class
	called "Pepperoni" and call the function "test". The beauty of this method is you can define your
	own classes and nest them as far as you want! Yes, you could have
	"\Pizza\Pepperoni\Michael\Deliver::now()" and that would work (as long as you have the directory
	structure and namespace correct).
</p>

<p>
	Another question that you might ask yourself is what about constructors? Since PHP does not have
	static constructors, I basically made my own way to deal with it. My idea is simple, when you auto
	load the class - check to see if there is a function that exists with the class name with an
	underscore before the class name (ex: "mike" would be "_mike()") and call that function. Works
	quite well. I like the static way of doing things because it helps me find where everything is,
	plus NetBeans is a bit less confused and will actually show me the class and recognize it.
</p>

<p>Why do I bother with all of this? Because it's fun ;)</p>
