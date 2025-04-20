import { createSlice } from '@reduxjs/toolkit';

let counterSlice= createSlice({
  name: 'counterSlice',
  initialState:0 ,
  reducers:{
    increment:(state, action)=>{
      return state+=1;
      console.log(state);

    },
    decrement:(state, action)=>{
        return state-=1;
        console.log(state);

    }
  }
});


export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer