<template>
  <main>
    <slot />
  </main>
</template>

<style lang="scss">
@use "@typeach/theme";
@use "@typeach/theme/reset";

@import "https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap";

html {
  block-size: 100%;
  scrollbar-gutter: stable;
}

body {
  margin: 0;
  block-size: 100svh;

  display: grid;
  place-content: center;
  font-family: "Source Sans 3", sans-serif;

  padding-inline: var(--spacing-m);
}
</style>
