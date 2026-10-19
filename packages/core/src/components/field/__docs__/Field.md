---
title: "Field"
slug: "/f/field"
description: "Help texts and validation."
illustration: "field.png"
color: "purple"
---

<script setup>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';

  import routes from "do11y:routes";

  import FieldSandbox from './Field.sandbox.vue';

  import FieldDescriptionMeta from '../FieldDescription.vue?meta';
  import FieldErrorMeta from '../FieldDescription.vue?meta';
  import FieldLabelMeta from '../FieldDescription.vue?meta';

  import illustration from './images/field-anatomy.png';

  const anatomy = `
    <template>
      <*Field>
        <PeachyFieldLabel />
        <PeachyFieldDescription />

        <!-- *Field sub-components -->

        <PeachyFieldError v-if="error" />
      </*Field>
    </template>

    <script lang="ts" setup>
      import {
         PeachyFieldLabel,
         PeachyFieldDescription,
         PeachyFieldError
      } from "@typeach/core";
    <\/script>
  `;

  const route = useRoute();

  const fieldRoutes = computed(() => {
    return routes
        .filter((r) => r.path.startsWith("/f") && r.meta.title !== 'Field')
        .map(r => r.meta.title);
  });
</script>

# {{ route?.meta.title }}

<div class="description">
  {{ route?.meta.description }}
</div>

<FieldSandbox title="Field" block-size="24rem" />

<Do11yAnatomy :code="anatomy" :illustration="illustration">

1. Label
2. Description
3. *Field sub-components - see the full anatomy on the field's page
4. Error - only render when there is an _actual_ error, rendering it will mark the field as invalid

</Do11yAnatomy>

## The {{ fieldRoutes.length }} fields

<Do11yComponentGrid :components="fieldRoutes" />
