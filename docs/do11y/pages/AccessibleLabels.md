# Accessible labels

<div class="description">
  A quick summary and best practises.
</div>

If you override the accessible label for a control, you should put the visible text _first_. This makes it easier for people using voice control to activate it.

<!-- prettier-ignore -->
```vue
<template>
  <PeachyButton aria-label="Bake 'Carrot Cake'">
    Bake
  </PeachyButton>
</template>
```

If there is no visible text, make sure to still provide an accessible label. You should avoid only using icons when possible; even if people understand the _meaning_ of the icon used, hiding the label creates an extra step for people using voice control (unless they of course correctly guess the hidden label).

<!-- prettier-ignore -->
```vue
<template>
  <PeachyButton>
    <svg aria-hidden="true" />

    <PeachyVisuallyHiddenText>
      Bake 'Carrot Cake'
    </PeachyVisuallyHiddenText>
  </PeachyButton>
</template>
```
