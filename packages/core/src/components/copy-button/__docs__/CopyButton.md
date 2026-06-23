---
title: "Copy button"
slug: "/c/copy-button"
description: "Copy content to clipboard."
---

<script setup>
  import { useRoute } from 'vue-router';

  import CopyButtonSandbox from './CopyButton.sandbox.vue';
  import CopyButtonMeta from '../CopyButton.vue?meta';

  const route = useRoute();
</script>

# {{ route?.meta.title }}

<div class="description">
  {{ route?.meta.description }}
</div>

<CopyButtonSandbox title="Copy button" />

## API

### Copy button

<Do11yMeta :meta="CopyButtonMeta" />

## Accessibility

The copy button extends the <RouterLink to="/c/button">button component</RouterLink>, please refer to it's accessibility notes as they are still relevant here.

Make sure to update the label when `isCopying` is `true`. The component creates a ["polite" live region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions) which will announce the temporary label to assistive technologies even if the button isn't currently focused. If you already have accessible feedback for the button, you should disable the live region with `preventAnnouncement`.
