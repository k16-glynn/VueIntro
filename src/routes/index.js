import {createRouter, createWebHistory} from "vue-router"

import Landing from "./../components/Landing.vue"
import Academics from "./../components/Academics.vue"
import Amenities from "./../components/Amenities.vue"
import Social from "./../components/Social.vue"
import Sports from "./../components/Sports.vue"
import Apply from "./../components/Apply.vue"
import SignUp from "./../components/SignUp.vue"


const routes = [
    {
        path: "/",
        name: "Landing",
        component: Landing,
    },

    {
        path: "/Academics",
        name: "Academics",
        component: Academics,
    },
    
    {
        path: "/Amenities",
        name: "Amenities",
        component: Amenities,
    },

    {
        path: "/Social",
        name: "Social",
        component: Social,
    },

    {
        path: "/Sports",
        name: "Sports",
        component: Sports,
    },

    {
        path: "/Apply",
        name: "Apply",
        component: Apply,
    },

    {
        path: "/SignUp",
        name: "SignUp",
        component: SignUp,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router