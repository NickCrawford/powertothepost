<template>
  <div id="message">
    <h1 class="heading">You have a new message!</h1>
    <div class="letter">
      <header class="header">
        <nuxt-link to="/">powertothepost.com →</nuxt-link>
      </header>
      <img
        class="flag-stamp"
        src="@/assets/images/flag_stamp.png"
        alt="Flag Stamp"
      />

      <p>
        <strong>
          {{ message }}
        </strong>
      </p>
      <br />
      <p>- {{ name }}</p>
    </div>

    <div style="text-align: center;">
      <p>The USPS is in danger! Join in the effort to save our public good.</p>
      <br />
      <nuxt-link tag="button" to="/" class="button primary"
        >I want to help! →</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.name + ' wrote you a message on Power To The Post',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content:
            'Visit Power To The Post to open your message and help save the USPS.',
        },
      ],
    }
  },

  async asyncData({ redirect, route, app }) {
    let messageId = route.params.id

    let doc = await app.$fireStore.collection('messages').doc(messageId).get()

    if (!doc.exists) {
      redirect('/')
    }

    let data = doc.data()

    return {
      message: data.message,
      name: data.name,
    }
  },
}
</script>

<style scoped>
#message {
  height: 100%;
  min-height: 100vh;
  background: #fafafa;

  display: grid;
  place-items: center;
}

.letter {
  position: relative;
  width: calc(100% - 1.5rem);

  max-width: 40rem;
  padding: 6rem 3rem 2rem;
  background: white;

  box-shadow: 0px 2px 16px 4px rgba(0, 0, 0, 0.15);

  /* text-align: */
}

.flag-stamp {
  position: absolute;
  top: 1rem;
  right: 1rem;

  height: 4rem;
  width: auto;
}

header.header {
  position: absolute;
  top: 1.5rem;
  left: 1rem;

  height: 4rem;
  width: auto;
}

#message .heading {
  text-align: center;
  padding: 1rem;
  margin: 0;
  /* position: absolute;
  top: 2rem;
  left: 1rem;
  right: 1rem; */
  opacity: 0.2;
}

#message .button {
  margin: 0 auto;
}
</style>
