<template>
  <div class="bite border-bottom p-3">
    <!-- Top Pane -->
    <b-row>
      <b-col>
        <div class="d-flex justify-content-between">
          <h6>{{ relativeDate }}</h6>
          <b-button-group>
            <b-button variant="primary">
              Edit
            </b-button>
            <b-button variant="danger">
              Delete
            </b-button>
          </b-button-group>
        </div>
      </b-col>
    </b-row>
    <!-- Bite Content -->
    <b-row class="mt-4">
      <b-col>
        <p>{{ text }}</p>
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
    date: Date,
    id: Number
  },
  data () {
    return {
      relativeDate: moment(this.date).fromNow()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
