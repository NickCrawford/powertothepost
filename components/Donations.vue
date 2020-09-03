<template>
  <div>
    <small>
      <strong>${{ raised }}</strong> / $1,000 raised towards our goal
    </small>
    <div class="progress-bar">
      <span
        class="progress"
        :style="{ width: `${(raised / 1000) * 100}%` }"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      raised: 22,
    }
  },
}
</script>

<style scoped>
.progress-bar {
  position: relative;
  width: 100%;

  border: 2px solid #333;

  max-width: 30rem;
  height: 1rem;

  transform: skew(-15deg);
}

.progress {
  position: absolute;
  top: 0;
  left: 0;

  min-width: 0.5rem;

  height: 100%;
  background: var(--primary);
}
</style>
