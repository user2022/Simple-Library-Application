<template>
    <main>
      <div class="error-box">
        <div class="top box">
          <h2>Error</h2>
        </div>
        <div class="content box">
          <p><strong>Message:</strong> An error has occurred whilst trying to do this request, please try again later</p>
        </div>
        <div class="bottom box">
          <button class="btn btn-primary" @click="closeError">Close</button>
        </div>
      </div>
    </main>
</template>

<script>
    export default {
      name: "error-display",
      methods: {
        closeError() {
          this.$store.dispatch('showErrorMsg', false);
        }
      }
    }
</script>

<style scoped>
  main {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.77);
    z-index: 999;
  }

  .error-box {
    position: absolute;
    width: 600px;
    height: auto;
    background-color: #ffffff;
    left: 0;
    right: 0;
    margin: 15% auto;
  }

  .box {
    padding: 6px 10px;
    border-top: 1px solid black;
  }

  .box:first-child {
    border-top: none;
  }
</style>
