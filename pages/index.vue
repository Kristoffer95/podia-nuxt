<template>
  <div class="index">
    <div class="mt-10">
      <div class="flex justify-between items-end">
        <h1 class="text-3xl font-semibold">Product</h1>

        <span class="text-xl font-semibold cursor-pointer button--green select-none"
          @click="createProduct">
          Create Product
        </span>
      </div>

      <div class="w-full border mt-10 flex flex-col pl-5">
        <span class="text-lg font-semibold">Product list</span>
        <span class="cursor-pointer my-2 font-semibold" :class="{'mt-10': index === 0}"
          v-for="(product, index) in products" :key="index">
          <nuxt-link 
            :to="`/product/${product.name}`">
            * {{ product.name | capitalize }}
          </nuxt-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState({
      products: state => state.product.products
    })
  },
  methods: {
    createProduct() {
      $nuxt.$emit('show-modal', 'create-product')
    }
  },
  mounted() {
    this.$nuxt.$on('create-product', (value) => {
      if(value) {
        this.products.push(value)
      }
    })
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
