import { createStore } from 'vuex'


import { auth } from './auth.modules';


// Create a new store instance.
const store = createStore({
  state ()  {
    
     return {
      count: 0
     }
  
  },
  mutations: {
    increment (state) {
      state.count++
    }
  } ,
  modules :{
    auth
  }
})
export { createStore }

export default store