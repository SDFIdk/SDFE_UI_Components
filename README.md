# SDFE_UI_Components
UI library for CSS and Vue components, published as npm packages for use across projects

## Use UI Components in a project

Add or update your local `.npmrc`

```bash
@dataforsyningen:registry=https://npm.pkg.github.com/dataforsyningen
save-exact=true
```

Install package as dependency
```bash
npm install @dataforsyningen/sdfe-ui-components --save
```

Install components and styles in your app
```js
import SDFEUIComponents from '@dataforsyningen/sdfe-ui-components'
import '@dataforsyningen/sdfe-ui-components/dist/ui-components.css'

Vue.use(SDFEUIComponents)
```

Update to latest version
```bash
npm install @dataforsyningen/sdfe-ui-components@latest --save
```

### Edit UI components side by side with your project

This is an example of a webpack config update that allows you to reference the `sdfe-ui-components` from a local directory when running local dev site. You'll need to add ` -- --env.useLocalUI` to the npm command, e.g.

```
npm run dev -- --env.useLocalUI
```

```js
// webpack.config.js
const path = require('path')

module.exports = env => {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      // Link to local repository when running
      // npm run dev -- --env.useLocalUI
      '@dataforsyningen/sdfe-ui-components': env && env.useLocalUI ? path.join(__dirname, '../SDFE_UI_Components') : '@dataforsyningen/sdfe-ui-components'
    }
  }
}
```
Or in a vue-cli app (not tested yet)
```js
// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.resolve
      .alias
        .set('@dataforsyningen/sdfe-ui-components', process.env && process.env.useLocalUI ? path.join(__dirname, '../SDFE_UI_Components') : '@dataforsyningen/sdfe-ui-components')
  }
}
```

## Develop new features in this repo

### Authenticate
> NOTE: This is only for local development, and won't cover CI authentication

1. Create a [Github access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) with access to packages: 
![Capture](https://user-images.githubusercontent.com/391833/89022056-b444a300-d321-11ea-89c2-7c114f9b07bb.PNG)

2. Authenticate by logging in to npm with your personal access token. This will add the token to your `~/.npmrc` file. (See [Configuring npm for use with GitHub Packages](https://docs.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages))

```bash
npm login --registry=https://npm.pkg.github.com

> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```

> Check `~/.npmrc` for the new token

### Run local docs site

Clone repo and `npm install`. Then run the local docs site with 

```bash
npm run dev
```
> This will also build and watch the package files in `/dist/`

### Add a new component

1. Create component files in `src/vue/components/`
2. Register component in `src/vue/index.js`
3. Write documentation with example in `docs/components/[name]/README.md`
4. If needed, create example component for use in documentation in `docs/.vuepress/components/`.
5. Add the new documentation page to the navigation in `docs/.vuepress/config.js`.

### Publish new package version
> TO BE UPDATED!

1. Compile library to dist folder
```bash
npm install # "npm ci" on CI tool
npm run build
```

2. Bump version and release tag on Github
```bash
npm run version -- patch
# similar to `np patch` command
```
> Check np settings in [.np-config.json](./.np-config.json)

> To release minor version instead of patch, write `npm run version -- minor`. See [np documentation](https://www.npmjs.com/package/np).

3. Publish npm package to [npm.pkg.github.com](https://github.com/dataforsyningen/SDFE_UI_Components/packages/336305)
```bash
npm publish
```
