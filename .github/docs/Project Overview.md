## **Fst Site Front End Codebase Overview**

The project was set up with vite vue scaffold

.

### **Other addons to the project**

_check out the package.json_

Eslint was added to support strict coding standards

Prettier was added for formatting

Vitest and Vue Testing Library @testing-library/vue for unit tests and component testing

The project uses vue-router (browser history) and vuex(state management)

.

### **Folder Structure**

The root of the project contains the following folders [.github,.vscode,dist,node_modules, pubilc, src]

. **_.github Folder_** : it contains the repository workflows, and other documentations, issues etc. This is a very important folder as it is pivotal for the effective administration of the repository

.**_public Folder_**: contains some resources, utilized by vite during build

.**_src Folder_**: contains the code

Files in the root folder are the package.json,package-lock.json,..., and other config files

.

### **root/src folder**

Folders in the src section : [assets,components,router,store,tests,utils]

.**_Assets Folder_** : Contains the images, fonts and other resources that will be integrated to the project. resources that are gotten from external CDN will be added to this documentation for reference

.**_components_** : Components folder contains reusable components that would be used across multiple parts of the application. The structure of the components would be described in the [components structure of this documentation][component_structure]

.**_router_** : contains the code tha defines the app router

.**_store_** : contains the code that defines the app store

.**_test_** : contains test to utility functions. Component tests are written with components in their individual folders,i.e if we have a component button, then in the button folder where the button.vue file, we also have the test for button, i.e button.test.js

### [component_structure]: **Component Structure _root/src/components_ folder**

Inside the components folder, we define reusable components.

.The structure is given below **_[components/mycomponent/...(files)]_**

    . components(folder) ->
        . my-component(folder) ->
            ->MyComponent.vue(file)
            ->my-component.test.vue(file)
            ->my-component.css(file)
            ->my-component.md(file)

The .vue file contains the component template and script, the style will be contained in the .css file and imported to the components as shown below

```html
MyComponent.vue file

<template>
  <div>
    <p>My Component</p>
  </div>
</template>

<script>
  // style for the component is imported here
  import "./my-component.css";
  export default {
    data() {
      return {
        text: "ok",
      };
    },
  };
</script>
```

#### **Testing the component**

```js
// component.test.js

import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/vue";
import Comp from "./MyComp.vue";

describe("tests", () => {
  test("what does this test determine?", () => {
    render(Comp);
    let myText = screen.getbyText("My Component");
    expect(myText.innerHtml).toBe("My Component");
  });
});
```

The markdown file is meant to explain details about the component for easy team collaboration.

.

## **CSS styles project implementation**

Css styles that would be used across the whole app is put in the main.css file, which is located in the src folder. Other styles such as fonts are located in their own files all in the src folder. css files in the src folder are imported to the main.js file

.The Css styles for individual components are located in the folder where the components are contained and are imported in the components script section (.vue).
