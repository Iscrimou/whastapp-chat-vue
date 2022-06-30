<template>
  <div>
    <a href="/" class="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom bg-secondary bg-opacity-75">
      <span class="fs-5 fw-semibold">Lista de chats</span>
    </a>
    <div v-for="chat in chats" :key="chat.id" class="list-group list-group-flush border-bottom scrollarea">
      <a class="list-group-item list-group-item-button py-3 lh-tight" aria-current="true" @click="log(chat)">
        <div class="d-flex w-100 align-items-center justify-content-between">
          <strong class="mb-1">{{ chat.name }}</strong>
          <small class="text-muted">{{ new Date(chat.timestamp*1000).toLocaleDateString("pt-BR") }}</small>
        </div>
        <!-- <div class="col-10 mb-1 small">{{item.chats[0].content}}</div> -->
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatList',

  props: {
    chats: null
  },

  data() {
    return {

    }
  },

  methods: {
    log(item) {
      this.$emit('activateModal', item)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
