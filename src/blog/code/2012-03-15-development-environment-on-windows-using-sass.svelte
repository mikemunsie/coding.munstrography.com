<p>
	I have scratched my head a for a little while trying to figure out the best method to use SASS
	while managing multiple sites on my local server. The picture to your right is a small example of
	what my folders look like. In each one of those folders contains an instance of my framework. When
	you use SASS, you basically say "I have my stylesheets here and I want them to compress to this
	particular folder". That's cool, but for someone like me who maintains many different sites,
	having your stylesheets not in the same folder as the website can be a bit unorganized. I even
	went to the extent and downloaded Scout, which btw is not a bad solution, but just wasn't quick
	enough for me and I didn't like to have to switch between projects (plus for some reason the
	windows version is buggy). So I got really creative and had this idea. I started off by thinking
	to myself, what if I wrote a batch file that would open up the cmd, run ruby, and execute a
	command? Ha, no mike, Ruby has it's own exe and can run it's own code. So I got smart, and I
	learned a line of code in ruby that basically says: exec('compass watch "./config"')
</p>

<p>
	Yeah that's right. Just saved this file as a .rb, opened the baby up, and like magic it just
	starts watching the directory based on the configuration file (sorry if that spurred any
	confusion, I am also using Compass). To the right shows what the sass folder inside of the
	framework looks like. Once a change is noticed, it automatically compiles to the public folder
	into the CSS department. I think that was a pretty clever find and all I have to do is just copy
	and paste this into my framework and dispurse amongst the army of websites.
</p>

<p>I absolutely love programming. The end.</p>
