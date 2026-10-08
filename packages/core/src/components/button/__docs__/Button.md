<script setup>
  import { useRoute } from 'vue-router';

  import ButtonSandbox from './Button.sandbox.vue';

  import Guidelines from './Button.guidelines.md';
  import API from './Button.api.md';
  import Accessibility from './Button.accessibility.md';

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

<ButtonSandbox title="Button" />

<Do11yTabs :tabs="tabs" />
