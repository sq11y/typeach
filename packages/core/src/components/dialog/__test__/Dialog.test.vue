<!-- prettier-ignore -->
<template>
  <PeachyDialog modal>
    <PeachyDialogButton>
      Dialog
    </PeachyDialogButton>

    <PeachyDialogPanel light-dismiss>
      <PeachyDialogHeading> 
        Heading
      </PeachyDialogHeading>

      <PeachyDialogDescription>
        Description
      </PeachyDialogDescription>

      <PeachyDialogCloseButton>
        Close
      </PeachyDialogCloseButton>
    </PeachyDialogPanel>
  </PeachyDialog>
</template>

<script lang="ts" setup>
import {
  PeachyDialog,
  PeachyDialogButton,
  PeachyDialogPanel,
  PeachyDialogHeading,
  PeachyDialogDescription,
  PeachyDialogCloseButton,
} from "@typeach/core";
</script>
