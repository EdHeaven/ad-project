<template>
      <v-dialog
        v-model="modal"
        width="400px"
      >
       <template v-slot:activator="{ on }"><v-btn 
        v-on="on"
        color="warning"
        flat
        >
        Edit</v-btn></template>
        <v-card>
          <v-container>
            <v-layout row>
              <v-flex xs>
                <v-card-title>
                  <h1 class="text--primary">Edit Ad</h1>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs>
                <v-card-text>
                  <v-text-field
                    name="title" 
                    label="Title" 
                    type="text" 
                    v-model="editedTitle" 
                  >
                  </v-text-field>
                  <v-textarea
                  name="desc" 
                  label="Description" 
                  type="text" 
                  v-model="editedDesc"
                  class="mb-3" 
                  ></v-textarea>
                 </v-card-text>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text @click="onCancel">Cancel</v-btn>
                  <v-btn color="success" @click="onSave">Save</v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-dialog>
</template>
<script>
  export default {
    props: ['ad'],
    data() {
      return {
        modal: false,
        editedTitle: this.ad.title,
        editedDesc: this.ad.desc
      }
    },
    methods: {
      onCancel (){
        this.editedTitle = this.ad.title
        this.editedDesc = this.ad.desc
        this.modal = false
      },
      onSave (){
        if (this.editedTitle !== '' && this.editedDesc !== '') {
          this.$store.dispatch('updateAd', {
            title: this.editedTitle,
            desc: this.editedDesc,
            id: this.ad.id
          })
          this.modal = false
        }
      }
    }
  }
</script>