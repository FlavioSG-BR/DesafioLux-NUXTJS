<template>
  <form class="searchbar" @submit.prevent="submit">
    <input
      v-model="search"
      class="searchline"
      placeholder="Enter User Name"
      autofocus
    />
    <button class="button" type="submit">
      <img class="icon" src="~assets/imagens/Search.png" />
    </button>
  </form>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      search: '',
    }
  },
  middleware: 'search',
  methods: {
    submit(event) {
      this.$router.push(`results/${this.search}`)
    },
  },
}
</script>
<style scoped>
.searchline {
  width: 700px;
  height: 50px;
  font-size: 45px;
  font-family: 'Courier New', Courier, monospace;
}
.button {
  width: 130px;
  height: 50px;
  font-size: 30px;
  color: white;
  background: black;
  border-bottom: whitesmoke 5px;
  font-family: 'Courier New', Courier, monospace;
}
.searchbar {
  align-self: center;
  text-align: center;
  margin: 0 auto;
}
.icon {
  width: 25px;
  height: 25px;
  background-color: black;
}
</style>
