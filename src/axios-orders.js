import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://test-app-be218-default-rtdb.asia-southeast1.firebasedatabase.app/",
});

export default instance;
