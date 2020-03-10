<template>
  <div>
    <div class="columns is-multiline">
      <div class="column is-half">
        <b-field horizontal label="Name">
          <b-input name="name" placeholder="Name"></b-input>
        </b-field>
      </div>
      <div class="column is-half">
        <b-field horizontal label="Name">
          <b-input name="name" placeholder="Name"></b-input>
        </b-field>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <b-field horizontal label="Password">
          <b-input name="name" placeholder="Name" expanded></b-input>
        </b-field>
      </div>
      <div class="column">
        <b-field horizontal label="Confirm">
          <b-input name="name" placeholder="Name" expanded></b-input>
        </b-field>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddForm"
};
</script>

<style lang="scss" scoped></style>
