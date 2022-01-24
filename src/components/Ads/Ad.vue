<template> 
  <v-container>
    <v-layout row> 
      <v-flex xs12>
        <v-card class="mt-5" v-if="!loading">
          <v-img
            height="300px"
            :src="ad.src"	
          ></v-img>
          <v-card-text>
            <h1 class="text--primary mb-3">{{ ad.title }}</h1>
            <p>{{ ad.desc }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <modal-dialog :ad="ad" v-if="isOwner"></modal-dialog>
            <app-vue-modal :ad="ad"></app-vue-modal>
          </v-card-actions>	
        </v-card>
        <div v-else>
          <v-container>
            <v-layout row>
              <v-flex xs12 sm2 offset-sm6 class="mt-5">
                <v-progress-circular 
                  :size="70"
                  :width="7"
                  color="primary"
                  indeterminate
                ></v-progress-circular>
              </v-flex>
            </v-layout>
          </v-container>
        </div>
      </v-flex>
    </v-layout> 
  </v-container>
</template>

<script>
import EditAdModal from './EditAdModal'
export default {
  props: ['id'],
  computed: {
    ad() {
      const id = this.id
      return this.$store.getters.adById(id)
    },
    loading () {
      return this.$store.getters.loading
    },
    isOwner () {
      return this.ad.ownerId === this.$store.getters.user.id
    }
  },
  components: {
    'modal-dialog': EditAdModal
  }
} 
</script>
