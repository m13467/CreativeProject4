<template>
  <div>
    <h1 id="h_title">Get your horoscope!</h1>

    <div id="intr">
    <div id='submit_form'>
      <div>
      <form id='sign_choice'>
        <h2>Select your sign</h2>
        <input type='radio' id='Aries' name='sign' value='aries' v-model="selectedSign" @change="changeSign">
        <label for='Aries'>Aries</label><br>
        <input type='radio' id='Taurus' name='sign' value='taurus' v-model="selectedSign" @change="changeSign">
        <label for='Taurus'>Taurus</label><br>
        <input type='radio' id='Gemini' name='sign' value='gemini' v-model="selectedSign" @change="changeSign">
        <label for='Gemini'>Gemini</label><br>
        <input type='radio' id='Cancer' name='sign' value='cancer' v-model="selectedSign" @change="changeSign">
        <label for='Cancer'>Cancer</label><br>
        <input type='radio' id='Leo' name='sign' value='leo' v-model="selectedSign" @change="changeSign">
        <label for='Leo'>Leo</label><br>
        <input type='radio' id='Virgo' name='sign' value='virgo' v-model="selectedSign" @change="changeSign">
        <label for='Virgo'>Virgo</label><br>
        <input type='radio' id='Libra' name='sign' value='libra' v-model="selectedSign" @change="changeSign">
        <label for='Libra'>Libra</label><br>
        <input type='radio' id='Scorpio' name='sign' value='scorpio' v-model="selectedSign" @change="changeSign">
        <label for='Scorpio'>Scorpio</label><br>
        <input type='radio' id='Sagittarius' name='sign' value='sagittarius' v-model="selectedSign" @change="changeSign">
        <label for='Sagittarius'>Sagittarius</label><br>
        <input type='radio' id='Capricorn' name='sign' value='capricorn' v-model="selectedSign" @change="changeSign">
        <label for='Capricorn'>Capricorn</label><br>
        <input type='radio' id='Aquarius' name='sign' value='aquarius' v-model="selectedSign" @change="changeSign">
        <label for='Aquarius'>Aquarius</label><br>
        <input type='radio' id='Pisces' name='sign' value='pisces' v-model="selectedSign" @change="changeSign">
        <label for='Pisces'>Pisces</label><br>
      </form>
    </div>
        <br>
        <div>
        <form id='day_choice'>
        <h2>Select the day</h2>
        <input type='radio' id='Yesterday' name='day' value='yesterday' v-model="selected" @change="changeDay">
        <label for='Yesterday'>Yesterday</label><br>
        <input type='radio' id='Today' name='day' value='today' v-model="selected" @change="changeDay">
        <label for='Today'>Today</label><br>
        <input type='radio' id='Tomorrow' name='day' value='tomorrow' v-model="selected" @change="changeDay">
        <label for='Tomorrow'>Tomorrow</label><br><br>
      </form>
    </div>
    </div>
    <router-link to="/submit"><input id="submit_button" type="submit" value="Submit" v-on:click="horoscope()"></router-link>
      <div id="signResults">
      </div>
    </div>

  </div>
</template>

<script>
//src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js" integrity="sha256-4iQZ6BVL4qNKlQ27TExEhBN1HFPvAvAMbFavKKosSWQ=" crossorigin="anonymous";
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    //HelloWorld
  },
  props: ["value"],
  data() {
    return {
      selected: this.value,
      selectedSign: this.value
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  methods: {
    changeDay() {
      this.$root.$data.day = this.selected
    },
    changeSign() {
      this.$root.$data.sign = this.selectedSign
    },
    horoscope() {
        var day1 = this.$root.$data.day
        var sign1 = this.$root.$data.sign
        this.$root.$data.current = this.$root.$data.api.filter(function(val) {
            if (val.day.toLowerCase() == day1.toLowerCase() && val.sign.toLowerCase() == sign1.toLowerCase()){
              console.log("Made it here")
              return val
            }
        })
        console.log(this.$root.$data.current)
      },
    },
  }

</script>

<style>
body{
  background-image: url("/images/const..jpg");
  color: #EFEFEF;
}

h1 {
  text-align: center;
  font-size: 10vw;
  font-family: Garamond;
  border: #5a3e64;
  border-style: double;
  color: #EFEFEF;
}


h2 {
    text-decoration: underline;
}

#submit_form{
  margin: auto;
  color: #EFEFEF;
}

#intr{
  display: flex;
  flex-direction: column
}

#signResults {
  text-align: center;
}

footer{
  margin-top: 10%;
  text-align:center;
}

#fimage{
  width: 10%;
}

#submit_button{
  width: auto;
  margin: auto;

}
/*Everything that isnt a phone*/
/*@media only screen and (min-width: 500px){*/

#intr{
  display: flex;
  justify-content: center;
  flex-direction: column;
}

#submit_form{
  width: 75%;
  display: flex;
  justify-content:space-evenly;
  margin-bottom: 10%;
  text-size: 4vw;
}

#submit_button{
  width: auto;
  padding: 3vw;
  margin-bottom: 5%;
  font-size: 2vw;
  color: #000718;
  background-color: #FFF8E7;
}

#fimage{
  width: 5%;
}

form {
  font-size: 3vw;
}

h2 {
  font-size: 5vw;
}

p {
  font-size: 3vw;
}
</style>
