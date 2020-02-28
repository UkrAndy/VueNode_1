<template>
  <div>
    <label>
      Title
      <input type="text" v-model="title" /> </label
    ><br />
    <label>
      Price
      <input type="text" v-model="price" />
    </label>
    <br />
    <button @click="addProduct">Add</button>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "ProductEditor",

  data() {
    return {
      title: null,
      price: null
    };
  },

  methods: {
    addProduct() {
      store.addProduct(this.title, this.price);
    }
  }
};
</script>

<style lang="scss" scoped></style>
