
<template>
    <div id="Auth">
        <v-container >
            <v-alert v-if="ShowAlert"
                     border="left"
                     color="green"
                     align="center"
                     type="success"
            >Login Successful</v-alert>
            <v-row  no-gutters style="height: 150px;">

                <v-col align="center">
                    <h1 class="Text-Blue"> Please Login to your account</h1>
                </v-col>
            </v-row>
            <v-row class="grey lighten-5 mb-6">
                <v-col align="center">
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
                                v-model="LoginInfo.password"
                                label="Password"
                                required
                        ></v-text-field>



                        <v-btn
                                color="success"
                                class="mr-4"
                                @click="Login(LoginInfo)"
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
import axios from 'axios'

    export default {
        name: "Home",

        data: () => ({
            ShowAlert:false,
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
            Login(LoginInfo){
                console.log(LoginInfo)
                this.ShowAlert = true
                this.$router.push('/Panel/4')
                    axios.post('https://613a0f631fcce10017e78d6b.mockapi.io/users',LoginInfo).then((res)=>{
                        console.log(res)
                    })
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
