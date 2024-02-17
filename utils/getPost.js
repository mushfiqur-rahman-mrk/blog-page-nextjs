import axios from "axios";

const GetPost = async () => {
//   const res = axios.get("https://jsonplaceholder.typicode.com/posts");
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data= res.json()
//   const course = res.data;

    return data;
//   return res.data;
};

export default GetPost;
