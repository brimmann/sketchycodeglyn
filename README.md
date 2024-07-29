# Vue Sketchy Components Library

Welcome to the **Codeglyn UI Kit**! This library is designed to help you save time and money by providing simple yet powerful UI components that you can easily integrate into your projects.

## Table of Contents

- Introduction
- Components
  - SketchyDiv
  - SketchyBtn
  - Tabs and Tab
  - SketchyHLine
- Installation
- Usage
- Contributing
- License

## Introduction

The Vue Sketchy Components Library allows you to build and design your UI without worrying too much about the details. It's simple but powerful, making it easy to create beautiful interfaces quickly.

## Components

### SketchyDiv

The `SketchyDiv` component is the most basic component in this library. It can be used anywhere just like normal `<div>` elements.

### SketchyBtn

The `SketchyBtn` component is a button that works just like normal buttons. It's easy to use and customize.

### Tabs and Tab

The `Tabs` component is the parent element, and the `Tab` component should be placed inside it. This allows you to create tabbed interfaces effortlessly.

### SketchyHLine

The `SketchyHLine` component is a simple horizontal line separator that you can use to divide sections of your UI.

## Installation

To install the Vue Sketchy Components Library, use npm or yarn:

```bash
npm install codeglynuikit
```

## Usage
```javascript
<template>
  <SketchyDiv class="pd" style="margin-bottom: 10px">INsied</SketchyDiv>
  <SketchyBtn
    label="Click"
    style="padding: 10px 5px; font-size: 18px; margin-bottom: 100px"
  />
  <SketchyHLine />
  <div>NEXT</div>
  <br />
  <SketchyTabs v-model="tab">
    <SketchyTab name="focuz" label="Focuz Time" />
    <SketchyTab name="short" label="Short Break" />
    <SketchyTab name="long" label="Long Break" />
  </SketchyTabs>
</template>

<script setup>
import { SketchyDiv, SketchyBtn, SketchyHLine, SketchyTab, SketchyTabs } from "codeglynuikit";
import { ref } from "vue";

const tab = ref("focuz")

</script>

<style>
.pd {
  padding: 80px;
}
</style>
```
## Contributing
We welcome contributions to the Vue Sketchy Components Library! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request on our GitHub repository or you can also contact me through my email. I would love to hear from you.

## Licence
This project is licensed under the MIT License. See the LICENSE file for more details.
