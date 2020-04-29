<template lang="html">
  <li class="cards__item">
    <div class="card">
      <div class="card__content">
        <div class="card__title">{{dog.name}}</div>
        <p class="card__text">{{dog.breed}}</p>
        <button @click="handleRemove">Delete</button>
      </div>
    </div>
  </li>
</template>

<script>
import {eventBus} from '../main';

export default {
  name: 'dog-item',
  props: ['dog'],
  methods: {
    handleRemove(){
      eventBus.$emit('remove-dog', this.dog)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
