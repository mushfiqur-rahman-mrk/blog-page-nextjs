import GetSinglePost from "@/utils/getSinglePost";

const SingleCourse = async({params}) => {
    const {id}=params;
    const course= await GetSinglePost(id)

  return (
    <>
      <h1>{course.title}</h1>
      <h1>{course.body}</h1>
    </>
  );
};

export default SingleCourse;