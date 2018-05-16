import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home';
import CampusConnect from '@/views/CampusConnect';
import Organogram from '@/views/Organogram';
import Missions from '@/views/Missions';
import Programmes from '@/views/Programmes';
import SupportNow from '@/views/SupportNow';
import Partnerships from '@/views/Partnerships';
import Gallery from '@/views/Gallery';
import Calendar from '@/views/Calendar';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '', name: 'home', component: Home },
    { path: '/campus_connect', name: 'campus_connect', component: CampusConnect },
    { path: '/organogram', name: 'organogram', component: Organogram },
    { path: '/missions', name: 'missions', component: Missions },
    { path: '/programmes', name: 'programmes', component: Programmes },
    { path: '/support_now', name: 'support_now', component: SupportNow },
    { path: '/partnerships', name: 'partnerships', component: Partnerships },
    { path: '/gallery', name: 'gallery', component: Gallery },
    { path: '/calendar', name: 'calendar', component: Calendar },
    { path: '*', redirect: { name: 'home' } },
  ]
})
