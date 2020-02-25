<template>
  <div>
    <message-row
      v-for="msgItem in mgsList"
      :key="msgItem.id"
      :msg="msgItem"
      @like="$emit('like', $event)"
      @dislike="$emit('dislike', $event)"
    />
  </div>
</template>

<script>
import MessageRow from "./c/MessageRow";

export default {
  name: "MessagesViewer",

  components: {
    MessageRow
  },

  props: {
    mgsList: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
