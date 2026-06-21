<img style="height: 5rem;" src="https://raw.githubusercontent.com/sq11y/typeach/refs/heads/main/docs/public/logo.webp" alt="Mascot" />

# Typeach

An unstyled component library for Vue.

## Getting started

Install [@typeach/core](https://www.npmjs.com/package/@typeach/core).

```
pnpm i @typeach/core
```

Import components. You can find a list of components with examples in the [documentation](https://sq11y.github.io/typeach/p/components).

```vue
<template>
  <PeachyButton> Button </PeachyButton>
</template>

<script lang="ts" setup>
import { PeachyButton } from "@typeach/core";
</script>
```

## Using the documentation theme

Install [@typeach/theme](https://www.npmjs.com/package/@typeach/theme).

```
pnpm i @typeach/theme
```

Import the theme.

```scss
// CSS variables
@use "@typeach/theme";

// Reset
@use "@typeach/theme/reset";

// SCSS mixins and functions
@use "@typeach/theme/utils";
```
