---
title: "Calendar"
alternativeTitles: ["Date picker"]
slug: "/c/calendar"
description: "Displays a month."
illustration: "calendar.png"
color: "green"
---

<script setup>
  import { useRoute } from 'vue-router';

  import CalendarSandbox from './Calendar.sandbox.vue';

  import Guidelines from './Calendar.guidelines.md';
  import API from './Calendar.api.md';
  import Accessibility from './Calendar.accessibility.md';

  const route = useRoute();

  const tabs = {
    Guidelines,
    API,
    Accessibility
  }
</script>

# {{ route?.meta.title }}

<div class="description">
  {{ route?.meta.description }}
</div>

<CalendarSandbox title="Calendar" block-size="35rem" />

<Do11yTabs :tabs="tabs" />
