import axios from "axios";
import { store } from "../Redux/store";

const HOSTNAME = "https://dev.thetechub.us/primecar/public/api/v1/";
const callPrivateApi = (endpoint, method, payload) => {
  let token = store.getState().userAuth.loginInfo.token;
  const configaxios = {
    method,
    url: `${HOSTNAME}${endpoint}`,
    data: payload,
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin":
        " GET, POST, PUT, PATCH, POST, DELETE, OPTIONS",
      " Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "6000",
      "Access-Control-Allow-Headers": "*",
      token,
    },
  };
  return new Promise((resolve, reject) => {
    axios(configaxios)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const callPublicApi = (endpoint, method, payload) => {
  const HOSTNAME = "https://dev.thetechub.us/primecar/public/api/v1/";
  const configaxios = {
    method,
    url: `${HOSTNAME}${endpoint}`,
    data: payload,
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin":
        " GET, POST, PUT, PATCH, POST, DELETE, OPTIONS",
      " Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "6000",
      "Access-Control-Allow-Headers": "*",
    },
  };
  return new Promise((resolve, reject) => {
    axios(configaxios)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
//for Contact Us
const callingPublicApi = (endpoint, method, payload) => {
  const SERVER_URL = process.env.REACT_APP_CONTACT_SERVER_URL;
  const configaxios = {
    method,
    url: `${SERVER_URL}${endpoint}`,
    data: payload,
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin":
        " GET, POST, PUT, PATCH, POST, DELETE, OPTIONS",
      " Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "6000",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Credentials": "true",
    },
  };
  return new Promise((resolve, reject) => {
    axios(configaxios)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { callPublicApi, callPrivateApi, HOSTNAME, callingPublicApi };
