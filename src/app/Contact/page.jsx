import React from "react";
export const metadata = {
  title: "Oetology",
  description: "Oetology is a platform for learning and teaching",
};
const page = () => {

  
  return (
    <div>
      <div className="max-w-7xl  mt-6 mb-20 mx-auto  ">
        <div className="grid px-3 grid-cols-1 lg:grid-cols-6 lg:gap-8">
          <div className="bg-zinc-100 lg:col-span-4 rounded-[35px] lg:p-10 p-4  w-full h-auto">
            <h1 className="heading text-2xl text-center lg:text-left">Contact us</h1>
            <p className="small mt-2 text-sm lg:text-[16px] text-center lg:text-left">
              We are deeply committed to providing the best services to our
              clients. If you have any questions or concerns, please feel free
              to contact us.
            </p>
            <div className="flex mt-8 justify-center items-center space-x-3">
              <label className="form-control  w-full">
                <div className="label">
                  <span className="label-text  uppercase text-zinc-400 text-xs tracking-wide  small ">
                    First Name
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered border-none h-14 placeholder:text-sm rounded-xl placeholder:font-normal placeholder:text-zinc-400 small tracking-wide  mt-1 bg-white w-full "
                />
              </label>
              <label className="form-control  w-full">
                <div className="label">
                  <span className="label-text  uppercase text-zinc-400 text-xs tracking-wide  small ">
                    Last Name
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered border-none h-14 placeholder:text-sm rounded-xl placeholder:font-normal placeholder:text-zinc-400 small tracking-wide  mt-1 bg-white w-full "
                />
              </label>
            </div>
            <label className="form-control mt-4  w-full">
              <div className="label">
                <span className="label-text  uppercase text-zinc-400 text-xs tracking-wide  small ">
                  Email
                </span>
              </div>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered border-none h-14 placeholder:text-sm rounded-xl placeholder:font-normal placeholder:text-zinc-400 small tracking-wide  mt-1 bg-white w-full "
              />
            </label>
            <label className="form-control mt-4  w-full">
              <div className="label">
                <span className="label-text  uppercase text-zinc-400 text-xs tracking-wide  small ">
                  Description
                </span>
              </div>
              <input
                type="text"
                placeholder="Description"
                className="textarea textarea-bordered border-none h-14 placeholder:text-sm rounded-xl placeholder:font-normal placeholder:text-zinc-400 small tracking-wide  mt-1 bg-white w-full "
              />
            </label>
            <div className="flex justify-center">
              <button
                type="button"
                className="w-full btn hover:bg-[#212121] heading text-lg mt-6 flex items-center justify-center h-16 px-4 t font-semibold text-center text-white rounded-xl bg-[#0c0c0c]  transition-all duration-500"
              >
                Send Message
              </button>
            </div>
          </div>
          <div className="lg:col-span-2 ">
            <div className="flex pt-10  duration-500 transition-all flex-col justify-center items-center">
              <div className="border group  grid grid-cols-5 justify-center  items-center w-full h-24 rounded-2xl">
                <div className="col-span-1 flex justify-center items-center">
                  <img
                    src="/location.svg"
                    alt="map"
                    className="w-8 h-8  object-cover"
                  />
                </div>
                <di className="col-span-4">
                  <h1 className="text-lg flex-col duration-300 transition-all  group-hover:text-[#00c49a] heading ">Address</h1>
                  <span className="text-sm small tracking-wide mt-2">
                    Q-123, New York, USA
                  </span>
                </di>
              </div>
              <div className="border group grid mt-3  grid-cols-5 justify-center  items-center w-full h-24 rounded-2xl">
                <div className="col-span-1 flex justify-center items-center">
                  <img
                    src="/phone.svg"
                    alt="map"
                    className="w-8 h-8  object-cover"
                  />
                </div>
                <di className="col-span-4">
                  <h1 className="text-lg flex-col group-hover:text-[#21b0fe] duration-300 transition-all heading ">Phone</h1>
                  <span className="text-sm small tracking-wide mt-2">
                    +91 123 456 7890
                  </span>
                </di>
              </div>
              <div className="border group grid mt-3 grid-cols-5 justify-center  items-center w-full h-24 rounded-2xl">
                <div className="col-span-1 flex justify-center items-center">
                  <img
                    src="/mail.svg"
                    alt="map"
                    className="w-8 h-8  object-cover"
                  />
                </div>
                <di className="col-span-4">
                  <h1 className="text-lg flex-col group-hover:text-[#ef476f] duration-300 transition-all heading ">Email</h1>
                  <span className="text-sm small tracking-wide mt-2">
                    support@oetology.com
                  </span>
                </di>
              </div>
              <div className="border group grid mt-3 grid-cols-5 justify-center  items-center w-full h-24 rounded-2xl">
                <div className="col-span-1 flex justify-center items-center">
                  <img
                    src="/time.svg"
                    alt="map"
                    className="w-8 h-8  object-cover "
                  />
                </div>
                <di className="col-span-4">
                  <h1 className="text-lg flex-col group-hover:text-[#9381ff] duration-300 transition-all heading ">Working Hours</h1>
                  <span className="text-sm small tracking-wide mt-2">
                    Mon to Fri - 9:00 AM - 5:00 PM

                  </span>
                </di>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
