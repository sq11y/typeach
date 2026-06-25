<script setup>
  import { ref } from 'vue';

  import Spacing from '../spacing/Spacing.vue';
  import SpacingGraphic from '../spacing/SpacingGraphic.vue';

  const apca = ref(false)
</script>

# Spacing

<div class="description">
  A simple spacing system.
</div>

<SpacingGraphic />

## Values

<div class="two-columns">

<Spacing />

<Spacing relative />

</div>

### Variables

Every spacing step has an accompanying CSS variable. For example `--spacing-xs`, `--relative-spacing-m` or `--spacing-xxl`.

```scss
@use "@typeach/theme";

main {
  margin-block-start: var(--spacing-xxxxl);
}

button {
  padding-block: var(--relative-spacing-xs);
  padding-inline: var(--relative-spacing-l);
}
```

### Options

The CSS variables `--spacing-unit` and `--relative-spacing-unit` are available to modify the scales. The former defaults to `0.25rem`, while the latter defaults to `0.125em`.
