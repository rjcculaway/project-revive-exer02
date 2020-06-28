<template>
  <div class="bite border-bottom p-3">
    <b-row>
      <b-col>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p>{{ text }}</p>
      </b-col>
      <b-col>
        <h6>{{ date }}</h6>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Bite',
  props: {
    text: String,
    date: Date
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
