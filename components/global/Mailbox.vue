<template>
  <div id="mailbox" :class="{ active: isActive }">
    <div id="close-cover" @click="makeActive"></div>

    <span id="message-container">
      <div class="close-button" @click="makeActive">X</div>

      <h5 style="margin-top: 0; margin-right: 24px;">
        Leave a message for a friend.
      </h5>
      <small>Write a secret message and share this link with a friend.</small>

      <br />

      <div v-if="secretLink">
        <br />

        <p>
          <strong>
            {{ message }}
          </strong>
        </p>
        <br />

        <p>- {{ name }}</p>

        <br />
        <br />

        <input type="text" readonly v-model="secretLink" id="secret-link" />
      </div>
      <div v-else>
        <form @submit.prevent="getShareLink()">
          <label for="message">Your message:</label>
          <textarea
            name="message"
            id="secret-message"
            rows="4"
            v-model="message"
            placeholder='We put the "us" in USPS ❤️'
            :disabled="isLoading"
          ></textarea>
          <br />

          <label for="name">Your name:</label>
          <input
            type="text"
            placeholder="Benjamin Franklin"
            autocomplete="name"
            v-model="name"
            :disabled="isLoading"
          />
          <br />
          <br />

          <button
            class="button primary"
            type="submit"
            :disabled="isLoading || message.trim().length <= 1"
          >
            Copy my share link
          </button>
        </form>
      </div>
    </span>
    <span id="mailbox-icon" @click="makeActive">
      <template v-if="!secretLink">
        💌
      </template>

      <template v-else-if="message">📬</template>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      isLoading: false,
      secretLink: null, //https://powertothepost.com/message/1234
      message: '',
      name: 'Nick', //optional
      placeholders: [
        `Hey, you're cute. Save the USPS with me?`,
        `Saving the USPS is important to me and I hope you can help out.`,
        ``,
      ],
    }
  },

  methods: {
    makeActive() {
      this.isActive = !this.isActive
    },

    getShareLink() {
      if (this.isLoading) return

      this.isLoading = true

      setTimeout(() => {
        this.secretLink = 'https://powertothepost.com/message/1234'
      }, 300)
    },
  },
}
</script>

<style scoped>
#mailbox {
  position: fixed;

  /* background: white; */
  /* right: 24px;
  bottom: 20px; */
  right: 8px;
  bottom: 8px;

  width: 56px;
  height: 56px;

  background: white;
  border: 1px solid #ffffff;

  border-radius: 999px;

  z-index: 2147483646;
}
#mailbox.active {
  background: none;
  border: none;
}

#mailbox.active #close-cover {
  visibility: visible;

  opacity: 1;
}

#close-cover {
  background: radial-gradient(
    circle at bottom right,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0)
  );
  visibility: hidden;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 0;

  opacity: 0;

  transition: opacity 0.6s ease;
}

#mailbox-icon {
  position: absolute;

  bottom: 12px;
  right: 9px;

  width: 36px;
  height: 36px;

  font-size: 36px;

  display: block;
  opacity: 1;

  cursor: pointer;
}

#mailbox.active #mailbox-icon {
  transition: opacity 500ms ease;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

#mailbox.active {
  right: 0;
  bottom: 0;

  width: 100%;
  height: 100%;

  background: radial-gradient(
    from bottom right,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 1)
  );
}

#message-container {
  position: absolute;

  right: 0;
  bottom: 0;
  background-color: #fafafa;
  border: 1px solid white;

  max-width: 22rem;
  height: auto;
  max-height: 100vh;

  overflow-y: auto;

  margin: 0 auto;

  padding: 1rem;

  /* display: none; */
  opacity: 0;
  transform: scale(0);
  transform-origin: bottom right;

  transition: transform 0.3s ease-in-out;
}

#mailbox.active #message-container {
  /* display: block; */
  opacity: 1;

  transform: scale(1);

  transition: transform 0.1s ease-in-out;
}

#mailbox label {
  font-size: 0.5rem;
  display: block;
  margin: 0.5rem 0rem 0.25rem;
}

#mailbox textarea,
#mailbox input[type='text'] {
  width: 100%;

  padding: 0.75em 0.75em;
  background: white;
  color: black;
  font-size: 1rem;
  border: 1px solid #333;
  border-radius: 2px;
  font-family: inherit;

  max-width: 100%;
  max-height: 50vh;
  min-height: 3rem;
}

.close-button {
  position: absolute;
  top: 0;
  right: 0;

  padding: 16px;

  display: none;
  cursor: pointer;
}

#mailbox.active .close-button {
  display: block;
}

input#secret-link {
  padding: 0.5em 0.5em !important;
  font-size: 0.75rem !important;
}
</style>
