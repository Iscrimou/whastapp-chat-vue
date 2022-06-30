<template>
  <div>
    <ChatList :chats="chats" @activateModal="activateModal" />
    <ChatForm :input="input" :messages="messages" @sendMessage="sendMessage" />
  </div>
</template>


<script>
import ChatList from '../components/ChatList.vue'
import ChatForm from '../components/ChatForm.vue'

export default {
  name: 'Chat',
  
  components: {
    ChatList,
    ChatForm
  },

  data() {
    return {
      chats: [],
      input: [],
      messages: []
    }
  }
}
</script>