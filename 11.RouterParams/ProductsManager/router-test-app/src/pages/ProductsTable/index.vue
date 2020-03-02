<template>
  <div>
    <!-- <button @click="loadProducts">Load</button><br /> -->
    <table>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.title }}</td>
        <td>{{ product.price }}</td>
        <td>
          <!-- <button @click="onEdit(product)">Edit</button> -->
          <router-link :to="`/edit/${product.id}`">Edit</router-link>
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
    // loadProducts() {
    //   console.log(this.$route);
    //   this.products = store.readProducts();
    // },
  },

  created() {
    this.products = store.readProducts();
  }
};
</script>

<style lang="scss" scoped></style>
