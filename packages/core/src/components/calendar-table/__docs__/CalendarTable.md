---
title: "Calendar table"
alternativeTitles: ["Date picker"]
slug: "/c/calendar-table"
description: "Displays a month."
illustration: "calendar-table.png"
color: "green"
---

<script setup>
  import { useRoute } from 'vue-router';

  import CalendarTableSandbox from './CalendarTable.sandbox.vue';

  import Guidelines from './CalendarTable.guidelines.md';
  import API from './CalendarTable.api.md';
  import Accessibility from './CalendarTable.accessibility.md';

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

<CalendarTableSandbox title="Calendar table" block-size="35rem" />

<Do11yTabs :tabs="tabs" />
