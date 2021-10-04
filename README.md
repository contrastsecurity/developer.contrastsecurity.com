# Contrast Dev Site

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

We'll work here until we work elsewhere. This just makes it easy to show.

npm install
npm start
localhost 3000

Audience for site:
- Devs who are supposed to use Contrast and encountering it.
- Devs who want to "know security" scoped to our vision.

Audience is not:
- General security knowledge (too broad)
- AppSec (except maybe to give them materials for the user)

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
