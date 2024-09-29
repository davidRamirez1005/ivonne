<template>
	<component :is="layout" />
</template>

<script setup>
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import defaultLayout from './shared/layouts/default.vue';

const layouts = {
	'default': defaultLayout,
};

const route = useRoute();

const layout = computed(() => {
	if (route?.name && route?.meta?.layout) return layouts[route.meta.layout];
	else return layouts.default;
});

watch(route, () => {
	if (route.meta) {
		document.title = 'Ivonne - ' + (route.meta.title || 'Home');
	} else {
		document.title = 'Home';
	}
}, {
	immediate: true,
	deep: true,
});

</script>

<!-- <style>
*{
	font-family: 'Open Sans' !important;
	padding: 0 ;
	margin: 0 !important;
	box-sizing: border-box;
}
</style> -->

