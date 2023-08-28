<script>
	import Highlight from "svelte-highlight";
	import javascript from "svelte-highlight/languages/javascript";
	import atomOneDark from "svelte-highlight/styles/atom-one-dark";

	const code1 = `"documents.js" | "documents.js" | "documents.php" | "documents.php" | "documents.php"`;
	const code2 = `<script class="view" type="text/x-jquery-tmpl" view="documents" />`;
	const code3 = `<script class="manage" type="text/x-jquery-tmpl" view="documents" />`;
	const code4 = `<script class="edit" type="text/x-jquery-tmpl" view="documents" />`;
	const code5 = `
"view_documents.js" | "model_documents.js" | "template_documents.php" | "model_documents.php" |
"ajaxcontroller_documents.php"  
`;
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

<p>
	I have been striving to create some structure in the world of developing single page applications
	using JQuery, PHP, and MySQL. What I have come to the realization is seeing this in my editor:
</p>

<Highlight language={javascript} code={code1} />

<p>
	I'm not sure how I feel about this haha, but for my structure it makes sense. Lets dive into the
	craziness.
</p>

<p>
	1. "templates/documents.js" is the BackboneJS View for my documents JQuery template. This supports
	the logic that goes into the template.
</p>

<p>
	2. "models/documents.js" is the BackboneJS Model used for documents (which basically for me is a
	collection of functions that call to the controller and recieve data - for now just a bunch of
	ajax routines with callbacks).
</p>

<p>
	3. "ajax_controllers/documents.php" is the PHP MVC controller that is used to handle Ajax Based
	events for the documents.
</p>

<p>
	4. "templates/documents.php" is a collection of templates and elements used for the documents
	view. I structure them like this:
</p>

<Highlight language={javascript} code={code2} />

<Highlight language={javascript} code={code3} />

<Highlight language={javascript} code={code4} />

<p>
	You see, I have three different templates, but you can tell which view it belongs to by using the
	"view" attribute I made up. The class simple tells me what the template is used for.
</p>

<p>
	5. "models/documents.php" is my PHP MVC model used for Documents. It of course contains all the
	queries and magic.
</p>

<p>
	Now let alone I could make this even worse by saying I have a PHP MVC view called "documents" that
	belongs in "views/documents.php" - but it's already bad enough lol.
</p>

<p>
	I thought logically this would be easier to see the structure of everything and easily adjust or
	change things knowing exactly where everything is; however, i'm slightly debating on two things:
	1. Change my programming editor, or 2. change the names of the files to something readable so I
	know which is which.
</p>

<p>Ex:</p>

<Highlight language={javascript} code={code5} />

<p>
	It's a debate, I am going to explore both of my options. I am not bound by a set of rules that I
	have to use, but I would like it to make sense though - at least to me. Time to explore!
</p>
