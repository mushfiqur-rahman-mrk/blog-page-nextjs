
const GetSinglePost =async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.json();
  
};

export default GetSinglePost;