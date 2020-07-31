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