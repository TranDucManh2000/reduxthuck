import { useState } from "react";
import {GetUsers, GETDATA, GET_USERS, INCREMENT, THEM,LOAD_DATA, XOA, LUU_ID, FOM_ID, GET_FOM } from "./importaction";
import axios from "axios";

const initState  = {
  valuecont : 0 ,
  datas : [
    {
      name : 'Ten ban dau',
    },
    {
      name : 'Ten ban dau 2',
    }
  ],
  tata : [],
  fid : {
    name : '',
    avatar : '',
  },
  loading : 0,
  id : 0,
}
// action co the la payload cung dc
const Actionhand  = (state = initState,action) => {
    switch (action.type) {
      case INCREMENT:
        return{
         ...state,
         valuecont: state.valuecont + 1
        }

      case GET_USERS:
        return{
           ...state,
           tata : action.users
        }
        case GET_FOM:
        return{
           ...state,
           fid : action.data
        }
        case THEM:
        return{
           ...state,
        }
        case XOA:
          return{
             ...state,
          }
          case FOM_ID:
            return{
               ...state,
               fid :action.vlf

            }
        case LUU_ID:
            return{
               ...state,
               id : action.idd,
               fid : action.data
          }
        case LOAD_DATA :
        return{
           ...state,
           loading : state.loading
        }
    
      default:
        return state;
    }
   };
   
export default Actionhand;


   