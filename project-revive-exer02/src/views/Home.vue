<template>
  <div class="home col">
    <div class="my-3" id="bite-area">
      <textarea class="w-100 p-2 my-1 mx-n1 border-0" id="bite-input" placeholder="What have you been eating?"></textarea>
      <b-button pill class="primary my-1" type="submit" size="lg" variant="primary" v-on:click="addBite()">Bite!</b-button>
    </div>
    <div class="bits-list border-left border-right border-top">
      <div class="bite-container" v-for="bite in biteList" v-bind:key="bite.id">
        <Bite :text=bite.text :date=moment(bite.created_at) :id=bite.id v-on:delete-bite="deleteBite"></Bite>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Bite from '@/components/Bite.vue'
import biteListFile from '@/assets/bites.json'
import moment from 'moment'

export default {
  name: 'Home',
  components: {
    Bite
  },
  data () {
    return {
      biteList: biteListFile.bites
    }
  },
  methods: {
    moment: moment,
    addBite: function () {
      // Get the id of the most recent Bite and add 1.
      var newID = biteListFile.bites[0].id + 1
      var currentDate = moment.now()
      var biteText = document.getElementById('bite-input').value
      // Create a new object that will contain the Bite.
      var newBite = {
        id: newID,
        text: biteText,
        created_at: currentDate
      }
      biteListFile.bites.unshift(newBite)
    },
    deleteBite: function (deleteID) {
      // Find the index of the element to be deleted
      const biteList = biteListFile.bites
      const cond = (element) => element.id === deleteID
      console.log(biteList)
      var indexDelete = biteList.findIndex(cond)

      biteList.splice(indexDelete, 1)
      console.log(indexDelete)
    }
  }
}
</script>
