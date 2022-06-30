<template>
  <div class="about">
    <ChatQrCode :qrcode="qrcode" />
  </div>
</template>

<script>
import { io } from "socket.io-client"
import ChatQrCode from '../components/ChatQrCode.vue'

export default {
  name: 'QRCode',

  components: {
    ChatQrCode
  },

  data() {
    return {
      socket: null,
      qrcode: null
    }
  },

  mounted () {
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
  }
}
</script>
