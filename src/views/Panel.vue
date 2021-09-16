<template>
    <div id="Panel">
  <v-container fluid class=" pa-0">
      <v-row class="d-flex">
<SideBar></SideBar>
          <v-col cols="2"></v-col>
          <v-col  cols="10" class="pl-0">
              <v-row>
                  <Nav></Nav>
              </v-row>

              <v-row>
                  <v-col cols="12">
                      <h1 class="ml-2">Products</h1>
                      <hr>


                      <v-card class="mt-3">
                          <v-tabs
                                  background-color="deep-purple accent-4"
                                  center-active
                                  dark
                          >
                              <v-tab>Instance</v-tab>
                              <v-tab disabled>Snapshot</v-tab>
                              <v-tab disabled>ISO</v-tab>

                          </v-tabs>
                          <v-card class="pa-5">
                              <v-row>
                                  <v-col cols="12" align="center">
                                      <v-card class="py-3">
                                         <h2 v-if="this.$store.state.NoInstance">No instances</h2>
                                          <v-btn
                                                  class="mx-2"
                                                  fab
                                                  dark
                                                  color="indigo"
                                                  @click="LeadToDeploy"
                                          >
                                              <v-icon dark>
                                                  mdi-plus
                                              </v-icon>
                                          </v-btn>
                                      </v-card>
                                      <br>
                                      <v-card  class="mx-auto" max-width="344"  v-for="item in ShowUserTemplates " :key="item.id">

                                          <v-card-title>
                                             {{item.name}}
                                          </v-card-title>

                                          <v-card-subtitle>
                                             {{item.name}}
                                          </v-card-subtitle>
                                          <v-card-actions>
                                              <v-btn
                                                      color="orange lighten-2"
                                                      text
                                                      @click="show = !show"
                                              >
                                                  Explore
                                              </v-btn>

                                              <v-spacer></v-spacer>

                                          </v-card-actions>
                                          <v-expand-transition >
                                              <div v-show="show">
                                                  <v-divider></v-divider>

                                                  <v-card-text class="text-left">
                                                     Cores {{item.template.CPU}}
                                                  </v-card-text>
                                                  <v-card-text class="text-left">
                                                     Memory Size {{item.template.MEMORY}}
                                                  </v-card-text>
                                                  <v-card-text class="text-left">
                                                       Description {{item.template.INFO}}
                                                  </v-card-text>
                                              </div>
                                          </v-expand-transition>

                                      </v-card>

                                  </v-col>
                                  <p>
                                  </p>
                              </v-row>
                          </v-card>
                      </v-card>
                  </v-col>
              </v-row>
          </v-col>

      </v-row>


  </v-container>


    </div>
</template>

<script>
    import SideBar from "../components/SideBar";
    import Nav from "../components/Nav";

    export default {
        name: "Panel",
        components: {Nav, SideBar},
        data(){
            return {
                show: true,


            }
        },
        methods:{
            LeadToDeploy(){
                this.$router.push('/Deploy')
            }
        },
        computed:{
            ShowUserTemplates(){
              return   this.$store.getters.ShowSelectedTemp
            },

        }
    }
</script>

<style >



</style>