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
  /**
   * If the disclosure should be disabled.
   */
  disabled?: boolean;

  /**
   * If the panel should act as a popover.
   */
  popover?: boolean;
}

defineProps<DisclosureTestProps>();
</script>
