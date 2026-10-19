<script lang="ts" setup>
  import illustration from './images/toolbar-anatomy.png';

  const anatomy = `
    <template>
      <PeachyToolbar>
         <!-- Supported sub-components -->
      </PeachyToolbar>
    </template>

    <script lang="ts" setup>
      import { PeachyToolbar } from "@typeach/core";
    <\/script>
  `;
</script>

<Do11yAnatomy :code="anatomy" :illustration="illustration">

1. Toolbar
   1. Supported sub-components, which are listed in the API section

</Do11yAnatomy>

## Use case

<Do11yDoDont do-title="Use when.." dont-title="Avoid when..">

<template v-slot:do>

- You want to purposefully group controls together.

</template>

<template v-slot:dont>

- There is less than 3 controls.

</template>

</Do11yDoDont>
