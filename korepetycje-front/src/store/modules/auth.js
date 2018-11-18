import service from '@/service'

const state = () => ({
  details: null
})

const getters = {

}

const mutations = {

}

const actions = {
  async login ({ commit }, payload) {
    const response = await service.auth.login(payload)
    console.log(response)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
