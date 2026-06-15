<template>
  <PeachyDisclosure :disabled="disabled" :popover="popover">
    <PeachyDisclosureButton> Disclosure </PeachyDisclosureButton>

    <Transition>
      <PeachyDisclosurePanel> Content </PeachyDisclosurePanel>
    </Transition>
  </PeachyDisclosure>
</template>

<script lang="ts" setup>
import { PeachyDisclosure, PeachyDisclosureButton, PeachyDisclosurePanel } from "@typeach/core";

interface DisclosureTestProps {
  disabled?: boolean;
  popover?: boolean;
}

defineProps<DisclosureTestProps>();
</script>
