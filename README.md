# Astro Netlify Sanity Starter

## Quickstart

Create local project from this repo and run:

```txt
npm run install
```

### Sign Into Sanity

If you are not already signed into Sanity via the CLI, install the CLI package and then run the login command.

    npm install -g @sanity/cli
    sanity login

This will open a browser and walk you through the authentication process.

### Import Content

Once authenticated, you'll be able to create a Sanity project and import content.

    npm run create-project

_Note: You may want to sign into Sanity in the browser and rename your project._

Once the project exists and you've set the environment variables, you can import the content.

    npm run import {projectId}

Replace `{projectId}` with the project ID output from the previous command.

### Store Sanity Values

Sign into Sanity to create an editor token, navigate to the following address (replace the `SANITY_PROJECT_ID` with your project ID) `https://www.sanity.io/manage/personal/project/SANITY_PROJECT_ID/api#tokens`. Then create `.env` file in you repo, copy & paste the following environment variables into the file and set their values.

```plain
SANITY_PROJECT_ID="..."
SANITY_DATASET="..."
SANITY_TOKEN="..."
```

### Run Sanity Studio

Sanity Studio code exists for this project in the `studio` directory. First, install the dependencies in this directory.

    cd studio
    npm install

Then run the studio locally.

    npm start

If you want to see the content, you can open your browser and navigate to localhost:3333.

### Run Sanity Studio

Sanity Studio code exists for this project in the `studio` directory. First, install the dependencies in this directory.

    cd studio
    npm install

Then run the studio locally.

    npm start

If you want to see the content, you can open your browser and navigate to localhost:3333.

### Start Development Server

Then you can run the Astro.js development server in root directory:

```txt
npm run dev
```

Install Netlify Create CLI:

    npm install -g @stackbit/cli

And the Stackbit development server.

    stackbit dev

This outputs your own Netlify Create URL. Open this, register or sign in, and you will be directed to Netlify Create's visual editor for your new project.
