# frontend-seed
Frontend seed


## Configuration

Clone `.env.sample` to `.env` in the same directory and update configuration for project.


## Quick Start

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload
$ npm run dev

# build for staging and production
$ npm run build
$ npm start
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

### Quick Start With Docker

- Start docker container: `docker-compose up` or `docker-compose up -d`
- Refer to docker compose document in [here](https://docs.docker.com/compose/overview/#compose-documentation).

> If `node_modules` is not exists, it will run `npm install` before into docker container.

### Setup auto deployment

- You should setup the testing step for make sure anything is good. Example:
```
npm install && npm run build
```

- Setup the deployment step like this:
```
- apk add --update openssh
- ssh $STAG_USER@$STAG_ADDR "cd $STAG_PROJECT_PATH && git pull && docker system prune -f && docker-compose build && docker-compose up -d && exit;"
```


## Workflow

### Branch prefixes

- bugfix/
- feature/
- hotfix/
- release/

> Exp: feature/feature-name
### Structure folder
- assets: contains any assets un-compiled such as scss file, images, fonts
- components: contains vue components
- helper: contains any function support for convert data, format date,...
- layouts: includes application layouts, layouts are used to change the look and feel of your page (ex: login page, signup page not need header, footer but home page, detail page need)
- middleware: contains application middleware, define custom functions that can be run before rendering page
- pages: contains vue pages
- plugins: conains js plugin (axios, boostrap)
- static: contains images, fonts (file not need compile)
- store: contains vuex file
### Gitflow workflow

<div align="center">
    <img src="https://wac-cdn.atlassian.com/dam/jcr:61ccc620-5249-4338-be66-94d563f2843c/05%20(2).svg?cdnVersion=411" height="400" />
</div>

### CICD pipeline deployment

![CICD pipeline deployment](https://cdn-images-1.medium.com/max/2600/1*1kUhczYDfpkWXSFt0mI2dA.png)
