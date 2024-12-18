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
    ],
    OwnerofThisProject:{
        name:"ArunkumarM-437",
        role:"Cloud-Developer"
    }
};

const getters = {
    allUsers : (state)=>state.users,
    owner : (state)=>state.OwnerofThisProject
};

const actions = {};

const mutations = {};

export default {
    state, getters , actions , mutations
}