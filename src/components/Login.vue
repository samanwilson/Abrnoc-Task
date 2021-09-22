
<template>
    <div id="Auth">
        <v-container >
            <v-alert v-if="this.$store.state.EmailConfirmAlert"
                     border="left"
                     color="green"
                     align="center"
                     type="success"
            >Register Successful Please Confirm your email and then attempt to login</v-alert>
            <v-row  no-gutters style="height: 150px;">

                <v-col align="center">
                    <h1 class="Text-Blue"> Please Login to your account</h1>
                </v-col>
            </v-row>
            <v-row class="grey lighten-5 mb-6">
                <v-col
                >
                    <v-form

                            lazy-validation
                    >
                        <v-text-field
                                v-model="LoginInfo.email"
                                :rules="emailRules"
                                label="E-mail"
                                required
                        ></v-text-field>

                        <v-text-field
                                id="LoginPassword"
                                v-model="LoginInfo.password"
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
                                @click="Login(LoginInfo)"
                        >
                            Sign In
                        </v-btn>


                    </v-form>
                    <br>
                    <router-link :to="'/'">Dont Have An Account?Sign up</router-link>
                </v-col>
            </v-row>
        </v-container>


    </div>
</template>



<script>


    export default {
        name: "Home",

        data: () => ({

            alignments: [
                'start',
                'center',
                'end',
            ],

            LoginInfo:{
                email: '',
               password:''
            },
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
        }),
        methods:{
            ShowPassword(){
                let Input = document.querySelector('#LoginPassword')
                if (Input.type==='text'){
                    Input.type = 'password'

                }else {
                    Input.type = 'text'
                }
            },
            Login(LoginInfo){
                this.$store.dispatch('LoginUser',LoginInfo)
                },




            },






        components: {
        },
    };
</script>

<style>
    .Text-Blue{
        color: #0093ff;
    }
</style>
