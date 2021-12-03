<template>
<div class="admin">
  <h1>The Admin Page!</h1>

  <div class="heading">
  <h2>Review Requests</h2>
  <h3>Here review your patron petitions and accept or reject them. You may also suggest improvements.</h3>
</div>
<div class="edit">
  <div class="form">
    <div class="suggestions" v-if="suggestions.length > 0">
      <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectItem(s)">{{s.sign}}
      </div>
    </div>
  </div>
  <div class="upload" v-if="findItem">
        <input v-model="findItem.date" placeholder="Date">
        <input v-model="findItem.sign" placeholder="Sign">
        <input v-model="findItem.color" placeholder="Color">
        <input v-model="findItem.lucky_number" placeholder="Lucky Number">
        <input v-model="findItem.lucky_time" placeholder="Lucky Time">
        <p></p>
        <textarea v-model="findItem.description" placeholder="Description"></textarea>
        <p></p>
      </div>
      <div class="actions" v-if="findItem">
        <button class="acceptButton" @click="deleteItem(findItem)">Accept</button>
        <button class="rejectButton" @click="deleteItem(findItem)">Reject</button>
        <button class="modifyButton" @click="editItem(findItem)">Modify</button>
      </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
props: ["value"],
data() {
  return {
    date: this.value,
    sign: this.value,
    description: this.value,
    color: this.value,
    number: this.value,
    time: this.value,
    items: [],
    findTitle: "",
    findItem: null
  }
},
model: {
  prop: 'value',
  event: 'change'
},
computed: {
  suggestions() {
    let items = this.items.filter(item => item.sign.toLowerCase().startsWith(this.findTitle.toLowerCase()));
    return items.sort((a, b) => a.sign > b.sign);
  }
},
created() {
  this.getItems();
},
methods: {
  selectItem(item) {
    console.log(item);
    this.findItem = item;
  },
  async deleteItem(item){
    console.log("Ooo");
    try {
    let r2 = await axios.delete('/api/items/' + item._id);
    console.log(r2);
    this.getItems();
    } catch (error) {
      console.log(error);
    }
  },
  async editItem(item){
    console.log(item.date);
    try {
    let r2 = await axios.put('/api/items/' + item._id, {
      date: item.date,
      sign: item.sign,
      color: item.color,
      lucky_number: item.lucky_number,
      lucky_time: item.lucky_time,
      description: item.description,
    });
    this.findItem = null;
    this.getItems();
    console.log(r2);
    } catch (error) {
      console.log(error);
    }
  },
  async getItems() {
    try{
      let response = await axios.get("/api/items");
      this.items = response.data;
      return true;
    } catch (error) {
      console.log(error);
    }
  }
}
}
</script>

<style scoped>
/* Suggestions */
.suggestions {
  width: 200px;
  margin: auto;
}
.suggestion {
  min-height: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  color: black;
}
.suggestion:hover {
  background-color: #B697F4;
  color: #fff;
}
button {
  color: black;
}
.acceptButton:hover {
  background-color: #a4ffad;
}
.rejectButton:hover {
  background-color: #ffa4a4;
}
.modifyButton:hover {
  background-color: #b47cff;
}
</style>
