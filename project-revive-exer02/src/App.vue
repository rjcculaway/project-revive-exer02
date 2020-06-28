<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col cols="6">
          <b-nav class="border-bottom py-3">
            <h1>Bites!</h1>
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
