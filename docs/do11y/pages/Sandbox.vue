<template>
  <main>
    <slot />
  </main>
</template>

<style lang="scss">
@use "@typeach/theme";
@use "@typeach/theme/reset";

@import url("https://fonts.bunny.net/css2?family=Atkinson+Hyperlegible+Next:ital,wght@0,200..800;1,200..800&display=swap");

html {
  height: 100%;
  scrollbar-gutter: stable;
}

body {
  margin: 0;
  height: 100svh;

  display: grid;
  place-content: center;
  font-family: "Atkinson Hyperlegible Next", sans-serif;

  padding-inline: var(--spacing-m);
}
</style>
