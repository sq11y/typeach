---
title: "Button"
slug: "/c/button"
description: "Trigger an action."
---

<script setup>
  import { useRoute } from 'vue-router';

  import ButtonSandbox from './Button.sandbox.vue';
  import ButtonMeta from '../Button.vue?meta';

  const route = useRoute();
</script>

# {{ route?.meta.title }}

<div class="description">
  {{ route?.meta.description }}
</div>

<ButtonSandbox title="Button" />

## API reference

### Button

<Do11yMeta :meta="ButtonMeta" />
