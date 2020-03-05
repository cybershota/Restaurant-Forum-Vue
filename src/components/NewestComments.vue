<template>
  <div class="card">
    <div class="card-header">最新餐廳</div>
    <div class="card-body">
      <div v-for="comment in comments" v-bind:key="comment.id">
        <h4>
          <router-link
            :to="{ name: 'restaurant', params: {id: comment.Restaurant.id}}"
          >{{ comment.Restaurant.name }}</router-link>&nbsp;
        </h4>
        <p>{{ comment.text }}</p>
        {{ comment.createdAt | fromNow }}
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
    comments: {
      type: Array,
      required: true
    }
  }
};
</script>
