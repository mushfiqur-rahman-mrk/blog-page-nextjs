import GetPost from "@/utils/getPost";
import Link from "next/link";

const Page =async () => {
    const allcourses= await GetPost()
  return (
    <>
    <h1 className="text-3xl font-bold text-center my-5 text-orange-600">All Courses</h1>
       <div className="max-w-5xl mx-auto my-5">
      <div className="grid grid-cols-2 gap-5">
        {allcourses?.slice(0, 20).map((course) => (
          <div key={course.id} className="p-5 rounded-lg shadow-lg">
            <h1 className="font-bold pb-3 text-lg">{course?.title}</h1>
            <p>{course?.body}</p>
            <Link href={`/courses/${course?.id}`}>
            <button className="text-orange-600 font-bold text-lg my-2">Read more</button>
            </Link>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Page;