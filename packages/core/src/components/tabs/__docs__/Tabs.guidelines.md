<script lang="ts" setup>
  import illustration from './images/tabs-anatomy.png';

  const anatomy = `
    <template>
      <PeachyTabs>
         <PeachyTabsList>
            <div>
               <PeachyTabsButton />
               <PeachyTabsActionButton />
            </div>
         </PeachyTabsList>

         <PeachyTabsPanel />
      </PeachyTabs>
    </template>

    <script lang="ts" setup>
      import {
         PeachyTabs,
         PeachyTabsList,
         PeachyTabsButton,
         PeachyTabsPanel
      } from "@typeach/core";
    <\/script>
  `;
</script>

<Do11yAnatomy :code="anatomy" :illustration="illustration">

1. List
   1. Button
   2. Action button
2. Panel

</Do11yAnatomy>

## Use case

<Do11yDoDont do-title="Use when.." dont-title="Avoid when..">

<template v-slot:do>

- You want to switch part of the page's content.

</template>

<template v-slot:dont>

- You want to hide information that is only relevant to some users, use [Disclosure](/c/disclosure).
- Part of a step-by-step process.
- You want to filter a view, use a [Radio field](/f/radio-field).
- You want to switch between sub pages, use [Link](/c/link).

</template>

</Do11yDoDont>
