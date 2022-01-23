export const actions = {}

export const state = () => ({
  currentMaterial: { id: '1', name: 'Дерево' },
  currentSorting: 'Цена по возрастанию',
})

export const mutations = {
  changeMaterial(state, payload) {
    state.currentMaterial = payload
  },
  changeSorting(state, payload) {
    state.currentSorting = payload
  },
}

export const getters = {}
