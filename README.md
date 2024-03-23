# Welcome to design-system 👋
[![Version](https://img.shields.io/npm/v/design-system.svg)](https://www.npmjs.com/package/design-system)

> Design-System using Storybook.

## Install

```shell
# React, Typescript
$ npm create vite@latest

# Storybook
$ npx storybook@latest init

# https://storybook.js.org/docs/builders/vite
$ npm install @storybook/builder-vite --save-dev

# https://tailwindcss.com/docs/guides/vite
$ npm install -D tailwindcss postcss autoprefixer
$ npx tailwindcss init -p

# https://www.npmjs.com/package/@fontsource/noto-sans
$ npm install @fontsource/noto-sans

# https://chromatic.com (sign-up with Github)
$ npm install --save-dev chromatic

# https://storybook.js.org/docs/writing-tests/accessibility-testing (storybook accessbility)
$ npm install @storybook/addon-a11y --save-dev
$ npm install axe-playwright --save-dev
$ npm install @storybook/test-runner --save-dev
# $ npx playwright install

# https://storybook.js.org/docs/writing-tests/interaction-testing
$ npm install @storybook/components @storybook/addons --save-dev
$ npm install @storybook/test @storybook/addon-interactions --save-dev
$ npm install @storybook/vue3 --save-dev
```

## Usage

```sh
# project
$ npm run dev

# storybook
$ npm run storybook

# chromatic
# https://www.chromatic.com/docs/storybook/ci/
$ npx chromatic --project-token={your-token}

# tailwind css export for npm packaging (building tailwind css)
# https://tailwindcss.com/docs/installation
$ npx tailwindcss -i ./src/index.css -o ./index.css --watch
$ npm login
$ npm publish --public
```

## Run tests

```sh
$ npm run test-storybook
```

## Results

- [storybook-design-system-test-by-kevin](https://www.npmjs.com/package/storybook-design-system-test-by-kevin)

## What I need to know

- Cumulative Layout Shift (CLS)
- Event Bubbling
- [Workflow Storybook Test Scripts hangs indefinitely](https://github.com/storybookjs/test-runner/issues/301)

## Author

👤 **Kevin Ahn**

* Github: [@seung-seop-ahn](https://github.com/seung-seop-ahn)