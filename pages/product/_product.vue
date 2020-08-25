<template>
  <div class="flex flex-col">
    <div class="mt-10">
      <h1 class="text-2xl font-semibold">Product / {{ $route.params.product }}</h1>
    </div>

    <div class="w-full border flex flex-col items-center mt-5 pb-10">
      <span class="text-lg font-bold">Add your content</span>
      <div class="mt-10">
        <span class="text-md font-semibold cursor-pointer button--green select-none"
          @click="addSection">
          Add section
        </span>
        <span class="text-md font-semibold cursor-pointer button--green select-none"
          @click="noAction">
          Create Product
        </span>
        <span class="text-md font-semibold cursor-pointer button--green select-none"
          @click="noAction">
          Create Product
        </span>
        <span class="text-md font-semibold cursor-pointer button--green select-none"
          @click="noAction">
          Create Product
        </span>
      </div>
    </div>
    
    <div class="border">
      <h2 class="text-xl font-bold">Section</h2>
      <Section :section="section"
        v-for="(section, index) in sections" :key="index"/>
    </div>
    
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      sections: []
    }
  },
  components: {
    Section: () => import(`~/components/Section.vue`)
  },
  computed: {
    ...mapState({
      products: state => state.product.products
    })
  },
  methods: {
    addSection() {
      this.$nuxt.$emit('show-modal', 'add-section')
    },
    noAction() {
      alert('no actions yet')
    }
  },
  mounted() {
    this.products.forEach(product => {
      if(product.name === this.$router.currentRoute.params.product) {
        this.sections = product.section
        return
      }
    });
  }
}
</script>