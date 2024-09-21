export default [
    {
		path:'',
		name: 'home',
		meta: { layout: 'default', title: 'Home' },
		component: () => import('../../modules/home/index.vue'),
	},
    {
		path:'/servicios',
		name: 'servicios',
		meta: { layout: 'default', title: 'servicios' },
		component: () => import('../../modules/pages/serviceController/index.vue'),
	},
    {
		path:'/programas',
		name: 'programas',
		meta: { layout: 'default', title: 'programas' },
		component: () => import('../../modules/pages/programsController/index.vue'),
	},
    {
		path:'/sobre-mi',
		name: 'sobre-mi',
		meta: { layout: 'default', title: 'sobre-mi' },
		component: () => import('../../modules/pages/aboutMeController/index.vue'),
	},
];