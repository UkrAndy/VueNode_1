<template>
  <div class="columns">
    <div class="column container has-margin-left-20">
      Home
      <b-button type="is-success" expanded @click="onMyClick">Success</b-button>
    </div>
    <div class="column">
      column2
    </div>
    <div class="column">
      column3
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",

  methods: {
    onMyClick() {
      this.$buefy.dialog.alert("Hi!");
    }
  }
};
</script>

<style lang="scss" scoped></style>
