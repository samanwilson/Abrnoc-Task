<template>
    <div id="Panel">
  <v-container fluid class=" pa-0">
      <v-row>
          <v-col cols="2" class="pr-0 ">
              <v-card
                      height="1000"
                      width="256"
                      class=""
              >
                  <v-navigation-drawer permanent>
                      <v-list-item class="primary">
                          <v-list-item-content>
                              <v-list-item-title class="text-h6 Text-White">
                                  Application
                              </v-list-item-title>
                              <v-list-item-subtitle class="Text-White">
                                  subtext
                              </v-list-item-subtitle>
                          </v-list-item-content>
                      </v-list-item>

                      <v-divider></v-divider>

                      <v-list dense nav class="primary" >
                          <v-list-item v-for="item in items" :key="item.title" link class="Flex ">
                              <v-list-item-icon  class="mx-auto ">
                                  <v-icon class="Text-White" >{{ item.icon }}</v-icon>
                              </v-list-item-icon>
                              <v-list-item-content>
                                  <v-list-item-title class="Text-White">{{ item.title }}</v-list-item-title>
                              </v-list-item-content>
                          </v-list-item>
                      </v-list>
                  </v-navigation-drawer>
              </v-card>

          </v-col>
          <v-col  cols="10" class="pl-0">
              <v-row>
                  <v-col>
                      <v-card flat height="50px">
                          <v-toolbar dense>
                              <v-spacer></v-spacer>

                              <v-btn icon >
                                  <v-icon>mdi-dots-vertical</v-icon>
                              </v-btn>
                              <v-banner>user name</v-banner>
                          </v-toolbar>
                      </v-card>
                  </v-col>
              </v-row>



              <v-row>
                  <v-col cols="12">
                      <h1 class="ml-2">Products</h1>


                      <v-card>
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
    export default {
        name: "Panel",
        data(){
            return{
                headers: [
                    {text: 'IP', value: 'name'},
                    { text: 'location', value: 'Country' },
                    { text: 'status', value: 'stats' },

                ],
                IPs: [
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
                    {
                        name: '1.1.1.1',
                        Country: 'usa',
                        stats: 'On',
                    },

                ],

                items: [
                    { title: 'Product', icon: 'mdi-view-dashboard' },
                    { title: 'Billing', icon: 'mdi-image' },
                    { title: 'Support', icon: 'mdi-help-box' },
                ],
            }
        }
    }
</script>

<style scoped>
body{
    margin: 0px;
    padding: 0px;
}

    .Flex{
        display: flex;
        flex-direction: column;
    }

    .Text-White{
        color: white!important;
    }
</style>