<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col>
          <b-nav class="border-bottom">
            <h1>Bites</h1>
          </b-nav>
        </b-col>
      </b-row>
      <b-row>
        <router-view/>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
</style>

<script>
export default {
}
</script>
