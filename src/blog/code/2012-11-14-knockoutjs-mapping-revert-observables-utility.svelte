<p>
	With KnockoutJS you have input fields that in most cases have the value binded to an observable.
	What this means is that when you change the value of the input field, the variable that is binded
	to that textbox will be updated as well. This is extremely cool but has one disadvantage.
</p>

<p>
	Lets say you are creating an admin section and have a list of users with the ability to change
	their first and last name. You change the user's first name and then decide to cancel. For most
	people you would create a backup observable called "original-observableNameGoesHere" and then
	update the value to the original value... but that just looks terrible.
</p>

<p>
	So I decided there had to be an easier way and I went on to create a class that could handle
	reverting observables back to their original state. I originally created this to work for arrays,
	but now have it structured to work with an individual object as well. Super simple to implement.
	Here's an example:
</p>

<p>
	<a href="https://github.com/mikemunsie/KnockoutMapping-Observable-Revert-Utilities"
		>https://github.com/mikemunsie/KnockoutMapping-Observable-Revert-Utilities</a
	>
</p>
