<template>
  <div>
  <h1>Your Horoscope</h1>
  <div :style="{ backgroundImage: 'url(images/'+this.$root.$data.sign+'.svg)'}">
  <ul id="aztro">
    <li>Current Date: {{this.$root.$data.current[0].current_date}}</li>
    <li>Compatibility: {{this.$root.$data.current[0].compatibility}}</li>
    <li>Lucky Number: {{this.$root.$data.current[0].lucky_number}}</li>
    <li>Lucky Time: {{this.$root.$data.current[0].lucky_time}}</li>
    <li>Color: {{this.$root.$data.current[0].color}}</li>
    <li>Date Range: {{this.$root.$data.current[0].date_range}}</li>
    <li>Mood: {{this.$root.$data.current[0].mood}}</li>
    <li>Description: {{this.$root.$data.current[0].description}}</li>
</ul>
</div>
</div>
</template>

<script>

</script>

<style>
body{
  background-image: url("/images/const..jpg");
  color: #EFEFEF;
}

*{
  color: #EFEFEF;
  font-family: papyrus;
}

li {
  font-size: 3vw;
}

#aztro {
  list-style-type: none;
}

h1 {
  text-align: center;
  font-size: 10vw;
  font-family: papyrus;
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
