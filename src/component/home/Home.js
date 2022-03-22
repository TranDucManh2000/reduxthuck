import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GETDATA,GetUsers, GET_USERS, INCREMENT, Luuid, LUU_ID, Suadata, THEM ,Themdata, Xoadata } from '../store/action/importaction';
const Home = () => {
    const countdem =  useSelector(state => state.action.valuecont)
    const datalis =  useSelector(state => state.action.datas)
    const datas =  useSelector(state => state.action.tata)
    const load =  useSelector(state => state.action.loading)
    const idne =  useSelector(state => state.action.id)
    const fid =  useSelector(state => state.action.fid)
    const dispatch = useDispatch();
    console.log('loa ding',load);
    console.log('data0',datalis);
    console.log('data list',datas);
    console.log('them name',fid.name);
    const [idhom,setidhom] =useState(0);
    const initvlua = {
      name : 'ssss',
      avatar : '',
    } 
    const [vlinp,setvlinp]=useState(fid.name);
    // useEffect(()=>{
    //   setvlinp(fid);
    // },[idhom])
    console.log('cc',fid);

    const [vlname,setvlname]=useState(fid.name);
    const [vlav,setvlav]=useState(fid.avatar);
    console.log('ssss',vlname)
    useEffect(()=>{
      console.log('useeefech run');
      dispatch(GetUsers());
    },[])

    // const addlis = (e)=>{
    //   const {name, vluae} = e.target
    //   console.log('vl',vluae = e.target.value )
    //   setvlinp({
    //     ...vlinp,
    //     [name] : vluae
    //   })
    // }

    const addname = (e)=>{
      setvlname(e.target.value)
      console.log(vlname)
    }
    const addavatar = (e)=>{
      setvlav(e.target.value)
      console.log(vlav)
    }
    const them = ()=>{
      console.log('idne',idne)
      if(idne != 0){
        dispatch(Suadata(idne,{name : vlname,avatar : vlav}));
        console.log('sua');
      }
      else{
       dispatch(Themdata({name : vlname,avatar : vlav}));
       console.log('them');
      } 
    }
      const Suabtn = (id)=>{
      // dispatch(Luuid(id))
      // console.log('idne',idne)
       setidhom(id)
      if(id != 0){
        dispatch(Suadata(id,{name : vlname,avatar : vlav}))
        console.log('sua');
      }
      else{
       them();
       console.log('them');
      } 
    }
    
  return (
      <>
      <h1>{countdem}</h1>
      <button onClick={()=>dispatch({type : INCREMENT})}>ok</button>

      <h1>Todo list </h1>
      Ten : <input value={vlname} name='name' onChange={addname}></input>
      avatar : <input value={vlav} name='avatar' onChange={addavatar}></input>
      <button onClick={them}>them</button>
      {
        datas.map((vl,index)=>
        <ul key={index}>
          <li > Name : {vl.name}</li>
          <li > Avatar : {vl.avatar}</li>
          <li >
            <button onClick={()=>Luuid(vl.id)} >Sua</button>
            <button onClick={()=> dispatch(Xoadata(vl.id))}>Xoa</button>
          </li>
        </ul>
        )
      }

      </>
  );
};

export default Home;
