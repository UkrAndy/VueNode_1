<template>
  <div>
    <b-loading :is-full-page="true" :active.sync="isLoading"></b-loading>

    <b-select v-model="viewState">
      <option v-for="option in viewStates" :value="option" :key="option">{{
        option
      }}</option>
    </b-select>

    <products-cards v-if="viewState == 'cards'" />
    <products-table v-else />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import ProductsTable from "./c/ProductsTable";
import ProductsCards from "./c/ProductsCards";

export default {
  name: "Home",
  components: {
    ProductsTable,
    ProductsCards,
  },

  data() {
    return {
      viewStates: ["cards", "table"],
      viewState: "table",
    };
  },

  computed: {
    ...mapGetters("products", ["isLoading", 'isError']),
  },

  watch: {
    isError(newValue) {
      if(newValue){
        this.danger()
      }
    }
  },

  methods: {
    ...mapActions("cart", ["loadCart"]),
    ...mapActions("products", ["loadProductList"]),
    danger() {
      const notif = this.$buefy.notification.open({
        duration: 5000,
        message: `Error`,
        position: "is-top-right",
        type: "is-danger",
        hasIcon: true,
      });
      notif.$on("close", () => {
        this.$buefy.notification.open("Custom notification closed!");
      });
    },
  },

  mounted() {
    this.loadProductList();
    this.loadCart();
  },
};
</script>

<style lang="scss" scoped></style>
