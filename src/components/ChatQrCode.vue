<template>
  <div>
    <h1>QR Code Page</h1>
    <VueQrcode v-if="qrcode" :value="qrcode"/>
  </div>
</template>

<script>
import VueQrcode from 'vue-qrcode'

export default {
  name: 'ChatQrCode',

  props: {
    input: null,
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
