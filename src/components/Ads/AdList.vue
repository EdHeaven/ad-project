<template> 
    <v-container>
        <v-layout row v-if="!loading && myAds.length !== 0"> 
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-5 mt-5">My ads</h1>
              <v-card 
                  class="elevation-10 mb-5" v-for="ad in myAds" :key="ad.id">
                  <v-layout row>
                        <v-flex xs4 class="pl-3">
                          <v-img :src="ad.src" height="175px"></v-img>	
                        </v-flex>
                       <v-flex xs8 class="pr-3">
                          <v-card-text>
                             <h2 class="text-primary mb-5">{{ad.title}}</h2>
                             <p>{{ad.desc}}</p>
                          </v-card-text>
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn dark color="primary" :to="'/ad/' + ad.id">
                                 Open
                              </v-btn>
                           </v-card-actions>	
                       </v-flex>
                   </v-layout>
              </v-card>
            </v-flex>
        </v-layout> 
        <v-layout raw v-else-if="!loading && myAds.length === 0">
          <v-flex xs12 sm6 offset-sm3>
            <h1 class="text--primary">You have no ads.</h1>
            </v-flex>			
        </v-layout>
            <v-layout raw v-else>
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
</template>

<script>
export default {
    computed: {
        myAds(){
            return this.$store.getters.myAds
        },
        loading () {
            return this.$store.getters.loading
        }
    }
} 
</script>
