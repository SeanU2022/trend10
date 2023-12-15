# Seans High Level coding log
z
> 🧑‍🚀 **Sources of inspiration** 
akord, astro-course-demo, astro-blog-generated-example, 
GitHubBible>4.a Astro installation with GitHub

```sh
npm create astro@latest
```
add src/consts.ts
use PORT in /src/astro.config.ts
```sh
npx astro add tailwind 
+tailwiindconfig.mjs 
+astro.config.ts/integrations: [tailwind()]
```
later we will remove `<style>` from Layout & index
```
✗  UPGRADE TO 4.0.5= npx @astrojs/upgrade
```

Using header/footer from generated code

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── consts.ts
│   ├── astro.config.ts
│   ├
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
