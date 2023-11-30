import axios from "axios"
export default axios.create({
  params: {
    key: "0f343724742d4c1890f81417a7ad3edb",
  },
  baseURL: "https://api.rawg.io/api",
})
