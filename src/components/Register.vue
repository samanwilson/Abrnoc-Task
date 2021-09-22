<template>
    <div id="Register">
        <v-container>

    <v-row  no-gutters style="height: 150px;">

        <v-col align="center">
            <h1 class="Text-Blue">Please Register Your Account</h1>
        </v-col>
    </v-row>
    <v-row class="grey lighten-5 mb-6">
        <v-col >
            <v-form

                    lazy-validation
            >
                <v-text-field
                        v-model="AuthInfo.email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                ></v-text-field>

                <v-text-field
                        v-model="AuthInfo.full_name"
                        :counter="20"
                        :rules="nameRules"
                        label="Name"
                        required
                ></v-text-field>



                <v-text-field
                        v-model="AuthInfo.phone_number"

                        :rules="PhoneNumberRules"
                        label="PhoneNumber"
                        required
                ></v-text-field>

                <v-text-field
                        id="Password"
                        v-model="AuthInfo.password"
                        label="Password"
                        required

                ></v-text-field>





                <v-checkbox

                        label="Hide Password"
                        color="indigo"
                        value="indigo"

                        @click="ShowPassword"
                ></v-checkbox>

                <v-btn

                        color="success"
                        class="mr-4"
                        @click="validate(AuthInfo)"
                >
                    Sign Up
                </v-btn>


            </v-form>
            <br>
            <router-link :to="'/Login'">Already Have An Account?Sign In</router-link>
        </v-col>
    </v-row>
        </v-container>
    </div>
    </template>
<script>

export default {

name: "Home",


data: () => ({
    ShowPass:false,
ShowAlert:false,
alignments: [
'start',
'center',
'end',
],

AuthInfo:{
    email: "",
    full_name: "",
    phone_number: "",
    password: ""
},

PhoneNumberRules:[
v => !!v || 'Name is required'
],
nameRules: [
v => !!v || 'Name is required',
v => (v && v.length <= 20) || 'Name must be less than 20 characters',
],
emailRules: [
v => !!v || 'E-mail is required',
v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
],

}),
methods:{
    ShowPassword(){
      let Input = document.querySelector('#Password')
       if (Input.type==='text'){
           Input.type = 'password'

       }else {
           Input.type = 'text'
       }
    },
validate(AuthInfo){
    this.$store.dispatch('RegisterUser',AuthInfo)

}
},
};
</script>

<style>

.Text-Blue{
    color: #0093ff;
}
</style>
