<template>
  <div class="home col-6">
    <div class="my-3" id="bite-area">
      <b-form-textarea class="w-100 p-2 my-1 mx-n1 border-0" id="bite-input" placeholder="What have you been biting your brains about?"></b-form-textarea>
      <b-button class="primary my-1" type="submit" variant="primary" v-on:click="addBite()">Bite!</b-button>
    </div>
    <div class="bits-list border-left border-right border-top">
      <div class="bite-container" v-for="bite in biteList" v-bind:key="bite.id">
        <Bite :text=bite.text :date=moment(bite.created_at) :id=bite.id v-on:delete-bite="deleteBite" v-on:edit-bite="editBite"></Bite>
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
      // Get the id of the most recent Bite and add 1. (if there is)
      var newID
      if (biteListFile.bites.length > 0) {
        newID = biteListFile.bites[0].id + 1
      } else {
        console.log(biteListFile.bites.length)
        newID = 1
      }
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
    },
    editBite: function (deleteID, newContent) {
      // Find the index of the element to be edited
      const biteList = biteListFile.bites
      const cond = (element) => element.id === deleteID
      console.log(biteList)
      var indexEdit = biteList.findIndex(cond)

      biteList[indexEdit].text = newContent
      console.log(indexEdit)
    }
  }
}
</script>
