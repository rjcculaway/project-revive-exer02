<template>
  <div class="home col">
    <div class="my-3" id="bite-area">
      <textarea class="w-100 p-2 my-1 mx-n1 border-0" id="bite-input" placeholder="What have you been eating?"></textarea>
      <b-button pill class="primary my-1" type="submit" size="lg" variant="primary">Bite!</b-button>
    </div>
    <div class="bits-list border-top">
      <Bite></Bite>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Bite from '@/components/Bite.vue'

export default {
  name: 'Home',
  components: {
    Bite
  }
}
</script>
