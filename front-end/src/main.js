import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import mock from './mock-data.js'

let data = {
  api: mock,
  sign: "",
  day: "",
  current: {
    color: "",
    compatibility: "",
    current_date: "",
    date_range: "",
    lucky_number: "",
    lucky_time: "",
    description: "",
    mood: "",
  },
  content: "",
  responses: [
    "Don't count on it",
    "No",
    "It is certain",
    "Concentrate and ask again",
    "Are you sure you want that?",
    "Try again later",
    "Perhaps",
    "We'll think about it",
    "The line is busy",
    "We're on our break",
    "Sounds good to Us",
    "Signs point to yes",
    "Why not? Should be fun!",
    "Sure but your loss"

  ]
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
