<template>
    <div id="Register">
        <v-container>
    <v-alert v-if="ShowAlert"
             border="left"
             color="green"
             align="center"
             type="success"
    >Register Successful Please Login</v-alert>
    <v-row  no-gutters style="height: 150px;">

        <v-col align="center">
            <h1 class="Text-Blue">Please Register Your Account</h1>
        </v-col>
    </v-row>
    <v-row class="grey lighten-5 mb-6">
        <v-col align="center">
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
                        v-model="AuthInfo.name"
                        :counter="20"
                        :rules="nameRules"
                        label="Name"
                        required
                ></v-text-field>



                <v-text-field
                        v-model="AuthInfo.phone"

                        :rules="PhoneNumberRules"
                        label="PhoneNumber"
                        required
                ></v-text-field>

                <v-text-field
                        v-model="AuthInfo.password"
                        label="Password"
                        required
                ></v-text-field>



                <v-btn

                        color="success"
                        class="mr-4"
                        @click="validate(AuthInfo)"
                >
                    Validate
                </v-btn>


            </v-form>
        </v-col>
    </v-row>
        </v-container>
    </div>
    </template>
<script>
export default {
name: "Home",

data: () => ({
ShowAlert:false,
alignments: [
'start',
'center',
'end',
],

AuthInfo:{
    email: "",
    name: "",
    phone: "",
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
validate(AuthInfo){

this.ShowAlert = true
    this.$store.dispatch('RegisterUser',AuthInfo)

    this.$router.push('/Panel/3')

}
},
};
</script>

<style>

.Text-Blue{
    color: #0093ff;
}
</style>
