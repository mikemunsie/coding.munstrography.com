<script>
	import Gist from "@/components/Gist.svelte";
</script>

<p>
	So it's been about 10 months in since my transition from
	<a href="http://gruntjs.com/">Grunt</a> to
	<a href="http://gulpjs.com/">GulpJS</a>. Even crazier to think I haven't played around with front
	end build tools until a little over a year ago. I still remember the days where I would have
	coffeescript running in one tab, sass in another, and then have in one final tab a way to compress
	and uglify the scripts. It was all pretty much one big science experiment.
</p>
<p>
	Whether it's for local development, starting a server, generating static content, compressing
	assets, or adding in a task to minify and compress assets for prod-ready code, I use gulp in just
	about everything.
</p>
<p>
	Nowadays I use a combination of splitting my tasks into gulp files (<a
		href="http://macr.ae/article/splitting-gulpfile-multiple-files.html"
		>http://macr.ae/article/splitting-gulpfile-multiple-files.html</a
	>) and using functions instead of gulp.task for each process so I can better separate the tasks I
	want to run through gulp and how I use the libraries. It's much easier to see a few gulp.tasks
	instead of one for every single process you will have in your app. Plus, since I have everything
	setup as a promise, I can know exactly when something finishes to execute the next task. No more
	having to worry about race conditions :)
</p>
<p>
	Check out an example snippet (this has not been split into multiple files, but you get the idea):
</p>
<p>
	<a href="https://gist.github.com/mikemunsie/f5c69e49745a00658e6c"
		>https://gist.github.com/mikemunsie/f5c69e49745a00658e6c</a
	>
</p>
<div style="height: 250px; overflow:scroll">
	<Gist url="https://gist.github.com/mikemunsie/4e8e25fab66ffc731033.js" />
</div>
