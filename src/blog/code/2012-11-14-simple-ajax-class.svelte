<script>
	import Highlight from "svelte-highlight";
	import javascript from "svelte-highlight/languages/javascript";
	import atomOneDark from "svelte-highlight/styles/atom-one-dark";

	const code1 = `
$.ajax({
  url: "http://somewhere.com",
  type: "post",
  data: {name: "test"},
  dataType: 'json',
  contentType: 'application/json; charset=utf-8',
  success: function(response) {
    // Happy Dance
  },
  fail: function(xhr) {
    // Fail Code
  },
  error: function(xhr) {
    // Error Code
  }
});
  `;

	const code2 = `
simpleAjax.request({
  url: "http://somewhere.com",
  type: "post",
  data: {name: "test"},
  dataType: 'json',
contentType: 'application/json; charset=utf-8',
  completed: function(response){
      if(response['success']){
          // Happy Dance
      }else{                
          // Fail Code
      }
  }
});`;

	const code3 = `
simpleAjax.chain_request([{
  name: "one",
  url: "http://localhost/demo/mapping",
  datatype: "html",
  type: "get"
},{
  name: "two",
  url: "http://localhost/UXFramework",
  datatype: "html",
  type: "get"
},{
  name: "three",
  url: "http://google.com",
  datatype: "html",
  type: "get"
}], function(results){
  // Do something with the results
});
  `;
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

<p>
	As I continue to move into a world filled with Ajax Requests, I found out that although the built
	in Ajax routine for JQuery is pretty handy, I needed something more. I didn't like seeing this in
	my code:
</p>

<Highlight language={javascript} code={code1} />

<p>
	This meant if I have a really long block of code inside of my fail routine, then I might have to
	duplicate the same code if the response is an Error. Granted, sometimes I might want to change the
	functionality, but for the most part you are going to either send a "post" or "get" with JSON data
	and expect a response back whether a success or fail and then write functionality based on that.
	So I created a simple way to handle this madness. I called it SimpleAjax.
</p>

<Highlight language={javascript} code={code2} />

<p>
	Now I can standardize all my Ajax requests and one nice simple response that contains the status,
	responseText, and XHR if you need to go further. I've also taken this class and went one step
	further with making a simple way to make multiple asynchronous Ajax requests and once all calls
	are complete run a custom callback. See:
</p>

<Highlight language={javascript} code={code3} />

<p>
	What's neat about this is that the response I get back is a JSON with all the requests I made and
	their response. Super easy to iterate through (seriously, response.three will get you the results
	you pulled from "google.com").
</p>

<p>
	<a href="https://github.com/mikemunsie/Simple-Ajax">https://github.com/mikemunsie/Simple-Ajax</a>
</p>
