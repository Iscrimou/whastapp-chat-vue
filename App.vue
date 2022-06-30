<template>
  <Header @modalQrCode="modalQrCode ? modalQrCode = false : modalQrCode = true" @modalChat="modalActive ? modalActive = false : modalActive = true" />
  <div class="d-flex flex-row">
    <div v-if="modalActive" class="d-flex flex-row flex-fill">
      <div class="flex-fill"><ChatList :chats="chats" @activateModal="activateModal" /></div>
      <div v-if="messages.length" class="flex-fill"><ChatForm :input="input" :messages="messages" @sendMessage="sendMessage" /></div>
    </div>
    <div v-if="modalQrCode" class="flex-fill">
      <ChatQrCode :qrcode="qrcode" />
      <button class="btn btn-primary btn-sm ms-1" id="btn-chats" @click="getChats">Get chats</button>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import ChatList from './components/ChatList.vue'
import ChatForm from './components/ChatForm.vue'
import ChatQrCode from './components/ChatQrCode.vue'
import { io } from "socket.io-client"

export default {
  name: 'App',
  components: {
    Header,
    ChatList,
    ChatForm,
    ChatQrCode
  },

  data() {
    return {
      socket: null,
      modalActive: false,
      modalQrCode: false,
      input: [],
      messages: [],
      chats: [],
      qrcode: null
    }
  },

  methods: {
    activateModal(item) {
      this.socket.emit('getChatId', item.id._serialized)
      this.input = item
    },

    sendMessage(input) {
      this.socket.emit('message', input);
      this.messages.push({
        fromMe: true,
        body: input.message
      });
    },

    getChats() {
      this.socket.emit('getChats');
    }
  },

  mounted() {
    // const socket = io("http://localhost:3000");
    this.socket = io("http://localhost:3000");

    this.socket.on("connect", () => {
      console.log('socket: ', this.socket.id);
    });

    this.socket.on("qrcode", (qr) => {
      this.qrcode = null;
      this.qrcode = qr;
      setTimeout(() => {
        this.qrcode = null;
      }, 19000)
    });

    this.socket.on("chat", (chat) => {
      if (!chat.isGroup) {
        this.chats.push(chat);
      }
    });

    this.socket.on("messageReceived", (chat) => {
      if (!chat.isGroup) {
        this.input = chat
        this.socket.emit('getChatId', chat.id._serialized)
      }
    });

    this.socket.on("specificChat", (specificChat) => {
      this.messages = specificChat;
      this.modalActive = true;
      console.log("specificChat: ", specificChat);
    })
  },
}
</script>