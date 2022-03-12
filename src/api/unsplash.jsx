import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 93FHa4CQFnzObB2FkOPf9xEF5eQYoixKegWS1OO1Vn8",
  },
});
