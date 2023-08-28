import walk from "walk";
import fs from "fs";
import shuffle from "lodash/shuffle.js";

const post_bgs = [
	"/images/bg_1.jpg",
	"/images/bg_2.jpg",
	"/images/bg_3.jpg",
	"/images/bg_4.jpg",
	"/images/bg_5.jpg",
	"/images/bg_6.jpg",
	"/images/bg_7.jpg",
	"/images/bg_8.jpg",
	"/images/bg_9.jpg",
	"/images/bg_10.jpg",
	"/images/bg_11.jpg"
];

function toTitleCase(str) {
	return str.replace(/(?:^|[\s-/])\w/g, function (match) {
		return match.toUpperCase();
	});
}

/**
 * Strips out the HTML in a string
 * @param  content
 * @return strippedHTML
 */
function stripHTML(content) {
	content = content.replace(/<h[0-9]>.*<\/h[0-9]>/gi, "");
	content = content.replace(/<\/a>/gi, "");
	content = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
	content = content.replace(
		/<svelte:head\b[^<]*(?:(?!<\/svelte:head>)<[^<]*)*<\/svelte:head>/gi,
		""
	);
	content = content.replace(/(<([^>]+)>)/gi, "");
	content = content.replace(/"/gi, "&quot;");
	return content;
}

/**
 * Truncates the string with a max amount of words
 * @param  content
 * @param  maxWords
 * @return content
 */
function truncate(content, maxWords) {
	content = content.replace(/\r?\n|\r|\n/g, "");
	content = content.replace(/\s\s/g, "");
	content = content.replace(/&nbsp;/g, "");
	content = content.split(" ").splice(0, maxWords).join(" ") + "...";
	return content;
}

/**
 * Get category articles (code, projects, etc)
 * @param  req          The router request
 * @return files        Array of all the articles
 */
function getCategoryArticles(category) {
	const files = [];
	let bgCounter = -1;
	const shuffledBgs = shuffle(post_bgs);
	walk.walkSync("./src/blog/" + category, {
		listeners: {
			names: function (root, nodeNamesArray) {
				nodeNamesArray.sort(function (a, b) {
					return a < b ? 1 : -1;
				});
			},
			file: async function (root, fileStats, next) {
				if (fileStats.name.indexOf(".DS_Store") > -1) return;
				const file = "./src/blog/" + category + "/" + fileStats.name;
				const contents = fs.readFileSync(file, "utf-8");
				const blog_title = toTitleCase(
					fileStats.name.substring(11).replace(".svelte", "")
				).replaceAll("-", " ");
				const blog_date = new Date(fileStats.name.substring(0, 10));
				const blog_preview = stripHTML(contents);

				bgCounter++;
				if (bgCounter >= shuffledBgs.length) {
					bgCounter = 0;
				}
				files.push({
					import: `/src/blog/${category}/${fileStats.name}`,
					url: `/${category}/${fileStats.name.replace(".svelte", "")}`,
					bg: shuffledBgs[bgCounter],
					category,
					title: blog_title,
					slug: fileStats.name.replace(".svelte", ""),
					date: fileStats.name.substring(0, 10),
					month: blog_date.getMonth(),
					day: blog_date.getDate(),
					year: blog_date.getFullYear(),
					preview: truncate(blog_preview, 30),
					strippedContent: truncate(blog_preview, 30000)
				});
				next();
			},
			errors: function (root, nodeStatsArray, next) {
				next();
			}
		}
	});
	return files;
}

export default function generateRoutes() {
	return {
		name: "generate-routes",
		enforce: "post",
		handleHotUpdate({ file }) {
			if (file.indexOf("articles.js") > -1) return;
			fs.writeFileSync(
				"./src/blog/articles.js",
				`
          /* eslint-disable */
          export const codeArticles = ${JSON.stringify(getCategoryArticles("code"))};
          export const projectArticles = ${JSON.stringify(getCategoryArticles("projects"))};
        `
			);
		}
	};
}

fs.writeFileSync(
	"./src/blog/articles.js",
	`
/* eslint-disable */
export const codeArticles = ${JSON.stringify(getCategoryArticles("code"))};
export const projectArticles = ${JSON.stringify(getCategoryArticles("projects"))};
`
);
