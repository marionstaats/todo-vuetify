<template>
  <div class="dashboard">
    <h1 class="ma-4 subtitle-1 grey--text">Dashboard</h1>

    <v-container class="my-5">
      <!-- Sorting the projects by name/person -->
      <v-row class="ma-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('title')" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span right class="caption text-lowercase">by projects name</span>
            </v-btn>
          </template>
          <span>Sorts projects by name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('person')" v-on="on">
              <v-icon left small>mdi-account</v-icon>
              <span right class="caption text-lowercase">by projects person</span>
            </v-btn>
          </template>
          <span>Sorts projects by person</span>
        </v-tooltip>
      </v-row>
      <!-- Card projects -->

        <v-card flat class="pa-3 mb-1" v-for="project in projects" :key="project.id">
          <transition appear name="list">
            <v-row :class="`project ${project.status}`">           
              <v-col cols="12" md="5">
                <div class="caption grey--text">Project title</div>
                <div>{{project.title}}</div>
              </v-col>
              <v-col cols="6" sm="4" md="2">
                <div class="caption grey--text">Person</div>
                <div>{{project.person}}</div>
              </v-col>
              <v-col cols="6" sm="4" md="3">
                <div class="caption grey--text">Due by</div>
                <div>{{project.due}}</div>
              </v-col>
              <v-col cols="4" sm="4" md="2">
                <div class="text-right">
                  <v-chip small :class="`${project.status} white--text caption my-2`">{{project.status}}</v-chip>
                </div>
              </v-col>          
            </v-row>
          </transition>
        </v-card>
    </v-container>

  </div>
</template>

<script>
import db from '@/fb';

export default {
  name: 'Dashboard',
  components: {
  },
  data() {
    return {
      projects: []
    }
  },
  methods: { 
    sortBy(prop) { 
      this.projects.sort((a,b)=> a[prop] < b[prop] ? -1: 1)
    }
  },
  created() { 
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges();
      changes.forEach(change =>{
        if (change.type === 'added'){
          this.projects.push({
            ...change.doc.data(), //the '...' spreads all the content of the data in the object
            id: change.doc.id
          })
        }
      })
    })
  }
}
</script>

<style scoped>
.project.complete{
  border-left: 4px solid #3cd1c2;
} 
.project.ongoing{
  border-left: 4px solid orange;
} 
.project.overdue{
  border-left: 4px solid tomato;
} 
.theme--light.v-chip.complete:not(.v-chip--active){
  background: #3cd1c2;
} 
.theme--light.v-chip.ongoing:not(.v-chip--active) {
    background: #ffaa2c;
  }
.theme--light.v-chip.overdue:not(.v-chip--active) {
  background: #f83e70;
}

/* animation */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

</style>