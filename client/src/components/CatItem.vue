<template lang="html">
  <li class="cards__item">
    <div class="card">
      <div class="card__content">
        <div class="card__title">{{cat.name}}</div>
        <p class="card__text">{{cat.breed}}</p>
        <button @click="handleRemove">Delete</button>
      </div>
    </div>
  </li>
</div>

</template>

<script>
import {eventBus} from '../main';

export default {
  name: 'cat-item',
  props: ['cat'],
  methods: {
    handleRemove(){
      eventBus.$emit('remove-cat', this.cat)
    }
  }
}
</script>

<style lang="css" scoped>


</style>
