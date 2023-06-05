import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchStart,
  loginSuccess,
  registerSuccess,
  logoutSuccess,
  fetchFailure,
} from "../feature/authSlice";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const BASE_URL = "http://localhost:8080/api/";
  axios.defaults.withCredentials = true;

  const login = async (info) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}auth/login`, info);
      navigate("/");
      console.log(data);
      dispatch(loginSuccess(data));
    } catch (error) {
      dispatch(fetchFailure());
    }
  };

  const register = async (info) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}auth/register`, info);
      navigate("/");
      console.log(data);
      dispatch(registerSuccess(data));
    } catch (error) {
      dispatch(fetchFailure());
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axios.post(`${BASE_URL}auth/logout`);
      navigate("/login");
      dispatch(logoutSuccess());
    } catch (error) {
      dispatch(fetchFailure());
    }
  };

  return { login, register, logout };
};

export default useAuthCall;
