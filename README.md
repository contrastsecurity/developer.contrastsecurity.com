# developer.contrastsecurity.com

Sources for the Contrast Developer site.

## Getting Started

You will need [Node.js](https://nodejs.org/en/) and [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) on your system.

Open a command-prompt or terminal, and run the following commands:

```
git clone https://github.com/contrastsecurity/developer.contrastsecurity.com
cd developer.contrastsecurity.com
npm install
```

## Testing the Site

You can start a live web server (which automatically rebuilds when changes are made) using the following command within the "developer.contrastsecurity.com" directory:

```
npm run start
```

## Editing a Page

The majority of the site pages are written in [Markdown](https://www.markdownguide.org/) (\*.md). This is a very straightforward way to focus on content. It helps to have a text editor (like [VSCode](https://code.visualstudio.com/)) that understands Markdown syntax, however almost any simple text editor will work properly.

You can open, edit and save any \*.md file and the page will be rebuilt automatically.

If it is a small edit, you can also make the change live on GitHub. Find the page you wish to edit, click the "edit" icon, and you can make the changes online. Once you are done, GitHub will create the pull request for you ([example](https://github.com/contrastsecurity/developer.contrastsecurity.com/edit/master/learn/getting-started/contrast-cli.md)). You will need to be signed into your GitHub account.

## Adding a Page

To create a new page within the Learn section, create a new \*.md file where you would like it to be located. If it is at the top-level, it may require a change to [sidebars.js](sidebars.js) in order to show the page in navigation. Otherwise, the page will be added to navigation automatically. Create the page, save, and if you already started the dev server, the page will show up momentarily.

## Contributing Changes

If you have direct commit rights, use something like the following:

```
git add -u
git commit -m "Added new page"
git push
```

If you do not, [fork](https://github.com/contrastsecurity/developer.contrastsecurity.com/fork) the repository, then [make a pull request](https://opensource.com/article/19/7/create-pull-request-github). 

If you have already cloned the primary repository, you can change your clone to point to your fork instead using the following command:

```
git remote set-url origin https://github.com/<your name>/developer.contrastsecurity.com
```

Then you can create a new branch, push and use the GitHub web UI to start a pull request.
