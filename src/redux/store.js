import { configureStore } from '@reduxjs/toolkit'
import search from './reducer/search'

export const store = configureStore({
  reducer: {
    search
  }
})