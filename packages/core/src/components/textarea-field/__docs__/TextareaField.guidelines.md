<script lang="ts" setup>
  import illustration from './images/textarea-field-anatomy.png';

  const anatomy = `
    <template>
       <PeachyTextareaField>
          <PeachyFieldLabel />
          <PeachyFieldDescription />

          <PeachyTextareaInput />

          <PeachyFieldError v-if="error" />
       </PeachyTextareaField>
    </template>

    <script lang="ts" setup>
      import {
         PeachyFieldLabel,
         PeachyFieldDescription,
         PeachyFieldError,
         PeachyTextareaField,
         PeachyTextareaInput
      } from "@typeach/core";
    <\/script>
  `;
</script>

<Do11yAnatomy :code="anatomy" :illustration="illustration">

1. Input

You'll find the label, descriptions and error messages documented in the [field component](/f/field).

</Do11yAnatomy>

## Use case

<Do11yDoDont do-title="Use when.." dont-title="Avoid when..">

<template v-slot:do>

- You need a long free-form text input.

</template>

<template v-slot:dont>

- The value should be short and concise, use [Text Field](/f/text-field).

</template>

</Do11yDoDont>
