import { createStore } from 'vuex';
import usersData from './modules/usersData';


export default createStore({
    modules:{
        usersData
    }
});