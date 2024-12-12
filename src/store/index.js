import Vuex from 'vuex';
import Vue from 'vue';
import usersData from './modules/usersData';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        usersData
    }
});