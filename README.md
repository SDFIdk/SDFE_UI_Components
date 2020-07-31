# SDFE_UI_Components
UI library for CSS and Vue components, published as npm packages for use across projects

## Authenticate

TBD;

## Usage guide

Add or update your local `.npmrc`

```
@dataforsyningen:registry=https://npm.pkg.github.com/dataforsyningen
save-exact=true
```

Then install package as dependency
```
npm install @dataforsyningen/sdfe-ui-components --save
```

## Development

Clone repo and `npm install`. Then run the local docs site with 

```
npm run docs:dev
```

## Publish new version

Install [np](https://www.npmjs.com/package/np) package publisher 

```
npm install np -g
```

Compile library to dist folder

```
npm install
npm run build
np patch --no-publish --no-cleanup
npm publish
```

> The `--no-publish` flag is set to let npm do the publishing. The `--no-cleanup` flag avoids re-installing `node_modules`. 

> To release minor version instead of patch, write `np minor --no-publish --no-cleanup` as the 3rd command. See [np documentation](https://www.npmjs.com/package/np).