<template>
<div id="home">
  <div class="container">
    <div class="sender">
      <p>@powertothepost</p>
      <p><a href="https://instagram.com/powertothepost">instagram</a></p>
    </div>
    <img class="flag-stamp" src="@/assets/images/flag_stamp.png" alt="Flag Stamp">
    <h1 class="title" v-html="page.title "></h1>
    <p class="subtitle" v-html="page.subtitle"></p>
  </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const page = await $content('home').fetch()

    return {
      page
    }
  }
}
</script>

<style>
#home {
  min-height: 100vh;
  padding: 0 0.5rem;

  background-image: url('http://api.thumbr.it/whitenoise-400x400.png?background=00000000&noise=CCCCCC&density=25&opacity=30');
  background-repeat: repeat;
  background-size: 600px 600px;

  color: #333333;
}

.container {
  margin: 0 auto;
  max-width: 58rem;
  height: 100%;
  

  display: grid;

  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 2rem auto 6rem 1fr auto auto 1fr;

}

#home .title {
  grid-column: 1 / span 11;
  grid-row: 4 / span 1;
}


#home .subtitle {
  grid-column: 1 / span 11;
  grid-row: 5 / span 1;
}


#home .flag-stamp {
  display: block;
  justify-self: end;

  width: 100%;
  max-width: 8rem;

  height: auto;
  grid-column: 11 / span 2;
  grid-row: 2 / span 1;
}

#home .sender {
  grid-column: 1 / span 6;
  grid-row: 2 / span 1;

  margin-top: 0.5rem;
  line-height: 1.25;
}

@media screen and (min-width: 768px) {
  #home {
    padding: 0 1rem;
  }

  #home .title {
    grid-column: 1 / span 8;
    grid-row: 4 / span 1;
  }

#home .subtitle {
    grid-column: 1 / span 8;
    grid-row: 5 / span 1;
  }
}
</style>
