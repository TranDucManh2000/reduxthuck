import axios from 'axios';
// const INCREMENT = "increment";
const GETDATA = "getdata";
const THEM = "THEM";
const SUA = "SUA";
const XOA = "XOA";

export {GETDATA,THEM,XOA,SUA}

export const INCREMENT = (data) => ({
    type: 'INCREMENT',
    payload: data,
  });
//   export const GET_USERS = (data) => ({
//     type: 'GET_USERS',
//     payload: data,
//   });
  export const GET_USERS = "GET_USERS";
  export const GetUsers = () => {

    return dispatch => {
        axios.get('https://61ea650d7bc0550017bc6714.mockapi.io/eate')
        .then(res => {
          const dataday = res.data
          console.log('Get',res.data);
            dispatch({
                type: GET_USERS,
                users: dataday
            });
        })
    };
};
export const Themdata = (data) => {
  return dispatch => {
      axios.post('https://61ea650d7bc0550017bc6714.mockapi.io/eate',data)
      .then(response => {
        console.log('post',response.data);
        
        axios.get('https://61ea650d7bc0550017bc6714.mockapi.io/eate')
        .then(res => {
          console.log('Get 2',res.data);
            dispatch({
                type: GET_USERS,
                users: res.data
            });
        })

      })
  };
};
export const Xoadata = (data) => {
  return dispatch => {
      axios.delete(`https://61ea650d7bc0550017bc6714.mockapi.io/eate/`+data)
      .then(response => {
        console.log('delete',response.data);
        
        axios.get('https://61ea650d7bc0550017bc6714.mockapi.io/eate')
        .then(res => {
          console.log('Get 2',res.data);
            dispatch({
                type: GET_USERS,
                users: res.data
            });
        })

      })
  };
};
export const GET_FOM = "GET_FOM";
export const Getfdata = (dataid) => {
  return dispatch => {
        axios.get('https://61ea650d7bc0550017bc6714.mockapi.io/eate/'+dataid)
        .then(resf => {
          console.log('Get fid',resf.data);
            dispatch({
                type: GET_FOM,
                data: resf.data
            });
        })
        
  };
};
export const FOM_ID = "FOM_ID";
export const Suadata = (dataid,data2) => {
  return dispatch => {
      axios.put(`https://61ea650d7bc0550017bc6714.mockapi.io/eate/`+dataid,
      data2
      )
      .then(response => {
        console.log('put',response.data);

        // axios.get('https://61ea650d7bc0550017bc6714.mockapi.io/eate/'+dataid)
        // .then(resf => {
        //   console.log('Get fid',resf.data);
        //     dispatch({
        //         type: FOM_ID,
        //         vlf: resf.data
        //     });
        // })
        
        axios.get('https://61ea650d7bc0550017bc6714.mockapi.io/eate')
        .then(res => {
          console.log('Get 2',res.data);
            dispatch({
                type: GET_USERS,
                users: res.data
            });
        })

      })
  };
};
export const LUU_ID = "LUU_ID";
export const Luuid = (data) => {
  console.log('id nhan ',data)
  return dispatch => {

    axios.get('https://61ea650d7bc0550017bc6714.mockapi.io/eate/'+data)
        .then(resf => {
          console.log('Get fid',resf.data);
            dispatch({
                type: FOM_ID,
                vlf: resf.data
            });
        })

            dispatch({
                type: LUU_ID,
                idd: data
            });

          };
        }
export const LOAD_DATA = "LOAD_DATA";