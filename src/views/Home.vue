<template>
	<Header></Header>
	<NavSwiper></NavSwiper>
	<Foot></Foot>
</template>

<script setup>
import Header from '../components/common/Header.vue'
import NavSwiper from '../components/home/NavSwipera.vue'

//按需加载组件
import { useIntersectionObserver } from '@vueuse/core'

const target = ref(null);
const targetIsVisible = ref(false);

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
  	if( isIntersecting ) {
  		targetIsVisible.value = isIntersecting
  	}
  },
)

import Foot from '../components/common/Foot.vue'
</script>