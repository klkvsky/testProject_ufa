// Получаем изначальный обьект из предоставленного JSON файла
import catalog from '~/static/json/items.json'

import Vue from 'vue'

export const state = () => ({
  // Стейт дефолтного метода фильтрации по материалам
  currentMaterial: { id: '1', name: 'Дерево' },
  // Стейт дефолтного метода сортировки по цене
  currentSorting: 'Цена по возрастанию',
  // Стейт с обьектом из JSON'а
  mainCatalog: catalog,
})

export const mutations = {
  // Функция для изменения текущего вида фильтрации по материалам
  changeMaterial(state, payload) {
    state.currentMaterial = payload
  },
  // Функция для изменения текущего вида сортировки по цене
  changeSorting(state, payload) {
    state.currentSorting = payload
  },
  // Функция для добавления товара в избранное, проверяет добавлен ли товар уже, если да, то меняет значение на false, если нет, то добавляет поле isFavorite c значением true
  addToFav(state, payload) {
    if (payload.isFavorite === true) {
      payload.isFavorite = false
    } else if (payload.isFavorite === false || !payload.isFavorite) {
      Vue.set(payload, 'isFavorite', true)
    }
  },
  // Функция для добавления товара в корзину, проверяет добавлен ли товар уже, если да, то меняет значение на false, если нет, то добавляет поле inCart c значением true
  addToCart(state, payload) {
    if (payload.inCart === true) {
      payload.inCart = false
    } else if (payload.inCart === false || !payload.inCart) {
      Vue.set(payload, 'inCart', true)
    }
  },
  // Функция для проверки localStorage при загрузке на сохранившиейся данные, если есть, то меняет state.mainCatalog на данные из localStorage
  checkLocalStorage(state) {
    if (localStorage.mainCatalog) {
      state.mainCatalog = JSON.parse(localStorage.getItem('mainCatalog'))
    }
  },
}
