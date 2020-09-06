<template>
  <div id="home">
    <div id="hero" class="container">
      <div class="sender">
        <p><a href="https://instagram.com/powertothepost">instagram</a></p>

        <p><a href="https://powertothepost.com/shop">shop</a></p>

        <p><nuxt-link to="/about">about</nuxt-link></p>
      </div>
      <img
        class="flag-stamp"
        src="@/assets/images/flag_stamp.png"
        alt="Flag Stamp"
      />
      <h1 class="title" v-html="page.title"></h1>
      <p class="subtitle" v-html="page.subtitle"></p>
      <!-- <button>I want to help!</button> -->

      <div class="pattern"></div>
    </div>

    <div class="full-col" id="shop">
      <!-- <img
        class="shop-bg-image img-1"
        src="@/assets/images/shop-bg.png"
      /> -->

      <h2>Shop the merch.</h2>
      <p>
        Created with ♥️ for the USPS. All profits from our store will be donated
        to support the American Postal Workers Union and ACLU.
      </p>
      <br />
      <nuxt-link tag="a" to="/shop">Shop now →</nuxt-link>
    </div>

    <div class="flex-container">
      <div class="half-col" id="voicemail">
        <p class="text_small">
          In collaboration with
          <a href="https://metime.fm" target="_blank">MeTime.fm</a>
        </p>
        <img
          width="75%"
          height="auto"
          style="margin: -1.5rem auto;"
          src="https://voicemail.love/voicemail-love.svg"
          alt="Voicemail.love"
        />
        <h4>Mail an audio message to a loved&nbsp;one</h4>

        <a href="https://voicemail.love">💌 Record your message →</a>
      </div>
      <div id="twitch" class="half-col">
        <img
          width="150px"
          height="auto"
          src="https://brand.twitch.tv/assets/logos/svg/wordmark-extruded/purple.svg"
          alt="Twitch Logo"
        />
        <h4>Watch our charity livestream</h4>
        <p> <s> Sunday, September 6th, 6pm - midnight EDT </s>  Cancelled</p>
        <br />
       

        <!-- <Countdown /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('home').fetch()

    return {
      page,
    }
  },
}
</script>

<style>
#home {
  min-height: 100vh;

  background-color: #fafafa;
  background-image: url('~assets/images/whitenoise.png');
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
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  grid-auto-rows: auto;
  grid-gap: 0.75rem;
  box-sizing: border-box;
  padding: 0.75rem;
  width: 100%;

  overflow-x: hidden;
}

.half-col {
  padding: 1rem;
  min-height: 66.667vh;
  display: grid;
  place-items: center;
  align-content: center;
  text-align: center;

  background: white;
}

#shop {
  position: relative;
  background: white;
  /* color: white; */

  display: grid;
  place-items: center;
  align-content: center;
  min-height: 80vh;
  padding: 2rem 0;

  text-align: center;
  overflow: hidden;

  background-image: url('~assets/images/shop-bg.jpg');
  background-size: cover;
  background-repeat: none;
  background-position: center center;
}

@media screen and (max-width: 750px) {
  #shop {
    background-image: url('~assets/images/shop-bg-portrait.jpg');
    background-size: cover;
    background-repeat: none;
    background-position: center center;
  }
}

#shop h2 {
  position: relative;
  margin-top: 0;
  z-index: 1;
  transform: translate(0, 0);
  background: white;
}

#shop a {
  position: relative;

  z-index: 1;
  transform: translate(0, 0);
}

#shop p {
  position: relative;
  max-width: 40rem;
  z-index: 1;
  transform: translate(0, 0);

  background: white;
}

#shop .shop-bg-image {
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  width: 15%;
  min-width: 7rem;

  transform: rotate(10deg);

  pointer-events: none;

  z-index: 0;
}

#voicemail {
  position: relative;
  color: white;
  background: linear-gradient(to top, #5bc7db, #ea3df1);
}

#voicemail::after {
  content: '';
  background: url('https://voicemail.love/_nuxt/img/gif1.b8e4ca9.svg');
  opacity: 0.2;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  overflow: hidden;

  background-size: 33%;
  pointer-events: none;
  background-attachment: fixed;
}

#voicemail a {
  color: yellow;
  text-decoration: none;
}
#voicemail a:hover {
  text-decoration: underline;
}

#twitch {
  background: #18181b;
  color: white;

  background-image: url('https://brand.twitch.tv/assets/images/bg-dot-o.svg');
  background-size: 60px;
  background-position: -30px -30px;
  background-attachment: fixed;
}

#twitch a {
  color: #772ce8;
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
