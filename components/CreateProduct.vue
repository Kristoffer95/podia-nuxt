<template>
  <div class="w-full  max-w-xs">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-10 mb-4" @submit.prevent="save">
      <div class="flex justify-center pb-5">
        <h1 class="text-gray-700 text-xl font-bold">Create new product</h1>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="product-name">
          Name
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          id="product-name" 
          v-model="productName"
          type="text" 
          placeholder="Product Name">
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
      productName: ''
    }
  },
  computed: {
    ...mapState({
      products: state => state.product.products
    })
  },
  methods: {
    save() {
      if(!this.productName) {
        return alert('Field must not be empty')
      }
      this.products.forEach(product => {
        if(product.name === this.productName) {
          throw alert('Product name already exist')
        }
      });

      this.$store.commit('product/ADD_PRODUCT', { name: this.productName, section: [] })
      this.$nuxt.$emit('show-modal') //hide
      // $nuxt.$emit('create-product', { name: this.productName })
    }
  }
}
</script>

<style scoped>
</style>