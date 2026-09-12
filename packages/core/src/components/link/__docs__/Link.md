---
title: "Link"
slug: "/c/link"
description: "Navigates the user."
illustration: "link.png"
color: "blue"
---

<script setup>
  import { useRoute } from 'vue-router';

  import LinkSandbox from './Link.sandbox.vue';
  import LinkMeta from '../Link.vue?meta';

  const route = useRoute();
</script>

# {{ route?.meta.title }}

<div class="description">
  {{ route?.meta.description }}
</div>

<LinkSandbox title="Link" />

## API

### Link

<Do11yMeta :meta="LinkMeta" />

## Accessibility

The link extends the [HTML a element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a), meaning it is part of the tab order depending on the user's device and browser settings and can be activated with <kbd>Enter</kbd>.
