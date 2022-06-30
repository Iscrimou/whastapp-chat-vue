<template>
  <div class="d-flex flex-row">
   
  </div>
</template>

<script>

import { io } from "socket.io-client"

export default {
  name: 'Home',

  components: {
  },

  data() {
    return {
      socket: null,
      modalActive: true,
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