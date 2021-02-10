<template>
    <div class="team">
        <h1 class="ma-4 subtitle-1 grey--text">Team</h1>

        <v-container class="my-5">
            <v-row>
                <v-col cols="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
                    <v-card class="text-center">
                        <v-responsive class="pt-4">
                            <v-avatar size="80" >
                                <img :src="person.avatar" :alt="person.name">
                            </v-avatar>
                        </v-responsive>
                        <v-card-text>
                            <div class="subtitle-1">
                                {{person.name}}
                            </div>
                            <div class="grey--text text--lighten-1">
                                {{person.role}}
                            </div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn text color="grey">
                                <v-icon small left>mdi-message</v-icon>
                                <span>Message</span>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>

export default {
    name: 'Team',
    components: {
    },
    data() {
        return {
            team: [
                {name: 'Marion', role: 'Web developer', avatar: '/avataaars(1).png'},
                {name: 'Mehdi', role: 'Web designer', avatar: '/avataaars(2).png'},
                {name: 'Rollo', role: 'Web developer', avatar: '/avataaars(3).png'},
                {name: 'Floki', role: 'Marketing', avatar: '/avataaars.png'},
            ]
        }
    }
}
</script>