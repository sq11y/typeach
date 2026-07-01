<template>
  <table style="margin-block-start: 0">
    <thead>
      <tr>
        <th>{{ relative ? "Relative step" : "Step" }}</th>
        <th>Preview</th>
        <th>Value</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="space of spaces" :key="space">
        <td>{{ space }}</td>

        <td>
          <div
            class="spacing"
            :style="`width: ${relative ? `var(--relative-spacing-${space})` : `var(--spacing-${space})`}`"
          />
        </td>
        <td>{{ getValue(space) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
export interface SpacingProps {
  /**
   * If the overview is for the relative scale.
   */
  relative?: boolean;
}

const props = defineProps<SpacingProps>();

const spaces = ["xxs", "xs", "s", "m", "l", "xl", "xxl", "xxxl", "xxxxl", "xxxxxl"];

const getMultiplier = (space: string) => {
  const style = getComputedStyle(document.documentElement);

  const regex = /([0-9]*)\)$/;

  const value = props.relative
    ? style.getPropertyValue(`--relative-spacing-${space}`)
    : style.getPropertyValue(`--spacing-${space}`);

  return parseFloat(value.match(regex)?.[1] ?? "0");
};

const getValue = (space: string) => {
  const multiplier = getMultiplier(space);

  const style = getComputedStyle(document.documentElement);

  const value = props.relative
    ? style.getPropertyValue(`--relative-spacing-unit`)
    : style.getPropertyValue(`--spacing-unit`);

  return `${multiplier * parseFloat(value)}${props.relative ? "em" : "rem"}`;
};
</script>

<style lang="scss">
.spacing {
  block-size: 1em;
  background-color: var(--grey-70);
  border-radius: calc(var(--border-radius) / 2);
}
</style>
