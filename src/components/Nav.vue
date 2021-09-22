<template>
    <v-col class="px-0 ml-2">
        <v-card flat height="50px" >
            <v-toolbar dense class="primary">
                <v-spacer></v-spacer>
                <v-menu offset-y>
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
                            <v-list-item-title @click="ChangePassword" class="Selected">Change Password</v-list-item-title>
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

                c: this.$session.get('token')
            }
        },
        name: "Nav",
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