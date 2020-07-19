<template>
  <section>
    <div>
      <Header />
      <blog-post>
        <div class="profile">
          <img
            src="https://avatars3.githubusercontent.com/u/63651210?v=4"
            width="300px"
            height="300px"
          />
          <h3>{{ $store.state.user.name }}</h3>
          <p>{{ $store.state.user.login }}</p>
          <p></p>
          <p>
            <img class="icon" src="~assets/imagens/Company.png" />
            {{ $store.state.user.company }}
          </p>
          <p>
            <img class="icon" src="~assets/imagens/Location.png" />
            {{ $store.state.user.location }}
          </p>
          <p>
            <img class="icon" src="~assets/imagens/Star.png" />
            {{ $store.state.user.public_gists }}
          </p>
          <p>
            <img class="icon" src="~assets/imagens/Repos.png" />
            {{ $store.state.user.public_repos }}
          </p>
          <p>
            <img class="icon" src="~assets/imagens/Followers.png" />
            {{ $store.state.user.followers }}
          </p>
        </div>
      </blog-post>
      <nuxt />
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import Header from '~/components/Header.vue'
export default {
  components: {
    Header,
  },
  middleware: 'search',
  props: {
    user: {
      type: Object,
      default: () => ({
        user: [],
      }),
    },
  },
  asyncData({ params }) {
    return axios
      .get('https://api.github.com/users/' + params.id)
      .then((response) => {
        return { user: response.data.results }
      })
  },
  data() {
    return {
      url: this.user.avatar_url,
    }
  },
}
</script>
<style scoped>
.profile {
  font-family: 'Rubik', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
}
.icon {
  width: 20px;
  height: 18px;
  left: 2px;
  top: 3px;
}
</style>
