<template>
    <div class="container">
      <div class="card border-dark">
        <div class="card-header border-dark">{{ input.name }}</div>
        <div class="card-body">
          <ul v-if="messages.length" class="chat">
            <li class="left clearfix" v-for="message in messages" :key="message.id">
              <div class="clearfix">
                <div class="header">
                  <strong>
                    {{ (message.fromMe) ? 'Eu' : input.name }}
                  </strong>
                </div>
                <p>
                  {{ message.body }}
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="card-footer border-dark">
          <div class="input-group">
            <input
              id="btn-input"
              type="text"
              name="message"
              class="form-control input-sm"
              placeholder="Type your message here..."
              v-model="newMessage"
              @keyup.enter="sendMessage"
            />
            <button class="btn btn-primary btn-sm" id="btn-chat" @click="sendMessage"><i class="bi bi-send"></i></button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ChatForm',
  props: {
    input: null,
    messages: null
  },
  data() {
    return {
      newMessage: ''
    }
  },

  methods: {
    sendMessage() {
      console.log(this.newMessage);
      const input = {
        contact: this.input.id._serialized,
        message: this.newMessage
      };
      this.$emit('sendMessage', input);
      this.newMessage = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
