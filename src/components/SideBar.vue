<template>
    <v-col cols="2" class="pr-0  d-fixed">
        <v-card

                class="Size"
        >
            <v-navigation-drawer permanent class="primary ">
                <v-list-item >
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