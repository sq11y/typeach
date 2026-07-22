<!-- prettier-ignore -->
<template>
  <footer>
    <a href="https://github.com/sq11y/typeach">Contribute on Github <GithubIcon /></a>
    <br />
    <br />

    Designed, written and coded with <strong>love</strong> by <em>people</em>.
    <br />

    Documented with <a href="https://github.com/sq11y/do11y">Do11y <GithubIcon /></a>
    <br />
    <br />

    The mascot is drawn by the wonderful <a href="https://bsky.app/profile/imoogin.bsky.social">Imoogi</a>.
    <br />

    Icons are from <a href="https://phosphoricons.com/">Phosphor</a>.
    <br />
    <br />

    Fonts used:
    <a class="heading-font" href="https://fonts.bunny.net/family/signika">Signika</a> by Anna Giedryś for headings,
    <a href="https://fonts.bunny.net/family/atkinson-hyperlegible-next">Atkinson Hyperlegible Next</a> by The Braille Institute for body text
    and <a class="mono-font" href="https://fonts.bunny.net/family/jetbrains-mono">JetBrains Mono</a> by JetBrains for code snippets.
  </footer>
</template>

<script lang="ts" setup>
import GithubIcon from "../icons/github.svg?component";
</script>

<style lang="scss" scoped>
@use "@typeach/theme/utils";

footer {
  padding-inline: var(--inline-margin);
  padding-block: var(--spacing-xxxl);

  background-color: var(--pink-20);
  color: var(--pink-80);

  border-block-start: var(--invisible-border);

  @media (width <= 55rem) {
    padding-block: var(--spacing-xl);
  }
}

a {
  color: inherit;

  @include utils.transition("background-color");

  &:hover {
    background-color: var(--pink-30);
  }
}

a[href^="https://github.com"] {
  @include utils.center-flex(var(--spacing-xs));
  display: inline-flex;
}
</style>
