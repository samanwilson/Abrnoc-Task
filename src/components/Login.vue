
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
                            ref="form"
                            v-model="valid"
                            lazy-validation
                    >
                        <v-text-field
                                v-model="LoginInfo.email"
                                :rules="emailRules"
                                label="E-mail"
                                required
                        ></v-text-field>

                        <v-text-field
                                v-model="LoginInfo.Password"
                                label="Password"
                                required
                        ></v-text-field>



                        <v-btn
                                :disabled="!valid"
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


    export default {
        name: "Home",

        data: () => ({
            ShowAlert:false,
            alignments: [
                'start',
                'center',
                'end',
            ],

            valid: true,
            LoginInfo:{
                Password:'',
                email: '',
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

                this.$router.push('/Panel')



            }
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
