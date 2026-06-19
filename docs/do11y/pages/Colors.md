<script setup>
  import { ref } from 'vue';

  import Colors from '../colors/Colors.vue';
  import ColorRules from '../colors/ColorRules.vue';
  import Do11ySwitch from '../components/Do11ySwitch.vue';

  import ApcaIcon from '../icons/apca.svg?component';
  
  const apca = ref(true)
</script>

# Colors

<div class="description">
  A simple color palette.
</div>

<Colors :apca="apca" />

## Variables

Every color comes with variables formatted as `--<color>-<value>`.

```scss
@use "@typeach/theme";

button {
  border: var(--grey-30);
  background: var(--grey-bg);
  color: var(--grey-fg);
}
```

The brightest value is `bg` and the darkest value is `fg` - the values between them are numbers where the lower the value, the brighter the color.

## Accessibility

<figure class="two-columns">

<ColorRules :apca="apca" />

<figcaption>

<Do11ySwitch v-model="apca" :icon="ApcaIcon">
APCA
</Do11ySwitch>

<br />

The table showcases the values you can combine to pass {{ apca ? 'APCA' : 'WCAG AA' }}.

These rules work for each color - but if you need to combine colors (e.g. blue and orange), you have to [manually check the contrast](https://webaim.org/resources/contrastchecker/).

If the value for "Text" is labelled as "ui" it means the color should _only_ be used for graphical elements, not for text.

</figcaption>

</figure>
