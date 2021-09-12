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
                                         <h2>No instances</h2>
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
                                      <v-data-table
                                              :headers="headers"
                                              :items="IPs"

                                              class="elevation-1"
                                      ></v-data-table>
                                  </v-col>
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
            return{
                headers: [
                    {text: 'IP', value: 'Type'},
                    { text: 'location', value: 'Country' },
                    { text: 'status', value: 'stats' },

                ],
                IPs: [
                    {
                        Type:"low",
                        Country: 'usa',
                        stats: 'On',
                    },
                    {
                        name: '1.1.1.1',
                        Country: 'usa',
                        stats: 'On',
                    },
                    {
                        name: '1.1.1.1',
                        Country: 'usa',
                        stats: 'On',
                    },

                ],


            }
        },
        methods:{
            LeadToDeploy(){
                this.$router.push('/Deploy')
            }
        }
    }
</script>

<style >



</style>