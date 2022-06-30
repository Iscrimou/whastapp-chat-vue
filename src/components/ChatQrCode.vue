<template>
  <div>
    <h1>QR Code Component</h1>
    <VueQrcode v-if="qrcode" :value="qrcode"/>
  </div>
</template>

<script>
import VueQrcode from 'vue-qrcode'

export default {
  name: 'ChatQrCode',

  props: {
    qrcode: null
  },

  components: {
    VueQrcode
  },

  data() {
    return {

    }
  },

  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
