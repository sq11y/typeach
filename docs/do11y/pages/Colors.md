<script setup>
  import { ref } from 'vue';

  import ColorsGraphic from '../colors/ColorsGraphic.vue';
  import Colors from '../colors/Colors.vue';
  import ColorRules from '../colors/ColorRules.vue';
  import Do11ySwitch from '../components/Do11ySwitch.vue';

  import ColorSelect from '../colors/ColorSelect.vue';
</script>

# Colors

<div class="description">
  An accessible color palette.
</div>

<ColorsGraphic />

## Contrast

Each color comes with 11 values. The brightest value is `bg`, the darkest value is `fg` - and the values between them are numbers where the lower the value, the brighter the color.

<figure class="two-columns">

<ColorRules />

<figcaption>

The table showcases the values you can always combine _within_ a color to pass the different WCAG criteria.

WCAG AA requires a minimum contrast ratio of `4.5:1` for text and `3:1` for large text, meaningful graphics and interactive elements, while for AAA it's `7:1` and `4.5:1`.

- Large text means above `18.66px` _and_ bold, or above `24px`.
- Meaningful graphics refers to anything that communicates information.
- An interactive element would, for example, be the border of an input.

</figcaption>

</figure>

## Colors

<Colors />

## Options

The CSS variable `--saturation` is available to modify the saturation of the colors, which defaults to `1`. You can pretty safely desaturate the colors, but if you are to increase the saturation - you should manually check which combinations still have sufficient contrast.

## Further reading

- [Perceptual Palettes](https://perceptualpalettes.alexdunn.au/) - “generate palettes with consistent luminance”.
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) - check the contrast for body text, large text, meaningful graphics and interactive elements.
