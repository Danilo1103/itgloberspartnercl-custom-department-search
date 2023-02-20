# Department Search

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)]

Perform a specific search for the chosen department, select a department and enter a search in the search-bar.

![image](https://user-images.githubusercontent.com/94373834/220135227-207c16a7-043f-4a8b-8fff-b8d017eb894a.png)

## Configuration 

1. Import the Department Search's app to your theme's dependencies in the manifest.json, for example:
```json
  "dependencies": {
    "vendor.custom-department-search": "0.x"
  }
 ```
 
 2. Add the Department Search block to the store-theme. For example:
```json
 "flex-layout.row#department-search":{
    "children": [
      "department-search"
    ]
  }
   ```

   Block name      | Description                                     |
| -------------- | ----------------------------------------------- |
| `department-search` | ![https://img.shields.io/badge/-Mandatory-red](https://img.shields.io/badge/-Mandatory-red)  Top level block that must be declared in the `store-theme` block to render department search   |

## Customization

| CSS Handles |
| ----------- |
|`containerPrincipal`|
|`containerCategory`|
|`containerLoading`|
|`textStyles`|
|`select--group`|
|`options--group`|



## Contributors

1. [Danilo Ibañez](https://www.linkedin.com/in/danilo-ib%C3%A1%C3%B1ez-519a4023a/)

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)