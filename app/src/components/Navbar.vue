<template>
    <nav>
    <v-navigation-drawer 
     v-model="drawer"
     :clipped="$vuetify.breakpoint.lgAndUp"
     fixed
     app
     >
     <v-list dense>
       <template v-for="item in items" >
         <v-layout
            v-if="item.heading"
            :key="item.heading"
            row
            align-center
         >  
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{item.heading}}
              </v-subheader>
            </v-flex>
             </v-layout>
             
            <v-list-tile v-else :key="item.text" router :to="item.route" >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title >
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
       </template>
     </v-list>
    </v-navigation-drawer>
          
          

    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="blue darken-3"
      dark
      app 
      fixed
    >
    <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Esquadrão Pelicano</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
    </v-toolbar>

 </nav>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      drawer: null,
      items: [
        { icon: 'home',     text: 'home', route: "/"},
        { icon: 'assignment_ind', text: 'Comandantes', route: "/comandante" }
        ]
    }),
    props: {
      source: String
    }
  }
</script>