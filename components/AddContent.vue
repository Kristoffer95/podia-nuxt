<template>
  <div class="w-full max-w-lg">
    <div class="flex items-center justify-center text-center" id="app">
      <div class="p-12 bg-gray-100" @dragover="dragover" @dragleave="dragleave" @drop="drop">
        <input type="file" multiple name="fields[assetsFieldHandle][]" id="assetsFieldHandle" 
          class="w-px h-px opacity-0 overflow-hidden absolute" @change="onChange" ref="file" accept=".pdf,.jpg,.jpeg,.png" />

        <label for="assetsFieldHandle" class="block cursor-pointer">
          <div>
            You can drop files in here or <span class="underline">click here</span> to upload a file
          </div>
        </label>
        <ul class="mt-4" v-if="this.filelist.length" v-cloak>
          <li class="text-sm p-1 text-center" v-for="(file, index) in filelist" :key="index">
            {{file.name}}
            <button type="button" @click="remove(filelist.indexOf(file))" title="Remove file">x</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      filelist: [] // Store our uploaded files
    }
  },
  methods: {
    onChange() {
      // this.filelist = [...this.$refs.file.files]; // NOTE: single file
      this.filelist.push(...this.$refs.file.files);  // NOTE: multiple files
    },
    remove(i) {
      this.filelist.splice(i, 1);
    },
    dragover(event) {
      event.preventDefault();
      // Add some visual fluff to show the user can drop its files
      if (!event.currentTarget.classList.contains('bg-green-300')) {
        event.currentTarget.classList.remove('bg-gray-100');
        event.currentTarget.classList.add('bg-green-300');
      }
    },
    dragleave(event) {
      // Clean up
      event.currentTarget.classList.add('bg-gray-100');
      event.currentTarget.classList.remove('bg-green-300');
    },
    drop(event) {
      event.preventDefault();
      this.$refs.file.files = event.dataTransfer.files;
      this.onChange(); // Trigger the onChange event manually
      // Clean up
      event.currentTarget.classList.add('bg-gray-100');
      event.currentTarget.classList.remove('bg-green-300');
    }
  }
}
</script>

<style scoped>
</style>
