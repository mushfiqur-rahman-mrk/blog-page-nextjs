
const Banner = () => {

  return (
    <>
      <section className="relative z-30 bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
        <div className="bg-black w-full h-full absolute top-0 left-0 opacity-40 z-0 "></div>
         
        <div className="min-h-[90vh] relative z-40 max-w-3xl mx-auto text-center justify-center items-center flex flex-col">
            <h1 className="text-orange-600 font-bold text-4xl mb-10">
                Welcome to my blog page
            </h1>
            <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error accusantium necessitatibus ipsam? Itaque natus deleniti rerum assumenda dolorem optio, tenetur cum adipisci eligendi, ipsam rem omnis dolores</p>
            <button className="px-5 py-3 rounded-xl text-white bg-orange-600 mt-5">Get Started</button>
        </div>
       
      </section>
    </>
  );
};

export default Banner;