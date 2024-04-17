import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { getProductStart,getProductSuccess,getProductFailure } from "./productRedux";
import { publicRequest } from "../requestMethods";


export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const getProduct = async (dispatch)=>{
  dispatch(getProductStart());
  try{
    const res = await publicRequest.get('/product');
    dispatch(getProductSuccess(res.data));
  }catch(error){
    dispatch(getProductFailure());
  }
}
