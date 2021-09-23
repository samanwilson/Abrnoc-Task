<template>
    <v-col class="px-0 ml-2">
        <v-card flat height="50px" >
            <v-toolbar dense class="primary">
                <v-alert v-if="this.$store.state.ShowChangePassword"
                         border="left"
                         color="green"
                         align="center"
                         type="success"
                >Instructions Have Been Sent To Your Email</v-alert>
                <v-menu offset-y>
                <v-spacer></v-spacer>

                    <template v-slot:activator="{ on, attrs }">
                        <v-btn

                                color="primary"
                                dark
                                v-bind="attrs"
                                v-on="on"
                        >
                            <v-icon>mdi-dialpad</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item>
                            <v-list-item-title @click="ChangePassword(changePassword)" class="Selected">Change Password</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>


                <v-banner class="Text-White">{{ShowUserFromVuex.full_name}}</v-banner>

            </v-toolbar>
        </v-card>
    </v-col>
</template>

<script>
    export default {
        data(){
            return{
                changePassword:{
                    email:sessionStorage.getItem('email')
                }
            }
        },
        name: "Nav",
        methods:{
            ChangePassword(email){
                this.$store.dispatch('SendChangePasswordEmail',email)
            }
        },
        computed:{
            ShowUserFromVuex(){
                return this.$store.getters.ShowRegisteredUser
            }
        },
        created(){
            this.$store.dispatch("GetUserAuth")
        }
    }
</script>

<style >

</style>