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

## The {{ fieldRoutes.length }} fields

A field component requires a label, use `PeachyFieldLabel` as a child of the `*Field` component to provide it, unless the field specifies otherwise.

Then optionally, there is `PeachyFieldDescription` and `PeachyFieldError`. You should only render the error sub-component when there is an actual error, as it will mark the field invalid (e.g. use `v-if` instead of `v-show`).

The related control will get the correct ARIA attributes depending on which of the sub-components are rendered. How you piece together the control itself differs a lot, so please read each page as needed.

<Do11yComponentGrid :components="fieldRoutes" />
