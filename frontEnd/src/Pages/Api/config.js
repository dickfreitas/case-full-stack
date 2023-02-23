import axios from 'axios'

export default axios.create({
  baseURL: "https://api-astonpetshop.onrender.com",
  headers: {
    "Content-Type": "application/json",
  }
})