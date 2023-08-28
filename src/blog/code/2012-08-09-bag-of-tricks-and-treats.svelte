<script>
	import Highlight from "svelte-highlight";
	import scss from "svelte-highlight/languages/scss";
	import php from "svelte-highlight/languages/php";
	import atomOneDark from "svelte-highlight/styles/atom-one-dark";

	const code1 = `
<IfModule mod_rewrite.c>;
RewriteEngine On
RewriteBase /
RewriteRule ^index\\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /blog/index.php [L]
</IfModule>;
  `;

	const code2 = `
if(isset($_GET['feed'])){
  if($_GET['feed'] == "rss2"){
    require_once( dirname(__FILE__) . '/WP-INSTALL-FOLDER-GOES-HERE/wp-load.php' );
    query_posts(array(
      "category" =>; "coding",
      "order" =>; "DESC",
      "post_status" =>; "publish",
      "numberposts" =>; 20)
    );
    include(dirname(__FILE__).'/WP-INSTALL-FOLDER-GOES-HERE/wp-includes/feed-rss2.php');
    exit;
  }
}  
`;

	const code3 = `
.spin
  -webkit-animation-name: rotate
  -webkit-animation-duration: 1.5s
  -webkit-animation-iteration-count: infinite
  -webkit-animation-timing-function: linear  
  `;
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

<p>
	I figured I would write a small little post sharing some of the goodies I've developed lately.
</p>
<br />
<br />
<h2>The Hidden WordPress Admin Section</h2>
<br />
<p>
	First and foremost did you know this website gets its content from WordPress? Although I created
	this site using my FlexMVC framework, it actually pulls its content from WordPress. And yes, I
	even have a WordPress Admin section. What you don't see is where the WordPress admin is, and
	that's the beauty of it. Don't believe me that this is a wordpress site? Why don't you try <a
		href="http://mikemunsie.com/?feed=rss2"
		target="_blank">http://mikemunsie.com/?feed=rss2</a
	>
	and you will see that I am using WordPress's RSS2 feed to allow different sites to pull the latest
	posts from my blog.
	<br />
	<br />
	So what do you need to do to get this up and running? First of all, just simply install wordpress in
	a subdirectory, remove the index.php, and last but not least modify the .htaccess file to include:
	<br />
</p>

<Highlight language={php} code={code1} />

<p></p>
<h2>Hijacking WordPress RSS2 Feed</h2>
<br />
<p>
	In order for LinkedIn to pull my latest posts from WordPress, it needed a feed. Because I removed
	the WordPress site, I didn't have a feed, so in order to get it back I needed the functionality
	from WordPress. I did a little PHP to detect the query string and check if there is a feed=rss2 in
	the url. If so, then go ahead and use the WordPress RSS2 feed. Here's the code:
</p>

<Highlight language={php} code={code2} />

<p></p>
<h2>The CSS Spinner</h2>
<br />
<p>
	I really like a CSS spinner more than a gif or JavaScript animated spinner. So with a nice little
	class of spin, I get the full chicken quesadilla. Here it is written in SASS.
</p>

<Highlight language={scss} code={code3} />

<p></p>

<p></p>
