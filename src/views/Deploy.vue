<template>
    <v-container fluid class="pa-0">
        <v-row>
            <SideBar></SideBar>
            <v-col cols="2" class="For-Alignment"></v-col>
            <v-col cols="10" >
                <v-row> <Nav></Nav></v-row>
                <v-row id="Selected Plans">
                    <v-col cols="12">
                        <v-alert
                                v-if="ShowAlert"
                                 border="left"
                                 color="green"
                                 align="center"
                                 type="success"
                        >Successfully Deployed</v-alert>
                        <h3 class="ml-3 my-5">Choose Your Plan</h3>
                        <v-row>
                            <v-col class="col-md-6 col-lg-3 col-sm-12" v-for="item in ShowTemplatesFromVuex" :key="item.id">
                                <v-card outlined class="Selected" @click="GetSelectedTemplate(item.versions[0].ID)">
                                    <v-img :src="item.logo_url"></v-img>
                                    <v-card-title  >
                                        <div style="text-align: left!important;">
                                            <span class="Text-Blue text-h4">{{item.os_name}}</span>
                                            <p> Version:{{item.versions[0].VERSION}}</p>
                                        </div>

                                    </v-card-title>
                                    <hr>
                                    <v-card-text>
                                        <div class="d-flex flex-column">
                                        <span> Cores :{{item.versions[0].MIN_CPU}}</span>
                                        <span> Memory : {{item.versions[0].MIN_MEMORY}}</span>
                                            <span>Size: {{item.versions[0].MIN_SIZE}}</span>

                                        </div>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row id="Manage-SSH-Key">
                    <v-col cols="12">
                        <h3 class="ml-3 my-5">Manage SSH keys</h3>
                        <v-row>

                            <v-col class="col-12 d-flex" >
                                <v-col class=" col-lg-4 col-md-6" v-for="key in ShowUserSshKey[0]" :key="key.id">
                                    <div class="Wrapper   d-flex">
                                        <div class="Img-Wrapper col-2 d-flex align-center">
                                            <v-img src="../assets/logo.png" ></v-img>
                                        </div>
                                        <div class="Text-Wrapper " >
                                            <v-card-title>key name: {{key.name}}</v-card-title>
                                            <v-card-subtitle>key: {{key.public_key}}</v-card-subtitle>
                                        </div>
                                    </div>
                                </v-col>

                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row id="Add-Ssh-Key">
                    <v-col cols="12">
                        <h3 class="ml-3 my-5">Add ssh key</h3>
                        <v-row>

                            <v-col class="col-lg-4 d-flex" >
                               <v-form >
                                   <div class="d-flex">
                                       <v-text-field
                                               class="mr-5"
                                               label="HostName"
                                               outlined
                                               clearable
                                               v-model="NewKey.name"
                                       ></v-text-field>
                                       <v-text-field

                                               label="Key Name"
                                               outlined
                                               clearable
                                               v-model="NewKey.public_key"
                                       ></v-text-field>
                                   </div>

                               </v-form>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row id="Bottum Nav" class=" px-0 grey">
                    <v-col cols="12 ">
                        <v-row class="d-flex ">

                            <v-col class="col-md-6">
                                <v-btn @click="CreateSSHKEY(NewKey)" color="primary" class="v-btn" >
                                    Deploy
                                </v-btn>
                            </v-col>

                        </v-row>
                    </v-col>
                </v-row>

            </v-col>


        </v-row>




    </v-container>
</template>

<script>
    import SideBar from "../components/SideBar";
    import Nav from "../components/Nav";
    export default {

        name: "Deploy",
        components: {Nav,SideBar},

        data(){
            return{
                t:true,
                icons:{
                    name:'mdidelete'
                },
                    ShowAlert:false,
                NewKey:{
                    name:'',
                    public_key:''
                }
            }

        },
        methods:{
            CreateSSHKEY(key){
              this.$store.dispatch('CreateNewSshKey',key)

            },
            GetSelectedTemplate(id){
              this.$store.dispatch('GetSelectedTemplate',id)
                this.ShowAlert = true

                setTimeout( function (){
                    this.ShowAlert = false

                },3000)

            }

        },
        computed:{

            ShowTemplatesFromVuex(){
                return this.$store.getters.ShowTemplates
            },
            ShowUserSshKey(){
                return this.$store.getters.ShowSshKey
            }

        },
        created(){
            this.$store.dispatch('GetTemplates')
        }

    }
</script>

<style scoped>

</style>