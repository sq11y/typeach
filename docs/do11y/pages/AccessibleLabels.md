# Accessible labels

<div class="description">
  Best practises.
</div>

You should avoid _only_ using icons when possible; even if people understand the meaning of the icon, hiding the label creates an extra step for people using voice control (unless they of course correctly _guess_ the hidden label).

Anyways, whether the label is visible, or not, you will need to provide an _accessible_ label.

See, the label might make little to no sense if you can't see the full picture. You're in a cooking app with a button labelled "Bake" - is that enough information for you? What are you baking? What if it there were 10 buttons labelled "Bake"?

<Do11yDoDont>

<template v-slot:do>

<!-- prettier-ignore -->
```vue
<template>
  <PeachyButton aria-label="Bake 'Carrot cake'">
    Bake 
  </PeachyButton>
</template>
```

Provide context for those who might not see the button in it's full context.

</template>

<template v-slot:dont>

<!-- prettier-ignore -->
```vue
<template>
  <PeachyButton>
    Bake
  </PeachyButton>
</template>
```

Use vague labels.

</template>

</Do11yDoDont>

<div>

Another thing to keep in mind is that some people use different types of voice control to interact with their computers. "Siri, bake!". Oh, nothing happened? Hmm..

</div>

<Do11yDoDont>

<template v-slot:do>

<!-- prettier-ignore -->
```vue
<template>
  <PeachyButton aria-label="Bake 'Carrot Cake'">
    Bake
  </PeachyButton>
</template>
```

Put the visible text _first_ to make it easier for people using voice control.

</template>

<template v-slot:dont>

<!-- prettier-ignore -->
```vue
<template>
  <PeachyButton aria-label="Set 'Carrot Cake' to bake">
    Bake
  </PeachyButton>
</template>
```

Use different keywords in the accessible label and jumble up the order.

</template>

</Do11yDoDont>
