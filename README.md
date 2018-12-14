# nuxt-meituan

> My superior Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).


####  主要是eslint-plugin-vue在编译过程中，默认将项目中的所有组件 首字母大写 例如 <Button> ,造成 <nuxt />报错 Component name "nuxt" is not PascalCase -- vue/component-name-in-template-casing
![vue/component-name-in-template-casing 修改方案](https://github.com/vuejs/eslint-plugin-vue/pull/714/commits/a7c23586946dc0df1fc90ea8ae86c5e46251d4c1)

