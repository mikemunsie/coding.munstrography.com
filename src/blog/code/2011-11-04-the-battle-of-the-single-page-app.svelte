<script>
	import Highlight from "svelte-highlight";
	import php from "svelte-highlight/languages/php";
	import atomOneDark from "svelte-highlight/styles/atom-one-dark";

	const code1 = `munstro.retrieve("users","select_all",data,function(response){});`;
	const code2 = `
function select_all(){
  if(admin) // return password
  else // dont return password
}  
`;
	const code3 = `
[api]
[user]
[users]
[admin]
[users]
`;
	const code4 = `
self::$API-&gt;User-&gt;Users-&gt;select_all();
self::$API-&gt;Admin-&gt;Users-&gt;select_all();
`;
	const code5 = `
function select_all(){
  self::$results = self::$Database-&gt;Users-&gt;select_all();
  self::$success = (bool)self::$results
}
`;
	const code6 = `
// api_url = "user/users/select_all"
// callback is the callback function which will receive the response
munstro.post(api_url, data, callback);
munstro.get(api_url, data, callback);
`;
	const code7 = `
[applications]
  [default]
    [api]
    [controllers]
    [elements]
    [layouts]
    [templates]
    [views]
.htaccess
config.php
errors.log
[core]
  [helpers]
  [libs]
  [models]
  [system]
.htacess
munsieMVC.php
[public]
  [css]
  [img]
  [js]
  [templates]
    [default]
  [views]
    [default]
  [uploads]
[vendors]
`;
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

<p>
	Today something just clicked. My post before I was on my way to something, but it wasn't a clear
	path. I spent many hours and many times revisiting my code to make my life just a bit easier.
	Well, as it turned out the idea of having models in my JavaScript that simply were an ajax call to
	a controller and then returned the results was a bad idea lol. This basically made the task of
	sending and retrieving data from the server slightly repetitive (okay more than repetitive lol)
	and painful.
</p>

<p>
	So after many hours I decided "Hey, why don't I just create a shortcut function that basically
	sends an ajax request with the datatype: JSON" - well hey, there's a shortcut. Instead of creating
	a model with a function "select_all_from_users" - why don't I just say:
</p>

<Highlight language={php} code={code1} />

<p>
	I thought I was really cool by using the art of common sense on this one. There was really no
	purpose for me to create Models the way I was doing that because it was pointless. After creating
	this function I then thought to myself "If I am a regular user, I should not be able to see a
	user's password; however, if I am an Admin, I should"... so what do I do in this situation?
</p>

<p>Sure I could use the strategy of utilizing my Ajax based controllers and saying:</p>

<Highlight language={php} code={code2} />

<p>
	But then I would have to do this for so many functions. It would be painful to basically see what
	I can do with the users account vs. the admin account. So I went back to thinking more. I didn't
	like this old school method I was using, there had to be a better way. After many hours of
	research and thinking and programming all at the same time (plus Pandora), I thought of having a
	special controller dedicated to the User, Admin, and whatever else groups I thought would be using
	this program.
</p>

<p>
	Now with this setup I could easily see what functions the User and Admin can do. I decided to
	create a new section in my framework called "API". The API section was basically setup similar how
	I setup my models.
</p>

<Highlight language={php} code={code3} />

<p>
	But of course I ran into an immediate problem. I am used to Class-&gt;function() architecture -
	now I will be doing Class-&gt;Class-&gt;function(). So it took me a while to brew this, but sure
	enough I did (wrong or right, the API controllers are constructed only once thanks to my static
	electricity). Now the following is possible:
</p>

<Highlight language={php} code={code4} />

<p>
	Thanks to the new setup, I can have the User API class have a base class with a constructor that
	can check for permission levels (You can't access the user API without proper permissions. Same
	applies for the Admin). I also made sure it was simple to call with the framework:
</p>

<p>http://website.com?api=user/users/select_all</p>

<p>
	I figure with the special keyword "api" I could go ahead and latch onto the API side of the
	framework. Plus all the functions that are inside of the API class have a special return:
</p>

<Highlight language={php} code={code5} />

<p>
	In the base API class I figure out if the call is Ajax based or not. If it's not Ajax based, I
	basically just return an array with "success" and "results". If it's an Ajax call, I simply return
	a JSON encoded array to the user with of course the appropriate headers.
</p>

<p>Now lastly, I changed my php function to two routines:</p>

<Highlight language={php} code={code6} />

<p>
	This completely changed two things: The need for JS Models (which I removed, thankfully until I
	have better use for it), and Ajax Controllers (which I also removed since there is no point). My
	mind is just a bit more clear now and man is it fun to write stuff now! :D
</p>

<p>My framework is now:</p>

<Highlight language={php} code={code7} />

<p>Cheers.</p>
