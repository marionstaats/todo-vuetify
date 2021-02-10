<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on }">
            <v-btn class="success" dark v-on="on">Add new project</v-btn>
        </template>
        <v-card>
            <v-card-title class="headline" primary-title>Add a new project</v-card-title>
            <v-card-text>
                <v-form clas="px-3" ref="form">
                    <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
                    <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>

                    <v-menu
                        :close-on-content-click="true"
                        :nudge-right="40"
                        transition="scale-transition"
                        min-width="auto"
                    >
                        <template v-slot:activator="{ on }">
                        <v-text-field
                            :value="formattedDate"
                            label="Due date"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-on="on"
                            :rules="inputRules"
                        ></v-text-field>
                        </template>
                        <v-date-picker v-model="due"></v-date-picker>
                    </v-menu>

                    <v-btn text class="success mx-0 mt-3" @click="submit" :loading="loading">Add project</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
        </v-dialog>
    </div>
</template>

<script>
import moment from 'moment';
import db from '@/fb';

export default {
    data() {
        return {
            title: "",
            content: "",
            due: null,
            inputRules: [
                v => v.length >= 3  || 'Minimum lenght is 3 characters'
            ],
            loading: false,
            dialog: false
        }
    },
    methods: {
        submit() {
            if(this.$refs.form.validate()){
                this.loading = true;

                const project = {
                    title: this.title,
                    content: this.content,
                    due: moment(this.due).format("Do MMMM YYYY"),
                    status: 'ongoing',
                    person: 'Marion'
                }

                db.collection('projects').add(project)
                    .then(() => {
                        this.loading = false;
                        this.dialog = false;
                        this.$emit('projectadded');
                        })
                    .catch((err) => console.log(err))
            }
        }
    },
    computed: {
        formattedDate() {
            return this.due ? moment(this.due).format("Do MMMM YYYY") : "";
        }
    }
}
</script>