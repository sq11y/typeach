---
title: "Tabs"
slug: "/c/tabs"
description: "Switch between content."
---

<script setup>
  import { useRoute } from 'vue-router';

  import TabsSandbox from './Tabs.sandbox.vue';

  import TabsMeta from '../Tabs.vue?meta';
  import TabsListMeta from '../TabsList.vue?meta';
  import TabsButtonMeta from '../TabsButton.vue?meta';
  import TabsActionButtonMeta from '../TabsActionButton.vue?meta';
  import TabsPanelMeta from '../TabsPanel.vue?meta';

  const route = useRoute();
</script>

# {{ route?.meta.title }}

<div class="description">
  {{ route?.meta.description }}
</div>

<TabsSandbox title="Tabs" />

## API

### Tabs

<Do11yMeta :meta="TabsMeta" />

### List

<Do11yMeta :meta="TabsListMeta" />

### Button

<Do11yMeta :meta="TabsButtonMeta" />

### Action button

<Do11yMeta :meta="TabsActionButtonMeta" />

### Panel

<Do11yMeta :meta="TabsPanelMeta" />
