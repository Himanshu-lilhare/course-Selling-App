import { configureStore } from "@reduxjs/toolkit";
import { adminReducer, lectureReducer } from "./reducers/adminReducer";
import { addToCartReducer, courseReducer } from "./reducers/courseReducer";
import { profilereducer } from "./reducers/profilereducer";
import { subscriberReducer } from "./reducers/subscribeReducer.js";
import { userreducer } from "./reducers/userReducer";

// export const server='http://localhost:4000'
export const server = 'https://course-selling-backend.vercel.app'

 

export const reduxstore=configureStore({
    reducer:{
    user: userreducer,
    profilebeta : profilereducer,
    courses:courseReducer,
    admin:adminReducer,
    subscribe:subscriberReducer,
    addToCartReducer:addToCartReducer,
    lectureReducer:lectureReducer
    }
})