export const state = () => ({
  products: []
})

export const getters = {
  // sectionOfProduct: (state) => {
  //   // return {
  //   //   name: 'test'
  //   // }
  //   state.products.forEach(product => {
  //     if(product.name === this.$router.currentRoute.params.product) {
  //       return product
  //     }
  //     return {
  //       name: 'test'
  //     }
  //   });
  // }
}

export const mutations = {
  ADD_PRODUCT(state, data) {
    state.products.push(data)
  },
  ADD_SECTION(state, data) {
    state.products.forEach((product, index) => {
      if(product.name === this.$router.currentRoute.params.product) {
        return state.products[index].section.push(data)
      }
    });
  }
}