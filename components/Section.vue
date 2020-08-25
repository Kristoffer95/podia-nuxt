<template>
    <div class="border mt-5 p-5">
      <div class="flex justify-between items-center">
        <span class="block text-lg font-bold">{{ section.name | capitalize }}</span>
        <span class="rounded-md shadow-sm relative">
          <button 
            class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 focus:outline-none" 
            type="button" id="options-menu" aria-haspopup="true" aria-expanded="true" 
            @click="showOption = !showOption">
            Add content
            <svg class="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>

          <transition name="fade" >
            <div v-if="showOption" v-on-clickaway="hideOptions" class="absolute z-10 bg-white border flex flex-col w-32 right-0 py-2 transition ease-in-out duration-150">
              <span class="py-2 px-4 cursor-pointer hover:bg-green-800 hover:text-white"
                v-for="(option, index) in options" :key="index"
                @click="optionAction(option)">
                {{ option }}
              </span>
            </div>
          </transition>
        </span>
      </div>
      <span>{{ section.description | capitalize }}</span>
  </div>  
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
  mixins: [ clickaway ],
  props: {
    section: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showOption: false,
      options: ["Add Files", "Add Link", "Others"]
    }
  },
  
  computed: {},
  methods: {
    hideOptions() {
      this.showOption = false
    },
    optionAction(option) {
      if(option !== 'Add Files') {
        return alert('No function yet')
      }
      this.$nuxt.$emit('show-modal', 'add-content')
      this.hideOptions()
    }
  },
  filters: {
    capitalize(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>


