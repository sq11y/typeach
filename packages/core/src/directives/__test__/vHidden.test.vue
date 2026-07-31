<template>
  <Transition>
    <div v-hidden="hide" data-testid="target-element">Hidden element</div>
  </Transition>

  <button type="button" @click="hide = false">Reveal element</button>
  <button type="button" @click="hide = 'until-found'">Set 'until-found'</button>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import { vHidden } from "@typeach/core";

const hide = ref<boolean | "until-found">(true);
</script>
