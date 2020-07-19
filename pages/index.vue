<template>
  <div class="container">
    <section class="title">
      <b>GitHub </b><i>Search</i>
      <div>
        <Searchbar />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  middleware: 'search',
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 64px;
  color: black;
  letter-spacing: 1px;
}
</style>
