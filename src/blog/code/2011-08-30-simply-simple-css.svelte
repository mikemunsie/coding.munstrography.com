<script>
	import Highlight from "svelte-highlight";
	import php from "svelte-highlight/languages/javascript";
	import scss from "svelte-highlight/languages/scss";
	import atomOneDark from "svelte-highlight/styles/atom-one-dark";
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

<p>
	First and foremost I like to disagree with certain standards, or more-so the fact of being
	comfortable with doing things in a complicated fashion. I enjoy simplicity and I also firmly
	believe that there is alwaysan easier way of doing things. Granted most of the time to enjoy the
	simple things in life you have to do something complicated, but it sure is worth it :)
</p>

<p>Lets get right to it.</p>

<p></p>

<p>
	The problem that maybe you or someone you know is probably the frustration involved with CSS and
	relative or absolute URLS. If you are like me, you enjoy relative positioning because it allows
	you to have multiple sites in one directory, but then you have things like "../../../../" and that
	doesn't look too clean. Plus, having to remember where you are constantly just doesn't seem like
	the best idea.
</p>

<p></p>

<p>
	Perhaps you are the type of programmer that simply says absolute urls are the way to go -
	"/app/img/folder/" is the best route because it allows you to specifically say this file goes here
	and here is the direct path... well what happens if you want to have a server that has multiple
	sites? Do you create a subdomain each time? Do you work on your production server just to make a
	change? What about locally - isn't it frustrating to work with a company that has multiple sites
	and you have to clear your htdocs folder each and every single time?
</p>

<p></p>

<p>
	I did not like this at all and this is why I developed this concept of the "_public" and "vendors"
	shortcuts. Here is what I mean:
</p>

<p></p>

<p>EX 1) Not using the "_public" shortcut.</p>

<Highlight language={scss} code={`.img { background:url('/app/img/test.jpg'); /* OR */ }`} />

<Highlight language={scss} code={`.img { background:url('../app/img/test.jpg'); }`} />

<p></p>

<p>EX 2) Using the new "_public" shortcut.</p>

<Highlight language={scss} code={`.img {background:url('_app/img/test.jpg'); }`} />

<p></p>

<p>
	The new technique eliminates having to say "/public" or "../" public because it knows where the
	public folder is in your .htaccess file. This shortcut also works for images and everything else
	because it simply says any instance of "_public" will be replaced with the actual location of the
	public folder according your .htaccess.
</p>

<p></p>

<p>Now my web server can look like this:</p>

<p></p>

<p>Before</p>

<Highlight
	language={scss}
	code={`[app]
[core]
[public]
`}
/>

<p>Now</p>

<Highlight
	language={scss}
	code={`[site 1]
  [app]
  [core]
  [public]
[site 2]
  [app]
  [core]
  [public]
`}
/>

<p></p>

<p>
	No more creating sub-domains or any other hacks to have multiple sites. Simply work locally and
	push online to wherever you need. Plus by combining this with the BASE tag, you get completely
	portable sites. It makes my life easier and i'm sure by utilizing this technique you can to. It's
	the secret sauce to many things I do, but also what makes the framework I have developed so
	unique. It's not standard and probably won't ever be, but sometimes it's nice to see that there is
	actually easier ways to handle things.
</p>

<p></p>

<p>Here's the code:</p>

<p></p>

<Highlight
	language={php}
	code={`RewriteRule ^vendors/(.*)$ app/vendors/$1 [L]
RewriteRule ^(.*)/vendors/(.*)$ app/vendors/$2 [L]
RewriteRule ^(.*)/_app/(.*)$ app/$2 [L]
RewriteRule ^_app/(.*)$ app/$1 [L]
`}
/>

<p></p>

<p>
	I am not an expert at writing .htaccess files, but I can safely this works and I have tested it
	many times. Cheers!
</p>
