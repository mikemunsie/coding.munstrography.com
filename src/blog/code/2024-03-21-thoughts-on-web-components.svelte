<script>
	import Highlight from "svelte-highlight";
	import javascript from "svelte-highlight/languages/javascript";
	import atomOneDark from "svelte-highlight/styles/atom-one-dark";
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

<p>
	<strong>Oh it's 2024... might be time for a new post :)</strong>
</p>
<p>
	I used to think Web Components were the future of writing shared component libraries. It's an
	awesome idea on paper for a build once and share everywhere type of library; just don't expect
	your web components to do everything your framework components can.
</p>
<p>
	I've gotten used to passing objects into my components written in Vue, but it gets awkward with
	web components. Many people agree that stringifying a JSON object is a good path, but now your
	HTML is bloated with large strings everywhere. An approach I've learned to do instead is to use
	the reference of your web component and call an exposed function.
</p>
<Highlight
	language={javascript}
	code={`
<my-fancy-select></my-fancy-select>
<script>
  const el = document.querySelector("my-fancy-select");
  el.setOptions([{ value: "one", label: "one "}]);
</script>
`}
/>
<p>
	If you use a library like Vue, you can make a directive to call functions to a component pretty
	easily. This will help you set the options on the template rather than adding more Javascript.
</p>
<Highlight
	language={javascript}
	code={`
<my-fancy-select wc:setOptions="[{ value: "one", label: "one "}]"></my-fancy-select>
`}
/>
<p>
	Global styles are also tricky with web components, but you can import styles into your web
	component programatically with <a
		href="https://developer.mozilla.org/en-US/docs/Web/API/Document/adoptedStyleSheets"
		target="_blank">adopted style sheets</a
	>. This also makes performance better since you'll have a stylesheet in memory and pick which
	components need to use it.
</p>
<p>
	If you are a small team and building a few apps using the same framework, I don't see the value
	for converting everything to web components. Web components take longer to build, can really bite
	you with Form components if you forgot to attach your data correctly (<a
		href="https://dev.to/stuffbreaker/custom-forms-with-web-components-and-elementinternals-4jaj"
		target="_blank">Make sure to use ElementInternals</a
	>), and lastly it's still awkward to make things pop out of the DOM. I've been using position
	fixed to get around that, but I also wish the
	<a
		href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover"
		target="_blank"
		>Popover element was better supported
	</a> - no joke, the Modal and Popover elements are amazing.
</p>
<p>
	Where it does shine though is keeping your components and design consistent across different teams
	and tools. Not every app is written in React, and not every app is a SPA. Server side rendered
	apps are making a comeback, and front end engineers love trying a new library every few months
	(I'm guilty of this, I love seeing what's out there). I am hopeful for web components as I think
	they've solved a lot of problems, but we've got a ways to go.
</p>
