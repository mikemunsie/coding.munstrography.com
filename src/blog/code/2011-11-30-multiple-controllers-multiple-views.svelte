<p>
	So it took exactly one year of writing and developing a framework to finally achieve one of my
	most desired goals: Controllers in your controllers, and Views in your Views - you know so you can
	put that view in your view and your... Yes you get the point, or perhaps you don't. Allow me to
	explain.
</p>

<p>
	With typical MVC structure you run into the format of "controller/view", so your URL's come out
	to: "mikemunsie.com/categories/games"
</p>

<p>
	Well if you wanted to have a specific page to the game "Alien Invasion"? Maybe you can just route
	"/categories/games/alien_invasion" to a view and a controller, but why? Why not make it automatic
	just like the MVC fashion already! I want this:
</p>

<p>"mikemunsie.com/categories/games/alien_invasion/"</p>

<p>
	Here is how I did it. Remember that applications folder I talked about? No more. I took that out
	and simply just have controllers and views. My logic goes as following:
</p>

<p>
	"If there is a folder for the controller or view, open that folder and search for the next
	paramater. If there is no next parameter, default to index."
</p>

<p>Tests:</p>

<p>"" = Goes to "index.php"</p>

<p>"test" = Goes to "test.php" or "test/index.php" if the test folder exists.</p>

<p>"test/fruit" = Goes to "test/fruit" or "test/fruit/index.php" if the fruit folder exists.</p>

<p>
	"test/fruit/grapes"= Goes to "test/fruit/grapes" or "test/fruit/grapes/index.php" if the grapes
	folder exists.
</p>

<p>
	"test/fruit/grapes/tasty" = Goes to "test/fruit/grapes/tasty.php" or
	"test/fruit/grapes/tasty/index.php" if the tasty folder exists.
</p>

<div>
	That's pretty cool, it takes a bit to get used to especially since this is a radical change, but
	it's pretty simple and makes for the most ultra clean URL's, let alone the app can be as big as
	you want and you still have excellent organization.
</div>
<p>MVC^2. Cheers.</p>
