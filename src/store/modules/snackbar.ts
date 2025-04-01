import type { Module } from 'vuex'

import type { RootStore } from '../index'
import { type SnackBar, SnackBarColorsModel, type SnackBarType } from '@/entities/snackbar'

const ADD_SNACK = 'addSnackBar'

export interface SnackBarStore {
  snackBar: SnackBar | null
}

const SNACK_DURATION = 2_000

const createSnackBarObject = ({
  text,
  type,
  duration,
}: {
  text: string
  type: SnackBarType
  duration: number
}): SnackBar => {
  const { color } = SnackBarColorsModel[type]
  return { text, color, duration }
}

const snackBarStore: Module<SnackBarStore, RootStore> = {
  namespaced: true,
  state: {
    snackBar: null,
  },
  mutations: {
    [ADD_SNACK](state, snackBar: SnackBar) {
      state.snackBar = snackBar
    },
  },
  actions: {
    add({ commit }, { text, type, duration = SNACK_DURATION }) {
      const snackBar = createSnackBarObject({ text, type, duration })
      commit(ADD_SNACK, snackBar)
    },
  },
  getters: {
    getItem: (state) => state.snackBar,
  },
}

export default snackBarStore
