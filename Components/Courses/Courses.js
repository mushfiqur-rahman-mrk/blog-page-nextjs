"use-client";
import GetPost from "@/utils/getPost";
import Link from "next/link";

const Courses = async () => {
  const allCourse = await GetPost();
  console.log(allCourse);

  return (
    <>
      <div>
        <h1 className="mt-10 text-6xl  font-bold leading-[74px] text-center max-w-4xl mx-auto text-black">
          We Innovate Learning Processes
        </h1>
        <p className="text-Grey text-lg leading-7 text-center mt-4 max-w-xl mx-auto">
          Start, switch, or advance your career with more than 5,800 courses,
          Professional Certificates, and degrees.
        </p>
      </div>
      <div className="max-w-5xl mx-auto my-5">
      <div className="grid grid-cols-2 gap-5">
        {allCourse?.slice(0, 8).map((course) => (
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
      <div className="flex justify-center items-center">
      <Link href={'/courses'}>
      <button className="px-5 py-3 bg-orange-600 rounded-xl text-white">See All Courses</button>
      </Link>
      </div>
    </>
  );
};

export default Courses;
