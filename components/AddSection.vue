<template>
  <div class="w-full max-w-xs">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="save">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="section">
          Section Name
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          v-model="sectionName"
          id="section" 
          type="text" 
          placeholder="Section name">
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" >
          Description
        </label>
        <textarea 
          v-model="description"
          id="w3review" name="w3review" rows="4" cols="26" class="border" />
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Save
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      sectionName: '',
      description: ''
    }
  },
  computed: {},
  methods: {
    save() {
      if(!this.sectionName) return
      this.$store.commit('product/ADD_SECTION', { name: this.sectionName, description: this.description })
      this.$nuxt.$emit('show-modal')
    }
  }
}
</script>

<style scoped>
</style>