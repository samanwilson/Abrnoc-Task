import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router/index";
import VueSessionStorage from 'vue-sessionstorage'
Vue.use(VueSessionStorage)


Vue.use(Vuex);

export default  new Vuex.Store({
  state: {
    EmailConfirmAlert:false,
    IsAuth:false,
    ShowChangePassword:false,
   User:[],
    gtoken:'',
    token:'',
    Templates:[],
    SelectedTemp:[],
    NoInstance:true,
    UserSshKey:[]

  },
  getters:{
    ShowRegisteredUser(state){
      return state.User
    },
    ShowTemplates(state){
      return state.Templates
    },
    ShowSelectedTemp(state){
      return state.SelectedTemp
    },
    ShowSshKey(state){
      return state.UserSshKey
    }

  },
  mutations: {
    SetTokens(state,data){
      sessionStorage.setItem('token',data.data.token)
     sessionStorage.setItem('gtoken',data.data.gtoken)
      state.EmailConfirmAlert=true


    },
    SetUserInfo(state,data){
      state.User = data
      state.IsAuth=true
      sessionStorage.setItem('email',state.User.email)


    },
    SetTemplates(state,data){
      state.Templates = data
    },
    SetSelectedTemplate(state,data){
      state.SelectedTemp.push(data)
      state.NoInstance =false
      router.push('/Panel')
      console.log(state.SelectedTemp)

    },
    SetSshKey(state,data){
      state.UserSshKey.push(data)

    },
    SetRes(state){
      state.ShowChangePassword=true
      setTimeout(function () {
        state.ShowChangePassword=false
      },4000)
    }

  },
  actions: {
    RegisterUser(context,data){
      axios.post('https://odev.abrnoc.com/fastapi/auth',data).then((res)=>{
        console.log(res)
        if (res.statusText=== 'Created') {
          alert('please confirm your email')
          router.push('/Login')

        }
      }).catch((err)=>{
        alert(err)
      })
    },




    LoginUser(context,data){
      axios.post('https://odev.abrnoc.com/fastapi/auth/login',data).then((res)=>{
        if (res.statusText=== 'Created') {
          console.log(res)
          context.commit('SetTokens',res)
          router.push('/Panel')

        }

      }).catch((err)=>{
        alert(err)
      })
    },

    GetUserAuth(context){
      fetch('https://odev.abrnoc.com/fastapi/auth/user-info',{
        method:'get',
        headers:{
            'accept':'application/json',
            'session-string': sessionStorage.getItem('token')
        },
      }).then( res=>res.json()).then((data)=>{
        context.commit('SetUserInfo',data)
      }).catch((err)=>{
        alert(err)
      })

    },
    GetTemplates(context){
      fetch('https://odev.abrnoc.com/fastapi/templates',{
        method:'get',
        headers:{
          'accept':'application/json',
          'session-string': sessionStorage.getItem('token')
        }
      }).then( res=>res.json()).then((data)=>{
        context.commit('SetTemplates',data)

      }).catch((err)=>{
        alert(err)
      })
    },

    GetSelectedTemplate(context,filter){
      fetch('https://odev.abrnoc.com/fastapi/templates/'+filter,{
        method:'get',
        headers:{
          'accept':'application/json',
          'session-string': sessionStorage.getItem('token')
        }
      }).then( res=>res.json()).then((data)=>{
        context.commit('SetSelectedTemplate',data)

      }).catch((err)=>{
        alert(err)
      })
    },

    CreateNewSshKey(context,key){
      axios.post(' https://odev.abrnoc.com/fastapi/ssh-keys',key,{
      headers:{

          'accept':'application/json',
          'session-string': sessionStorage.getItem('token'),
          'Content-Type': 'application/json'

      }
      }).then((res)=>{
        console.log(res)

      }).then(()=>{
        axios.get('https://odev.abrnoc.com/fastapi/ssh-keys',{
          headers:{
            'accept':'application/json',
            'session-string': sessionStorage.getItem('token')
          }
        }).then((res)=>{
          context.commit('SetSshKey',res.data)
          console.log(res)
        })
      })



    },
    SendChangePasswordEmail(context,email){
      axios.post('https://odev.abrnoc.com/fastapi/auth/forgot-password',email).then((res)=>{
        if (res.statusText==='Accepted'){
          context.commit('SetRes')
          console.log(res)
        }

      }).catch((err)=>{
        alert(err)
      })
    }



  },
  modules: {},
});
