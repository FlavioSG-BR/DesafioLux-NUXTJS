<template>
  <header class="header">
    <ul class="nav-items">
      <li class="title"><b>GitHub</b><i>Search</i></li>
      <li class="redirect">
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
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
      </li>
    </ul>
  </header>
</template>
<script>
export default {
  data() {
    return {
      search: '',
    }
  },
  middleware: 'search',
  methods: {
    submit(event) {
      this.$router.push(`${this.search}`)
    },
  },
}
</script>
<style scoped>
.header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: top;
  background-color: silver;
}

.nav-items {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
}

.nav-items a {
  text-decoration: none;
  color: black;
}

.nav-items a:hover,
.nav-items a:active {
  color: white;
}
.title {
  font-size: 30px;
}
.redirect {
  font-size: 30px;
}
.searchline {
  width: 260px;
  height: 40px;
  font-size: 28px;
  font-family: 'Courier New', Courier, monospace;
}
.button {
  width: 120px;
  height: 40px;
  font-size: 26px;
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
