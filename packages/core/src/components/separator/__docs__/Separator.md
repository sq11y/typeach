---
title: "Separator"
slug: "/c/separator"
description: "A line to separate content."
illustration: "separator.png"
---

<script setup>
  import { useRoute } from 'vue-router';

  import SeparatorSandbox from './Separator.sandbox.vue';
  import SeparatorMeta from '../Separator.vue?meta';

  const route = useRoute();
</script>

# {{ route?.meta.title }}

<div class="description">
  {{ route?.meta.description }}
</div>

<SeparatorSandbox title="Separator" />

## API

### Separator

<Do11yMeta :meta="SeparatorMeta" />
