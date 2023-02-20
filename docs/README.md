📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Department Search

[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)

The custom-department-search component is a department filtering component, it allows you to do custom searches by store departments and thus find the product a little more precisely.

<img width="508" alt="image" src="https://user-images.githubusercontent.com/90701896/220157713-b8ac6ff8-51f1-4b16-b088-0680582132f4.png">

## Configuration 

1. Import the Department Search's app to your theme's dependencies in the manifest.json, for example:
```json
  dependencies: {
    "{vendor}.custom-department-search": "0.x"
  }
 ```
 
 2. Add the department search block to the store-theme. For example:
```json
 "flex-layout.col#search_by_department": {
    "title": "Search by department",
    "children": [
        "rich-text#title__search-by-department",
        "department-search"
        ]
  },
   ```

   Block name      | Description                                     |
| -------------- | ----------------------------------------------- |
| `department-search` | ![https://img.shields.io/badge/-Mandatory-red](https://img.shields.io/badge/-Mandatory-red)  Top level block that must be declared in the `store-theme` block to render department search   |

## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

| CSS Handles |
| ----------- | 
|`container__selectDepartment`|
|`select__department`|
## Contributors

Thanks goes to these wonderful people:

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)