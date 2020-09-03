<template>
  <div>
    <Nuxt />

    <Mailbox />
  </div>
</template>

<style>
:root {
  --primary: #c83b2b;
  --accent: #382bde;
}

html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
    monospace;

  line-height: 1.25;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: tenon, sans-serif;
  font-weight: 700;
  font-style: normal;
  margin: 2.75rem 0 1.05rem;
  line-height: 1.15;
}

h1 {
  margin-top: 0;
  font-size: 4.209em;
}

h2 {
  font-size: 3.157em;
}

h3 {
  font-size: 2.369em;
}

h4 {
  font-size: 1.777em;
}

h5 {
  font-size: 1.333em;
}

small,
.text_small {
  font-size: 0.75em;
}

/* Fluid Typescale */
html {
  font-size: 16px;
}
@media screen and (min-width: 320px) {
  html {
    font-size: calc(16px + 6 * ((100vw - 320px) / 680));
  }
}
@media screen and (min-width: 1000px) {
  html {
    font-size: 22px;
  }
}

/* Highlights */
*::selection {
  background: var(--accent);
  color: white;
  /* WebKit/Blink Browsers */
}

mark {
  background: var(--primary);
  color: white;
}

.container {
  margin: 0 auto;
  max-width: 58rem;
}

.button {
  padding: 0.75em 1.25em;
  background: white;
  color: black;
  font-size: 1rem;
  border: none;
  border-radius: 2px;
  font-family: inherit;

  box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.16);

  cursor: pointer;
}

.button.primary {
  background: var(--accent);
  color: white;
}
</style>
