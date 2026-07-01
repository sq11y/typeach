---
title: "Toolbar"
slug: "/c/toolbar"
description: "Group controls."
illustration: "toolbar.png"
---

<script setup>
  import { useRoute } from 'vue-router';

  import ToolbarSandbox from './Toolbar.sandbox.vue';
  import ToolbarMeta from '../Toolbar.vue?meta';

  const route = useRoute();
</script>

# {{ route?.meta.title }}

<div class="description">
  {{ route?.meta.description }} 
</div>

<ToolbarSandbox title="Toolbar" block-size="36rem" />

## API

<Do11yMeta :meta="ToolbarMeta" />
