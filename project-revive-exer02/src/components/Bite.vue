<template>
  <div class="bite border-bottom p-3">
    <!-- Top Pane -->
    <b-row>
      <b-col>
        <div class="d-flex justify-content-between">
          <h6>{{ relativeDate }}</h6>
          <b-button-group v-if="enableEdit === false">
            <b-button variant="primary" v-on:click="enableEdit = true">
              Edit
            </b-button>
            <b-button variant="danger" v-on:click="$emit('delete-bite', id)">
              Delete
            </b-button>
          </b-button-group>
        </div>
      </b-col>
    </b-row>
    <!-- Bite Content -->
    <b-row class="mt-4" v-if="enableEdit === false">
      <b-col>
        <p>{{ text }}</p>
      </b-col>
    </b-row>
    <b-row class="mt-4" v-else>
      <b-col>
        <b-form-textarea class="w-100" v-model='newContent'></b-form-textarea>
        <b-button-group class="my-3">
            <b-button variant="primary" v-on:click="$emit('edit-bite', id, newContent); enableEdit = false">
              Accept
            </b-button>
            <b-button v-on:click="enableEdit = false">
              Cancel
            </b-button>
          </b-button-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Bite',
  props: {
    text: String,
    date: Object,
    id: Number
  },
  data () {
    return {
      relativeDate: moment(this.date).fromNow(),
      enableEdit: false,
      newContent: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
