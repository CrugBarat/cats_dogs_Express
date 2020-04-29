<template lang="html">

<div class="dog-cat-form">
<form>
<fieldset>
<legend> Update an animal!</legend>

<label for="type">Type</label>
<select name="type" v-model="type">
	<option value="" disabled>Choose...</option>
	<option value="dogs">Dog</option>
	<option value="cats">Cat</option>
</select>

<label for="animalName">Animal</label>
<select name="animalName" v-model="animalName">
	<option v-for="animal in getAnimals" :value="animal">{{animal.name}}</option>
</select>

<legend> New Details:</legend>
<label for="name">Name:</label>
<input type="text" name="name" v-model="name" />
<label for="breed">Breed:</label>
<input type="text" name="breed" v-model="breed" />
</fieldset>

<input type="button" @click="handleUpdate" value="Update"/>

</form>
</div>
</template>

<script>
import { eventBus } from '../main';
export default {
	name: "dog-cat-update",
	props: ['dogs', 'cats'],
	data(){
		return {
			name: "",
			breed: "",
			type: "",
			animalName: ""
		}
	},
	methods: {
		handleUpdate(){
			const url = `http://localhost:3000/api/${this.type}/${this.getAnimalIndex()}`;

			const payload = {
				name: this.name,
				breed: this.breed
			};

			fetch(url, {
				method: 'PUT',
				body: JSON.stringify(payload),
				headers: { 'Content-Type': 'application/json' }
			}).then(response => {
				eventBus.$emit("refresh-data", this.type);
				this.name = this.breed = this.type = "";
			});
		},

		getAnimalIndex() {
			if (this.type === 'cats') {
				return this.cats.indexOf(this.animalName)
			} else {
				return this.dogs.indexOf(this.animalName)
			}
		}
	},
	computed: {
		getAnimals() {
			if (this.type === 'cats') {
					return this.cats
			} else {
				return this.dogs
			}
		}
	}
}
</script>

<style lang="css" scoped>
.dog-cat-form{
	max-width: 3000px;
	padding: 10px 20px;
	background: #f4f7f8;
	padding: 20px;
	background: #f4f7f8;
	border-radius: 8px;
	font-family: Georgia, "Times New Roman", Times, serif;
	cursor: url('../assets/paw.png'), auto;
}
.dog-cat-form fieldset{
	border: none;
}
.dog-cat-form legend {
	font-size: 1.4em;
	margin-bottom: 10px;
}
.dog-cat-form label {
	display: block;
	margin-bottom: 8px;
	cursor: url('../assets/paw.png'), auto;
}
.dog-cat-form input[type="text"],
.dog-cat-form select {
	font-family: Georgia, "Times New Roman", Times, serif;
	background: rgba(255,255,255,.1);
	border: none;
	border-radius: 4px;
	font-size: 15px;
	margin: 0;
	outline: 0;
	padding: 10px;
	width: 100%;
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	background-color: #e8eeef;
	color:#8a97a0;
	-webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
	box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
	cursor: url('../assets/paw.png'), auto;
}
.dog-cat-form input[type="text"]:focus,
.dog-cat-form select:focus{
	background: #d2d9dd;
	cursor: url('../assets/paw.png'), auto;
}
.dog-cat-form select{
	-webkit-appearance: menulist-button;
	height:35px;
}

.dog-cat-form input[type="button"]
{
	display: block;
	padding: 19px 39px 18px 39px;
	color: #FFF;
	margin: 0 auto;
	background: #be29ec;
	font-size: 18px;
	text-align: center;
	font-style: normal;
	width: 75%;
	border: 1px solid #be29ec;
	border-width: 1px 1px 3px;
	margin-bottom: 10px;
}
.dog-cat-form input[type="submit"]:hover,
.dog-cat-form input[type="button"]:hover
{
	background: #d896ff;
	cursor: url('../assets/paw.png'), auto;
}
</style>
