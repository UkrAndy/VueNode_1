<template>
  <div>
    <button @click="loadProducts">Load</button><br />
    <table>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.title }}</td>
        <td>{{ product.price }}</td>
        <td>
          <button>Edit</button>
          <button>Delete</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "ProductTable",

  data() {
    return {
      products: []
    };
  },

  methods: {
    loadProducts() {
      this.products = store.readProducts();
    }
  }
};
</script>

<style lang="scss" scoped></style>
