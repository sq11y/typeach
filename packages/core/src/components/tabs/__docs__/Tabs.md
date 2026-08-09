---
title: "Tabs"
slug: "/c/tabs"
description: "Switches between content."
illustration: "tabs.png"
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

## Accessibility

The tabslist extends a generic element with an [ARIA tablist role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role), where every tab is a [HTML button element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) extended with the [ARIA tab role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role). Each panel is a generic element with the [ARIA tabpanel role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role).

### Keyboard navigation

Only one of the tabs remain in the tab order - starting with the first enabled tab and then it switches to the last tab the user navigated to. As for the action buttons, the ones associated with the currently active tab are kept in the tab order, unless explicitly disabled with `without-focus`, while the others are removed.

If the tabslist is horizontal <kbd>Arrow right</kbd> is replaced with <kbd>Arrow down</kbd>
and <kbd>Arrow left</kbd> with <kbd>Arrow up</kbd>.

<br />

| Key                    | Action                                                                        |
| ---------------------- | ----------------------------------------------------------------------------- |
| <kbd>Arrow left</kbd>  | Moves to the previous tab.                                                    |
| <kbd>Arrow right</kbd> | Moves to the next tab.                                                        |
| <kbd>PageUp</kbd>      | Moves to the 10th tab before. If there isn't one - it moves to the first tab. |
| <kbd>PageDown</kbd>    | Moves to the 10th tab after. If there isn't one - it moves to the last tab.   |
| <kbd>Home</kbd>        | Moves to the first tab.                                                       |
| <kbd>End</kbd>         | Moves to the last tab.                                                        |
