<template> 
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3 mt-3">Create Ad</h1>
        <v-form v-model="valid" ref="form" validation>
          <v-text-field
          name="title"
          label="Ad Title"
          type="text"
          v-model="title"
          :rules="[ v => !!v || 'Title is required']"
          >
          </v-text-field>
          <v-textarea
          name="description"
          label="Ad Description"
          type="text"
          v-model="description"
          :rules="[ v => !!v || 'Description is required']"
          class="mb-3" 
          ></v-textarea>
          </v-form>
          <v-layout  row>
            <v-flex xs12>
            <v-btn 
            class="mt-3"
            color="warning"
            @click="triggerUpload"
            >
            Upload
              <v-icon right dark>mdi-cloud-upload</v-icon>
            </v-btn>
                <input 
                  ref="fileInput" 
                  type="file" 
                  style="display:none;" 
                  accept="image/*"
                  @change="onFileChange"
                >
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
            <img :src="imageSrc" height="150" class="mt-3" v-if="imageSrc">
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
            <v-switch
                v-model="promo"
                label="Ad to Promo?"
                ></v-switch>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn 
            color="success"
            @click="createAd"
            :loading="loading"
            :disabled:="!valid || !image || loading"
            >Create Ad</v-btn>
            </v-flex>
          </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      valid: false,
      title: "",
      description: "",
      promo: false,
      image: null,
      imageSrc: ""
    }
  },
  computed: {
    loading() {
      return this.$store.getters.loading
    }
  },
  methods: {
    triggerUpload () {
      this.$refs.fileInput.click()
    },
    createAd(){
      if (this.$refs.form.validate() && this.image){
      const ad = {
        title: this.title,
        desc: this.description,
        promo: this.promo,
        image: this.image
      }
      this.$store.dispatch("createAd", ad)
        .then(() => {
        this.$router.push("/list")
        })
        .catch(() => {})
      }
    },
    onFileChange (event) {
      const file = event.target.files[0]
      const reader = new FileReader()
        reader.onload = e => {
          console.log(e)
          this.imageSrc = reader.result
        }
        reader.readAsDataURL(file)
        this.image = file
    }
  }
}
</script>