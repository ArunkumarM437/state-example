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
        {
            id:10105,
            name:"Sheen X"
        },
    ],
    OwnerofThisProject:[{
        name:"ArunkumarM-437",
        role:"Cloud-Developer"
    }]
};

const getters = {
    allUsers : (state)=>state.users,
    ownerOfProj : (state)=>state.OwnerofThisProject
};

const actions = {};

const mutations = {};

export default {
    state, getters , actions , mutations
}