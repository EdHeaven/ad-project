<template> 
  <v-container>
    <v-layout row> 
    <v-flex xs12 sm6 offset-sm3>
      <h1 class="text--secondary mb-3 mt-3">Orders</h1>
  <v-list
      subheader
      two-line
      flat>
  <v-list-item v-for="order in orders" :key="order.id">
    <v-list-item-action>
      <v-checkbox
        :input-value="order.done"
        color="primary"
        @click="markDone(order)"
      ></v-checkbox>
    </v-list-item-action>

  <v-list-item-content>
  <v-list-item-title>{{ order.phone }}</v-list-item-title>
    <v-list-item-subtitle>{{ order.name }}</v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-action>
    <v-btn class="primary"
    :to="'/ad/' + order.adId"
    >Open</v-btn>
    </v-list-item-action>
    </v-list-item>
</v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      orders:[
        {
          id:"123",
          name:"Ivan",
          phone:"+7(978)127-70-12",
          adId:"1",
          done:true
        },
        {
          id:"124",
          name:"Vladimir",
          phone:"+7(978)999-14-76",
          adId:"12",
          done:false
        },
        {
          id:"125",
          name:"Rita",
          phone:"+7(978)485-09-33",
          adId:"23",
          done:false
        },
      ]
    }
  },
    methods: {
    markDone(order) {
      order.done = !order.done
      console.log(order.done)
    }
  }
}
</script>