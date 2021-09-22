<template>
    <v-col cols="2" class="pr-0  d-fixed">
        <v-card

                class="Size"
        >
            <v-navigation-drawer permanent class="primary ">
                <v-list-item  align="center">
                    <v-list-item-content>
                        <div class="d-flex">
                            <i class="fab fa-vuejs align-self-center " style="font-size: 50px"></i>
                            <v-list-item-title class="Text-White text-h3 font-weight-bold " >
                                Vultr
                            </v-list-item-title>
                        </div>


                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list dense nav class="primary " >
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
</template>

<script>
    export default {
        name: "SideBar",
        data(){
            return{

                items: [
                    { title: 'Product', icon: 'mdi-view-dashboard' },
                    { title: 'Billing', icon: 'mdi-image' },
                    { title: 'Support', icon: 'mdi-help-box' },
                ],
            }

        }
    }
</script>

<style >

</style>