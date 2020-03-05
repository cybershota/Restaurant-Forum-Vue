<template>
  <div class="container py-5">
    <DashboardDetail
      :initial-restaurant="restaurant"
      :comments="restaurantComment"
      :favorited="restaurantFavorited"
    />
    <a href="#" @click.stop.prevent="beforePath">回上一頁</a>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 1,
    name: "Dr. Izaiah Ernser",
    tel: "389.061.3241 x162",
    address: "7226 Johns Islands",
    opening_hours: "08:00",
    description: "quam",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=90.45122643685453",
    viewCounts: 29438,
    createdAt: "2020-02-28T14:38:32.000Z",
    updatedAt: "2020-03-05T10:34:43.476Z",
    CategoryId: 2,
    Category: {
      id: 2,
      name: "日本料理",
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-02-28T14:38:32.000Z"
    },
    FavoritedUsers: [
      {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
        isAdmin: true,
        image: null,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-03-02T17:09:40.000Z",
        Favorite: {
          UserId: 1,
          RestaurantId: 1,
          createdAt: "2020-03-04T08:27:19.000Z",
          updatedAt: "2020-03-04T08:27:19.000Z"
        }
      }
    ],
    LikedUsers: [],
    Comments: [
      {
        id: 1,
        text:
          "Dolores dolorem maxime debitis blanditiis quam sed voluptatem mollitia.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$VHKmtPqbcUzK46qxLllqj.w506U2N2TObMmnpdlNG2CLZPa1xzuTi",
          isAdmin: false,
          image: null,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-02T16:01:50.000Z"
        }
      },
      {
        id: 51,
        text: "Nobis aspernatur nobis cumque sed nemo et autem.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2020-02-28T14:38:32.000Z",
        updatedAt: "2020-02-28T14:38:32.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$NyaAtgRuHx3i7hHlnb5IXOC4Uk4.q1J1iQs3op.ymdCEh7.tOwcH2",
          isAdmin: false,
          image: null,
          createdAt: "2020-02-28T14:38:32.000Z",
          updatedAt: "2020-03-02T16:02:20.000Z"
        }
      }
    ]
  },
  isFavorited: true,
  isLiked: false
};

import DashboardDetail from "../components/DashboardDetail";

export default {
  components: {
    DashboardDetail
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: ""
      },
      restaurantComment: [],
      restaurantFavorited: []
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log("fetchRestaurant id: ", restaurantId);

      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name
      };

      this.restaurantComment = dummyData.restaurant.Comments;
      this.restaurantFavorited = dummyData.restaurant.FavoritedUsers;
    },
    beforePath() {
      this.$router.go(-1);
    }
  }
};
</script>