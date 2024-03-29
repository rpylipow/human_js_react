import Model from 'ampersand-model'
import RepoCollection from './repo-collection'
import githubMixin from '../helpers/github-mixin'

export default Model.extend(githubMixin, {
  url: 'https://api.github.com/user',

  initialize () {
    this.token = window.localStorage.token
    this.on('change:token', this.onChangeToken)
  },

  props: {
    id: 'number',
    login: 'string',
    name: 'string',
    avatar_url: 'string'
  },

  session: {
    token: 'string'
  },

  collections: {
    repos: RepoCollection
  },

  onChangeToken () {
    window.localStorage.token = this.token
    this.fetchInitialData()
  },

  fetchInitialData () {
    if (this.token) {
      this.fetch()
      this.repos.fetch()
    }
  }
})
