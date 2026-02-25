# Astro Sanity Starter

[Live Demo](https://astro-sanity-starter-demo.netlify.app/)

A minimal Astro and Sanity CMS starter template for building modern, content-driven websites.

| Prerequisites                                                                |
| :--------------------------------------------------------------------------- |
| [Node.js](https://nodejs.org/) v20.+                                         |
| (optional) [nvm](https://github.com/nvm-sh/nvm) for Node version management. |

## Getting Started

Create local project from this repo and run:

```txt
npm install
```

### Sign Into Sanity

If you are not already signed into Sanity via the CLI, install the CLI package and then run the login command.

```txt
npm install -g @sanity/cli
sanity login
```

This will open a browser and walk you through the authentication process.

### Import Content

Once authenticated, you'll be able to create a Sanity project and import content.

```txt
npm run create-project
```

_Note: You may want to sign into Sanity in the browser and rename your project._

Once the project exists and you've set the environment variables, you can import the content.

```txt
npm run import {projectId}
```

Replace `{projectId}` with the project ID output from the previous command.

### Store Sanity Values

Sign into Sanity to create an editor token, navigate to the following address (replace the `SANITY_PROJECT_ID` with your project ID) `https://www.sanity.io/manage/personal/project/SANITY_PROJECT_ID/api#tokens`. Then create `.env` file in you repo, copy & paste the following environment variables into the file and set their values.

```txt
SANITY_PROJECT_ID="..."
SANITY_DATASET="..."
SANITY_TOKEN="..."
```

### Run Sanity Studio

Sanity Studio code exists for this project in the `studio` directory. First, install the dependencies in this directory.

```txt
cd studio
npm install
```

Then create a `.env` file in the `studio` directory with the following environment variables and set their values:

```txt
SANITY_STUDIO_PROJECT_ID="..."
SANITY_STUDIO_DATASET="..."
```

Then run the studio locally.

```txt
sanity dev
```

If you want to see the content, you can open your browser and navigate to localhost:3333.

### Start Development Server

Then you can run the Astro.js development server in root directory:

```txt
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to see your site.

## Support

If you get stuck along the way, get help in our [support forums](https://answers.netlify.com/).
