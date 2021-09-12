<template>
    <v-container fluid class="pa-0">
        <v-row>
            <SideBar></SideBar>
            <v-col cols="2" class="For-Alignment"></v-col>
            <v-col cols="10" >
                <v-row> <Nav></Nav></v-row>
               <v-row id="SelectedServerType">
                   <v-col cols="12 ">
                       <h1 class="ml-3">Deploy New instance</h1>
                       <hr>

                       <h3 class="ml-3 my-5">Choose Server</h3>
                       <v-row>
                       <v-col class="col-lg-3 d-flex ">
                           <v-card class="pa-5 ml-4 col-md-6 col-sm-6 col-lg-3  Selected "  v-for="Type in ShowServerTypeFromVuex[0]" :key="Type.id">
                               <v-badge bordered color="green" :v-if=TypeSelected></v-badge>
                               <v-img src="../assets/logo.png"></v-img>
                               <v-card-title @click="SendServerType(Type.id)"  >

                                   <span class="Text-Blue Text-hover" >{{Type.type}}</span>
                               </v-card-title>
                           </v-card>
                       </v-col>
                       </v-row>


                   </v-col>
               </v-row>
                <v-row id="SelectedLocation">
                    <v-col cols="12">
                        <h3 class="ml-3 my-5">Choose Country</h3>
                        <v-row >

                        <v-col class="col-md-6 col-lg-3 ml-3  Selected" v-for="Country in ShowLocationFromVuex[0]" :key="Country.id">
                            <v-card class="d-flex">
                            <v-badge bordered color="green" v-if="CountrySelected"></v-badge>
                            <div class="Img-Wrapper col-lg-2 d-flex align-center">
                                <v-img src="../assets/logo.png" ></v-img>
                            </div>
                            <div class="Text-Wrapper ">
                                <v-card-title @click="SendLocation(Country.id)">{{Country.city}}</v-card-title>
                            </div>
                            </v-card>
                        </v-col>

                        </v-row>

                    </v-col>
                </v-row>
                <v-row id="SelectedOS">
                    <v-col cols="12">
                        <h3 class="ml-3 my-5">Choose Server Type</h3>
                        <v-row >

                            <v-col class="col-md-6 col-lg-3 d-flex ml-3" v-for="OS in ShowOSFromVuex[0]" :key="OS.id">
                                <v-badge bordered color="green" v-if="ServerSelected"></v-badge>
                                <div class="Img-Wrapper col-lg-2 d-flex align-center">
                                    <v-img src="../assets/logo.png" ></v-img>
                                </div>
                                <div class="Text-Wrapper ">
                                    <v-menu offset-y>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-card-title  v-bind="attrs" v-on="on">{{OS.operator}}</v-card-title>
                                        </template>
                                        <v-list>
                                            <v-list-item link
                                                    v-for="(item,idx)  in items"
                                                    :key="idx"
                                            >
                                                <v-list-item-title @click="SendOS(OS.id,item.title)" >{{ item.title }}</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>


                                </div>
                            </v-col>

                        </v-row>

                    </v-col>
                </v-row>
                <v-row id="Selected Plans">
                    <v-col cols="12">
                        <h3 class="ml-3 my-5">Choose Your Plan</h3>
                        <v-row>
                            <v-col class="col-md-6 col-lg-3 col-sm-12" v-for="Plan in ShowPlansFromVuex[0]" :key="Plan.id">
                                <v-card outlined class="Selected" @click="SendSelectedPlan(Plan.id)">
                                    <v-badge bordered color="green" v-if="PlanSelected"></v-badge>
                                    <v-card-title >
                                        <div>
                                            <span class="Text-Blue text-h4">{{Plan.Title}}</span>
                                            <p>{{Plan.duration + "/" + Plan.Price+ '$'}}</p>
                                        </div>

                                    </v-card-title>
                                    <hr>
                                    <v-card-text>
                                        <div class="d-flex flex-column">
                                        <span>{{Plan.config.cpu}} Cores</span>
                                        <span>{{Plan.config.memory}} Memory</span>

                                        </div>
                                    </v-card-text>
                                    <v-text-field
                                            v-model="qty"
                                            label="enter quantity"
                                            required
                                    ></v-text-field>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row id="Manage-SSH-Key">
                    <v-col cols="12">
                        <h3 class="ml-3 my-5">Manage SSH keys</h3>
                        <v-row>

                            <v-col class="col-4 d-flex" >
                                <div class="Img-Wrapper col-2 d-flex align-center">
                                    <v-img src="../assets/logo.png" ></v-img>
                                </div>
                                <div class="Text-Wrapper ">
                                    <v-card-title>Key name</v-card-title>
                                    <v-card-subtitle>No Keys Available</v-card-subtitle>
                                </div>
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
                                               v-model="NewSSHkey.name"
                                       ></v-text-field>
                                       <v-text-field

                                               label="Label"
                                               outlined
                                               clearable
                                               v-model="NewSSHkey.label"
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
                                <h3 class="Text-White">
                                    Total Price {{ShowUserPlanFromVuex}} $
                                </h3>
                            </v-col>
                            <v-col class="col-md-6">
                                <v-btn @click="Deploy()" color="primary" class="v-btn" >
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
                qty:'',
                Plan:this.$store.state.UserPlan,
                ServerSelected:true,
                CountrySelected:true,
                TypeSelected:true,
                PlanSelected:true,
                NewSSHkey:{
                    name:'',
                    label:''
                },

                items: [
                    { title: ' 32bit' },
                    { title: ' 64bit' },

                ]

            }

        },
        methods:{
            SendServerType(id){
                this.$store.dispatch('GetSelectedServerType',id)
            },
            SendLocation(cid){
                this.$store.dispatch('GetSelectedLocation',cid)

            },
            SendOS(oid){

                this.$store.dispatch('GEtSelectedOS',oid)
            },
            SendSelectedPlan(pid){
                this.$store.dispatch('GetSelectedPlan',pid)
            },
            Deploy(){
                this.$store.dispatch('DeployServer')
                this.$router.push('/Panel')

            }
        },
        computed:{
            ShowServerTypeFromVuex(){
                return this.$store.getters.ShowServerType
            },
            ShowLocationFromVuex(){
                return this.$store.getters.ShowLocation
            },
            ShowOSFromVuex(){
                return this.$store.getters.ShowOS
            },
            ShowPlansFromVuex(){
                return this.$store.getters.ShowPlans
            },


            ShowUserPlanFromVuex(){

                let result =
                this.Plan.reduce((acc,curr)=>{
                    return acc * curr.Price
                },this.qty)
                return result


            }
        },
        created(){
            this.$store.dispatch('GetServerType'),
            this.$store.dispatch('GetLocation'),
                this.$store.dispatch('GetOS'),
                this.$store.dispatch('GetPlans')
        }
    }
</script>

<style scoped>

</style>