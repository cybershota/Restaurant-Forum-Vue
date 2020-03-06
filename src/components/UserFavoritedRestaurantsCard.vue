<template>
  <div class="card text-center">
    <div class="card-header">
      <strong>{{userFavRests.length}}</strong> 已評論餐廳
    </div>
    <div class="card-body">
      <div
        v-for="restaurant in userFavRests"
        :key="restaurant.id"
        class="d-inline-block mx-1 my-1"
        style="width:70px;height:70px"
      >
        <router-link :to="{name:'restaurant',params:{id:restaurant.id}}">
          <img :src="restaurant.image" style="width:100%; height:100%;object-fit: cover" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialFavRests: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      userFavRests: this.initialFavRests
    };
  }
};
</script>