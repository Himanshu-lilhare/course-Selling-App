import { createReducer } from "@reduxjs/toolkit";

export const courseReducer=createReducer({courses:[],lectures:[]},{
     getCoursesRequest:(state)=>{
        state.loading=true
     },
     getCoursesSuccess:(state,action)=>{
        state.loading=false
        state.courses= action.payload
     },
     getCoursesFail:(state,action)=>{
        state.loading=false
       state.error=action.payload
     },
     getLecturesRequest:(state)=>{
      state.loading=true
   },
   getLecturesSuccess:(state,action)=>{
      state.loading=false
      state.lectures= action.payload
   },
   getLecturesFail:(state,action)=>{
      state.loading=false
     state.error=action.payload
   },
     addtocartRequest:(state)=>{
      state.loading=true
     },
     addtocartSuccess:(state,action)=>{
      state.loading=false
      state.message=action.payload
     },
     addtocartFail:(state,action)=>{
      state.loading=false
      state.error=action.payload
     }
     ,
     clearerror:(state)=>{
        state.error=null
     },
     clearmessage:(state)=>{
        state.message=null
     }
})
export const addToCartReducer=createReducer({},{
  
   addtocartRequest:(state)=>{
    state.loading=true
   },
   addtocartSuccess:(state,action)=>{
    state.loading=false
    state.addToCartMessage=action.payload
   },
   addtocartFail:(state,action)=>{
    state.loading=false
    state.addToCartError=action.payload
   }
   ,
   clearerror:(state)=>{
      state.addToCartError=null
   },
   clearmessage:(state)=>{
      state.addToCartMessage=null
   }
})