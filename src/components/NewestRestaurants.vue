<template>
  <div class="card">
    <div class="card-header">最新餐廳</div>
    <div class="card-body">
      <div v-for="restaurant in restaurants" v-bind:key="restaurant.id">
        <h4>
          <router-link
            :to="{ name: 'restaurant', params: {id: restaurant.id}}"
          >{{ restaurant.name }}</router-link>&nbsp;
          <small>{{ restaurant.Category.name }}</small>
        </h4>
        <p>{{ restaurant.description }}</p>
        {{ restaurant.createdAt | fromNow }}
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  filters: {
    fromNow(datetime) {
      if (!datetime) {
        return "-";
      }
      return moment(datetime).fromNow();
    }
  },
  props: {
    restaurants: {
      type: Array,
      required: true
    }
  }
};
</script>
