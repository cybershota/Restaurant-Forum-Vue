<template>
  <div>
    <!-- 餐廳名稱 -->
    <h1>{{restaurant.name}}</h1>
    <p>[{{restaurant.categoryName}}]</p>
    <hr />
    <!-- 餐廳數據資料 -->
    <ul>
      <li>有 {{comments.length}} 筆評論</li>
      <li>有 {{favorited.length}} 人收藏這家餐廳</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    initialRestaurant: {
      type: Object,
      required: true
    },
    comments: {
      type: Array,
      required: true
    },
    favorited: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      restaurant: this.initialRestaurant,
      restaurantComment: this.comments,
      restaurantFavorited: this.favorited
    };
  }
};
</script>