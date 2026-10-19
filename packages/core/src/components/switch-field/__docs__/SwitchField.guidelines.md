<script lang="ts" setup>
  import illustration from './images/switch-field-anatomy.png';

  const anatomy = `
    <template>
      <PeachySwitchField>
         <PeachyFieldLabel />
         <PeachyFieldDescription />

         <PeachySwitchTrack>
            <PeachySwitchThumb />
         </PeachySwitchTrack>

         <PeachyFieldError v-if="error" />
      </PeachySwitchField>
    </template>

    <script lang="ts" setup>
      import {
         PeachyFieldLabel,
         PeachyFieldDescription,
         PeachyFieldError,
         PeachySwitchField,
         PeachySwitchTrack,
         PeachySwitchThumb
      } from "@typeach/core";
    <\/script>
  `;
</script>

<Do11yAnatomy :code="anatomy" :illustration="illustration">

1. Track - the control
   1. Thumb - the visual indicator for which side is "on"

You'll find the label, descriptions and error messages documented in the [field component](/f/field).

</Do11yAnatomy>

## Use case

<Do11yDoDont do-title="Use when.." dont-title="Avoid when..">

<template v-slot:do>

- You want to turn a single option on or off.
- The user expects an immediate effect.

</template>

<template v-slot:dont>

- Switching between different options, use a radio.
- You want to trigger an _action_, use [Button](/c/button).

</template>

</Do11yDoDont>
