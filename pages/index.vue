<template>
<div id="home">
  <div id="hero" class="container">
    <div class="sender">
      
      <p><a href="https://instagram.com/powertothepost">instagram</a></p>
      <p><nuxt-link to="/resources">resources</nuxt-link></p>
      <p><a href="https://powertothepost.myshopify.com">shop</a></p>
    </div>
    <img class="flag-stamp" src="@/assets/images/flag_stamp.png" alt="Flag Stamp">
    <h1 class="title" v-html="page.title "></h1>
    <p class="subtitle" v-html="page.subtitle"></p>
    <!-- <button>I want to help!</button> -->

    <div class="pattern"></div>
  </div>


  <div class="full-col" id="shop">
    <h2>Shop the merch.</h2>
    <p>All the profits from our store will be donated to support organizations fighting voter suppresion.</p>
  </div>

  <div class="flex-container">
    <div class="half-col">
      <p>In collaboration with MeTime.fm</p>
      <h3>VoiceMail.love</h3>
    </div>
    <div class="half-col">
      <h3>Join our livestream</h3>
    </div>
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

  background-color: #FAFAFA;
  background-image: url('http://api.thumbr.it/whitenoise-400x400.png?background=00000000&noise=CCCCCC&density=25&opacity=30');
  background-repeat: repeat;
  background-size: 600px 600px;

  color: #333333;
}


#hero {
  height: 100%;
  min-height: 90vh;

  padding: 0 0.5rem;

  display: grid;

  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 2rem auto 6rem 1fr auto auto 1fr;

}

#hero .title {
  grid-column: 1 / span 11;
  grid-row: 4 / span 1;
}


#hero .subtitle {
  grid-column: 1 / span 11;
  grid-row: 5 / span 1;
}


#hero .flag-stamp {
  display: block;
  justify-self: end;

  width: 100%;
  max-width: 8rem;

  height: auto;
  grid-column: 11 / span 2;
  grid-row: 2 / span 1;
}

#hero .sender {
  grid-column: 1 / span 6;
  grid-row: 2 / span 1;

  margin-top: 0.5rem;
  line-height: 1.25;
}

#hero .pattern {
  display: block;
  height: 1rem;

  grid-column: 1 / span 8;
  grid-row: 6 / span 1;

  margin-top: 4rem;
  margin-bottom: -4rem;

  background-image: url('~assets/images/pattern.svg');
  background-repeat: round;
  background-size: auto 100%;

  align-self: end;
}

.flex-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-auto-rows: auto;
  grid-gap: 0.75rem;
  padding: 0.75rem;
}

.half-col {
  padding: 1rem;
  min-height: 50vh;
  display: grid;
  place-items: center;
  align-content: center;
  
  background: white;
  
}

#shop {
  background: var(--accent);
  color: white;
  
  display: grid;
  place-items: center;
  align-content: center;
  min-height: 66.6667vh;
  padding: 2rem 0;

  text-align: center;
}

#shop p {
  max-width: 40rem;
  
}

@media screen and (min-width: 768px) {
  #hero {
    padding: 0 1rem;
  }

  #hero .title {
    grid-column: 1 / span 8;
    grid-row: 4 / span 1;
  }

#hero .subtitle {
    grid-column: 1 / span 8;
    grid-row: 5 / span 1;
  }

  #hero .pattern {
      grid-column: 1 / span 4;
  grid-row: 6 / span 1;
  }
}

</style>
