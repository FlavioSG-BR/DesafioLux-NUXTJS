import axios from 'axios'

export default function ({ params, store }) {
  return axios
    .get('https://api.github.com/users/' + params.id)
    .then((response) => {
      store.commit('add', response.data)
    })
}
