import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    RegisteredUser:[]
  },
  getters:{
    ShowRegisteredUser(state){
      return state.RegisteredUser
    }
  },
  mutations: {
    SetRegisteredUser(state,data){
      state.RegisteredUser.push(data)
    }
  },
  actions: {
    RegisterUser(context,data){
      axios.post('https://pcloud.abrnoc.com:8300/auth',data).then((res)=>{
        console.log(res)
      })
    }
  },
  modules: {},
});
