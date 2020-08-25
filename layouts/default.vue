<template>
  <div class="w-screen h-screen relative">
    <Header class="container mx-auto" />

    <Nuxt class="container mx-auto"/>

    <transition name="fade">
      <div v-if="showModal" class="w-screen h-screen bg-gray-500 bg-opacity-50 absolute top-0 flex justify-center items-center">
        <component 
          :is="modalName" 
          v-on-clickaway="hideModal"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: 'app',
  mixins: [ clickaway ],
  data() {
    return {
      showModal: false,
      modalName: ''
    }
  },
  components: {
    Header: () => import(`~/components/Header.vue`),
    CreateProduct: () => import(`~/components/CreateProduct.vue`),
    AddSection: () => import(`~/components/AddSection.vue`),
    AddContent: () => import(`~/components/AddContent.vue`),
  },
  methods: {
    modalEvent(name, status) {
      this.modalName = name
      this.showModal = status;
    },
    hideModal() {
      this.modalEvent('', false)
    }
  },
  mounted() {
    this.$nuxt.$on('show-modal', (value) => {
      if(value) {
        return this.modalEvent(value, true)
      }
      this.modalEvent(value, false)
    })
  },
  beforeDestroy() {
    this.$nuxt.$off('show-modal')
  }
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  max-width: 1200px;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
