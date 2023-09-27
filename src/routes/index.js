import Vue from 'vue'
import VueRouter from 'vue-router'

import Landing from './components/Landing.vue'
import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'


vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Landing",
        component: Landing,
    },

    {
        path: "/LogIn",
        name: "LogIn",
        component: LogIn,
    },

    {
        path: "/Signup",
        name: "SignUp",
        component: Signup,
    }
]