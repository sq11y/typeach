<script setup>
  import { ref } from 'vue';

  import Colors from '../colors/Colors.vue';
  import ColorRules from '../colors/ColorRules.vue';
  import Do11ySwitch from '../components/Do11ySwitch.vue';

  import ApcaIcon from '../icons/apca.svg?component';
  
  const apca = ref(false)
</script>

# Colors

<div class="description">
  A simple color palette.
</div>

<Colors :apca="apca" />

## Values

All colors come with 11 values. The brightest value is `bg`, the darkest value is `fg` - and the values between them are numbers where the lower the value, the brighter the color.

### Variables

Every color value has an accompanying CSS variable. For example `--grey-bg`, `--pink-30` or `--brown-fg`.

```scss
@use "@typeach/theme";

button {
  border: var(--grey-30);
  background: var(--grey-bg);
  color: var(--grey-fg);
}
```

### Options

The CSS variable `--saturation` is available to modify the saturation of the colors, which defaults to `1`.

You can pretty safely desaturate the colors, but if you are to increase the saturation - you have to manually check which combinations still have sufficient contrast.

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

## Resources

- [Perceptual Palettes](https://perceptualpalettes.alexdunn.au/) - “generate palettes with consistent luminance”.
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) - check the contrast for normal text, large text (`18.66px+`) and graphical elements.
