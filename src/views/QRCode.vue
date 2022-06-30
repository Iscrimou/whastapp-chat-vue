<template>
  <div class="about">
    <ChatQrCode :qrcode="qrcode" />
  </div>
</template>

<script>
import ChatQrCode from '../components/ChatQrCode.vue'

export default {
  name: 'QRCode',

  components: {
    ChatQrCode
  },

  data() {
    return {
    }
  }
}
</script>
