<template>
  <user-card-list :loading="false" :user-list="userList"></user-card-list>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import {useRoute, useRouter} from "vue-router";
import myAxios from "../plugins/myAxios";
import qs from 'qs';
import UserCardList from "../components/UserCardList.vue";

const router = useRouter();
const route = useRoute();

const {tags} = route.query;


const userList = ref();


onMounted(async () => {
  const userListData = await myAxios.get('/user/search/tags', {
    params: {
      tagList: tags
    },
    paramsSerializer: params => {
      return qs.stringify(params, {indices: false})
    }
  }).then(res => {
    console.log("/user/search/tags success" + res);
    // console.log(res.data)
    return res.data;
  }).catch(rea => {
    console.log("/user/search/tags error" + rea);
  })
  if (userListData) {
    userListData.forEach(user => {
      if (user.tags) {
        user.tags = JSON.parse(user.tags);
      }
    })
    userList.value = userListData;
  }
})

</script>

<style scoped>

</style>
