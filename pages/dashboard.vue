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
        <v-progress-linear
          v-model="DHT.temp"
          color="blue-grey"
          height="25"
        >
          <template #default="{ value }">
            <strong>{{ Math.ceil(value) }}%</strong>
          </template>
        </v-progress-linear>
        <v-progress-linear
          v-model="DHT.humi"
          color="blue-grey"
          height="25"
        >
          <template #default="{ value }">
            <strong>{{ Math.ceil(value) }}%</strong>
          </template>
        </v-progress-linear>
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
    DHT: {
      temp: 0,
      humi: 0,
    },
  }),
  beforeMount() {
    this.client = mqtt.connect('ws://broker.emqx.io:8083/mqtt', {
      protocol: 'ws',
    })
    this.client.on('connect', () => {
      console.log('on client connect')
      this.client.subscribe('temp1')
      this.client.subscribe('temp2')
      this.client.subscribe('joseph/DHT/temp')
      this.client.subscribe('joseph/DHT/humi')
    })
    this.client.on('message', (topic, message) => {
      if (topic === 'joseph/DHT/temp') {
        console.log('temp1')
        // message is Buffer
        console.log('GOT:', message.toString())
        this.msg_t = message.toString()
        console.log('data=', this.msg_t)
        this.DHT.temp = +message

        // client.end()
      } else if (topic === 'joseph/DHT/humi') {
        this.DHT.humi = +message
      }
    })
  },
}
</script>
