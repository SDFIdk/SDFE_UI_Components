# SDFE_UI_Components
UI library for CSS and Vue components, published as npm packages for use across projects

## Use UI Components in a project

Add or update your local `.npmrc`

```
@dataforsyningen:registry=https://npm.pkg.github.com/dataforsyningen
save-exact=true
```

Then install package as dependency
```
npm install @dataforsyningen/sdfe-ui-components --save
```

## Develop new features in this repo

### Authenticate
> NOTE: This is only for local development, and won't cover CI authentication

1. Create a [Github access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) with access to packages: 
![Capture](https://user-images.githubusercontent.com/391833/89022056-b444a300-d321-11ea-89c2-7c114f9b07bb.PNG)

2. Add your personal access token to your `~/.npmrc` file. (See [Configuring npm for use with GitHub Packages](https://docs.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages))

Replace TOKEN with your personal access token. Create a new ~/.npmrc file if one doesn't exist. 
```
//npm.pkg.github.com/:_authToken=TOKEN
```

### Run local docs site

Clone repo and `npm install`. Then run the local docs site with 

```
npm run docs:dev
```

### Add a new component

1. Create component files in `src/components/`
2. Register component in `src/index.js`
3. Add component in `docs/.vuepress/components/` with the same name (this registers the component for use in markdown, see [Using Components](https://vuepress.vuejs.org/guide/using-vue.html#using-components))
```bash
# docs/.vuepress/components/UiTest.vue
<template>
  <UiTest />
</template>
```
4. Write documentation with example in `docs/components/README.md`

### Publish new package version

1. Install [np](https://www.npmjs.com/package/np) package publisher 
```
npm install np -g
```

2. Compile library to dist folder
```
npm install
npm run build
```

3. Bump version and release tag on Github
```
np patch
```
> Check np settings in [.np-config.json](./.np-config.json)

> To release minor version instead of patch, write `np minor`. See [np documentation](https://www.npmjs.com/package/np).

4. Publish npm package
```
npm publish
```
