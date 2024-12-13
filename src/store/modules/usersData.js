// import axios from "axios";

const state = {
    users:[
        {
            id:10101,
            name:"Srinu"
        },
        {
            id:10102,
            name:"Gopi G"
        },
        {
            id:10103,
            name:"Harsha"
        },
        {
            id:10104,
            name:"Arunkumar M"
        },
    ]
};

const getters = {
    allUsers : (state)=>state.users
};

const actions = {};

const mutations = {};

export default {
    state, getters , actions , mutations
}