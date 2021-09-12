import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    RegisteredUser:[],
    Panel:[],


    ServerType:[],
    Location:[],
    OS:[],
    Plans:[],
    ssh:[],


    UserServerDetail:[],


    UserPlan:[]

  },
  getters:{
    ShowRegisteredUser(state){
      return state.RegisteredUser
    },




    ShowServerType(state){
      return state.ServerType
    },
    ShowLocation(state){
      return state.Location
    },
    ShowOS(state){
      return state.OS
    },
    ShowPlans(state){
      return state.Plans
    },




    ShowUserServer(state){
      return state.UserServerDetail
    },
    ShowPanel(state){
      return state.Panel
    }

  },
  mutations: {
    SetRegisteredUser(state,data){
      state.RegisteredUser.push(data)

    },
    SetServerType(state,data){
      state.ServerType.push(data)

    },
    SetLocation(state,data){
      state.Location.push(data)

    },
    SetOS(state,data){
      state.OS.push(data)
    },
    SetPlans(state,data){
      state.Plans.push(data)
    },
    SetPlanForUser(state,data){
      state.UserPlan.push(data)

},
    SetPanel(state,data){
      state.Panel.push(data)
    }
  },
  actions: {
    RegisterUser(context,data){
      axios.post('https://613a0f631fcce10017e78d6b.mockapi.io/users',data).then((res)=>{
        console.log(res)
        context.commit('SetRegisteredUser',res.data)
      })
    },




    GetServerType(context){
      axios.get('https://613a0f631fcce10017e78d6b.mockapi.io/server-type').then((res)=>{
        context.commit("SetServerType",res.data)
      })

    },
    GetLocation(context){
      axios.get('https://613a0f631fcce10017e78d6b.mockapi.io/country').then((res)=>{
        context.commit("SetLocation",res.data)
      })
    },
    GetOS(context){
      axios.get('http://localhost:3000/os').then((res)=>{
        context.commit("SetOS",res.data)
      })
    },
    GetPlans(context){
      axios.get('http://localhost:3000/plans').then((res)=>{
        context.commit("SetPlans",res.data)
      })
    },






    GetSelectedServerType(context,filter){
      axios.get('https://613a0f631fcce10017e78d6b.mockapi.io/server-type?id='+filter).then((res)=>{
        axios.post('https://613a0f631fcce10017e78d6b.mockapi.io/server-data',res.data[0]).then((result)=>{
          console.log(result)
        })



      })
    },
    GetSelectedLocation(context,filter){
      axios.get('https://613a0f631fcce10017e78d6b.mockapi.io/country?id='+filter).then((res)=>{
        axios.post('https://613a0f631fcce10017e78d6b.mockapi.io/server-data',res.data[0]).then((result)=>{
          console.log(result)
        })
      })
    },
    GEtSelectedOS(context,filter){
      axios.get('http://localhost:3000/os?id='+filter).then((res)=>{
        axios.post('https://613a0f631fcce10017e78d6b.mockapi.io/server-data',res.data[0]).then((result)=>{
          console.log(result)
        })
      })

    },
    GetSelectedPlan(context,filter){
      axios.get('http://localhost:3000/plans?id='+filter).then((res)=>{
        axios.post('https://613a0f631fcce10017e78d6b.mockapi.io/server-data',res.data[0]).then((result)=>{
          console.log(result)
        })
        context.commit('SetPlanForUser',res.data[0])
        console.log(res.data[0])
      })
    },

    DeployServer(context){
      axios.get('https://613a0f631fcce10017e78d6b.mockapi.io/server-data').then((res)=>{
        console.log(res.data)
        context.commit('SetPanel',res.data)

      })
    }

  },
  modules: {},
});


/* example user
{
    "id": 1,
    "email": "example@example.com",
    "full_name": "example",
    "phone_number": "0939110000",
    "password": "qwerty",
    "servers-detail": [
      {
        "ssh-key": "123456",
        "location": "usa",
        "server-type": "medium",
        "OS": {
          "OS-type": "ubontu",
          "OS-version": "64bit"
        },
        "Price": "10$"
      }
    ]
  }
  */
