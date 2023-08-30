<template>
  <v-container>
    <v-card title="Title" subtitle="Subtitle">
      <v-card-text>
        <v-btn
          color="primary"
        >
          Button
        </v-btn>
        <v-btn
          color="secondary"
        >
          Button
        </v-btn>
        <v-spacer></v-spacer>
        <v-progress-circular
          :size="100"
          :width="15"
          :model-value="temp1"
          color="primary"
        >
          {{ temp1 }}
        </v-progress-circular>
        <v-progress-circular
          :size="100"
          :width="15"
          :model-value="temp2"
          color="teal"
        >
          {{ temp2 }}
        </v-progress-circular>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  setup() {
    useHead({
      script: [
        '/js/mqtt.min.js',
      ],
    })
  },
  data: () => ({
    temp1: 0,
    temp2: 0,
  }),
  created() {
    if (!process.client) {
      return
    }
    this.client = mqtt.connect('ws://broker.emqx.io:8083/mqtt', {
      protocol: 'ws',
    })
    this.client.on('connect', () => {
      console.log('on client connect')
      this.client.subscribe('temp1')
      this.client.subscribe('temp2')
    })
    this.client.on('message', (topic, message) => {
      if (topic === 'temp1') {
        console.log('temp1')
        // message is Buffer
        console.log('GOT:', message.toString())
        this.msg_t = message.toString()
        console.log('data=', this.msg_t)

        // client.end()
      }
    })
  },
}
</script>
