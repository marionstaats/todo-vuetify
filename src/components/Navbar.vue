<template>
    <nav>

        <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
            <span>Great! You added a new project</span>
            <v-btn text color="white" @click="snackbar=false" class="ml-4">Close</v-btn>
        </v-snackbar>
        <v-app-bar flat>
            <v-app-bar-nav-icon class="grey--text" @click="drawer=!drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>Vuetify</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <!-- Dropdown menu -->
            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn color="grey" text v-on="on">
                        <v-icon left>mdi-chevron-down</v-icon>
                        <span>Menu</span>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-item-title>{{ link.text }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <!-- Logout -->
            <v-btn text color="grey" href="#" target="_blank">
                <span class="mr-2">Sign out</span>
                <v-icon color="grey" >mdi-logout</v-icon>
            </v-btn>
        </v-app-bar>

        <!-- drawer left -->
        <v-navigation-drawer v-model="drawer" temporary app  class="primary">
            <v-row>
                <v-col cols="12" align="center" class="mt-5">
                    <v-avatar size="100">
                        <img src="avataaars(1).png" />
                    </v-avatar>
                </v-col>
                <v-col cols="12" align="center">
                    <div class="white--text subtitle-1">
                        Marion
                    </div>
                </v-col>
                <v-col cols="12" align="center" class="my-3">
                    <Popup @projectadded="snackbar=true" />
                </v-col>
            </v-row>
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon class="white--text">{{link.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer> 
    </nav>
</template>

<script>
import Popup from './Popup';

export default {
    name: 'Navbar',
    components: {
        Popup
    },
    data() {
        return {
            drawer: false,
            links: [
                { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
                { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
                { icon: 'mdi-account', text: 'Team', route: '/team' }
            ],
            snackbar: false,
            showWelcome: false
        }
    }
}
</script>

