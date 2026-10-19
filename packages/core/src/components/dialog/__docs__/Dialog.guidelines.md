<script lang="ts" setup>
  import illustration from './images/dialog-anatomy.png';

  const anatomy = `
    <template>
      <PeachyDialog>
         <PeachyDialogButton />

         <PeachyDialogPanel>
            <PeachyDialogHeading />
            <PeachyDialogDescription />
            <PeachyDialogCloseButton />
         </PeachyDialogPanel>
      </PeachyDialog>
    </template>

    <script lang="ts" setup>
      import {
         PeachyDialog,
         PeachyDialogButton,
         PeachyDialogPanel,
         PeachyDialogHeading,
         PeachyDialogDescription,
         PeachyDialogCloseButton
      } from "@typeach/core";
    <\/script>
  `;
</script>

<Do11yAnatomy :code="anatomy" :illustration="illustration">

1. Button - opens the dialog
2. Panel - the dialog
   1. Heading
   2. Description
   3. Close button

</Do11yAnatomy>

## Use case

<Do11yDoDont do-title="Use when.." dont-title="Avoid when..">

<template v-slot:do>

- You want the user to focus on a specific task.
- There is an urgent decision to be made (set `modal` to `"alert"`.).

</template>

<template v-slot:dont>

- The content requires _prolonged_ interaction or a step-by-step process, use a new page.

</template>

</Do11yDoDont>
