<template>
  <div>
    <messages-viewer :mgsList="msgListData" @like="addLike" />
    <new-message-form @add-msg="onAddMsg" />
    {{ msgListData }}
  </div>
</template>

<script>
import msgListData from "@/constants/msgList.js";
import MessagesViewer from "./c/MessagesViewer";
import NewMessageForm from "./c/NewMessageForm";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "Messanger",

  components: {
    MessagesViewer,
    NewMessageForm
  },

  data() {
    return {
      msgListData
    };
  },

  methods: {
    onAddMsg(newMsg) {
      this.msgListData.push({
        id: uuidv4(),
        text: newMsg,
        likesCount: 0
      });
    },
    addLike(id) {
      const index = this.msgListData.findIndex(item => item.id === id);
      this.msgListData[index].likesCount++;
      this.msgListData = [...this.msgListData];
      //   Vue.set()
    }
  }
};
</script>

<style lang="scss" scoped></style>
