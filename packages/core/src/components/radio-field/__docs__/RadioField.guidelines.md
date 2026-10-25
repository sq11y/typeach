<script lang="ts" setup>
  import illustration from './images/radio-field-anatomy.png';

  const anatomy = `
    <template>
      <PeachyRadioField>
         <PeachyFieldLabel />
         <PeachyFieldDescription />

         <PeachyRadioOption>
            <PeachyRadioOptionInput />
         </PeachyRadioOption>

         <PeachyFieldError v-if="error" />
      </PeachyRadioField>
    </template>

    <script lang="ts" setup>
      import {
         PeachyFieldLabel,
         PeachyFieldDescription,
         PeachyFieldError,
         PeachyRadioField,
         PeachyRadioOption,
         PeachyRadioOptionInput
      } from "@typeach/core";
    <\/script>
  `;
</script>

<Do11yAnatomy :code="anatomy" :illustration="illustration">

1. Radio option
   1. Radio option input

You'll find the label, descriptions and error messages documented in the [field component](/f/field).

</Do11yAnatomy>

## Use case

<Do11yDoDont do-title="Use when.." dont-title="Avoid when..">

<template v-slot:do>

- You want the user to pick a single option.
- There are few options to pick from.

</template>

<template v-slot:dont>

- There are more than 5-7 options, use a [Select field](/f/select-field).
- The user can select multiple options, use a checkbox group.
- You want to turn a single option on or off, use a [Switch field](/f/switch-field).

</template>

</Do11yDoDont>
