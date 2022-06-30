<template>
  <div>
    <header class="bg-success bg-gradient p-2 text-white bg-opacity-75 d-flex justify-content-md-between pb-3 ">
      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" class="nav-link px-2 link-dark">Home</a></li>
        <li><a href="#" class="nav-link px-2 link-dark" @click="modalChat">Chat</a></li>
        <li><a href="#" class="nav-link px-2 link-dark" @click="modalQrCode">QrCode</a></li>
      </ul>
      
      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-primary me-2">Login</button>
        <button type="button" class="btn btn-primary">Sign-up</button>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',

  data() {
    return {     
    }
  },

  methods: {
    modalQrCode() {
      this.$emit('modalQrCode', true);
    },
    
    modalChat() {
      this.$emit('modalChat', true);
    }
  }
}
</script>
