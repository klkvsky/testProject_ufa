import catalog from '~/static/json/items.json'

import Vue from 'vue'

export const actions = {}

export const state = () => ({
  currentMaterial: { id: '1', name: 'Дерево' },
  currentSorting: 'Цена по возрастанию',
  mainCatalog: catalog,
})

export const mutations = {
  changeMaterial(state, payload) {
    state.currentMaterial = payload
  },
  changeSorting(state, payload) {
    state.currentSorting = payload
  },
  addToFav(state, payload) {
    if (payload.isFavortie === true) {
      Vue.set(payload, 'isFavortie', false)
    } else if (payload.isFavortie === false || !payload.isFavortie) {
      Vue.set(payload, 'isFavortie', true)
    }
  },
  addToCart(state, payload) {
    if (payload.inCart === true) {
      Vue.set(payload, 'inCart', false)
    } else if (payload.inCart === false || !payload.inCart) {
      Vue.set(payload, 'inCart', true)
    }
  },
  checkLocalStorage(state) {
    if (localStorage.mainCatalog) {
      state.mainCatalog = JSON.parse(localStorage.getItem('mainCatalog'))
    }
  },
}

export const getters = {}
