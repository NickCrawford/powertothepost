<template>
  <div>
    <header class="container">
    <nuxt-link to="/">⇠ powertothepost.com </nuxt-link>
    </header>
    <article class="container">
      <nuxt-content :document="page" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('resources').fetch()

    return {
      page,
    }
  },
}
</script>

<style scoped>
article {
  margin-top: 2rem;
}

header {
  padding: 2rem 0 ;
}
</style>
