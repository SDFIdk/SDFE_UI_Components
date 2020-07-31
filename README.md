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
npm run build
np patch
npm publish
```

> To release minor version instead of patch, write `np minor`