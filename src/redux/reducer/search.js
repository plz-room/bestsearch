import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    keyword: '',
    source: '',
    isLoading: true,
    product_trends: {}
  },
  reducers: {
    changeKeyword(state, action) {
      state.keyword = action.payload.replace(/\s/g, '+')
    //   state.keyword = action
    },
    saveSource (state, action) {
      state.source = action.payload

    },
    changeIsLoadign (state, action) {
        state.isLoading = false
    },
    saveProductTrends (state, action ) {
        state.product_trends = action.payload
    }
  }
})

export const { changeKeyword, saveSource, changeIsLoadign, saveProductTrends } = searchSlice.actions
export default searchSlice.reducer