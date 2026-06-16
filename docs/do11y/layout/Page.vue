<template>
  <header>
    <RouterLink to="/">
      <img class="logo" alt="Squirrel mascot" src="/logo.webp" />

      <span>Typeach </span>
    </RouterLink>

    <nav>
      <RouterLink to="/p/components">Components</RouterLink>
    </nav>
  </header>

  <main>
    <article>
      <RouterView />
    </article>
  </main>

  <!-- prettier-ignore -->
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
    <a class="heading-font" href="https://fonts.bunny.net/family/signika">Signika </a> by Anna Giedryś for headings,
    <a href="https://fonts.bunny.net/family/atkinson-hyperlegible-next">Atkinson Hyperlegible Next </a> by The Braille Institute for body text
    and <a class="mono-font" href="https://fonts.bunny.net/family/jetbrains-mono">JetBrains Mono </a> by JetBrains for code snippets.
  </footer>
</template>

<script lang="ts" setup>
import GithubIcon from "../icons/github.svg?component";

import "../style/index.scss";
</script>
