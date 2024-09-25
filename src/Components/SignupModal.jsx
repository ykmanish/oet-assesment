import React from "react";
import Link from "next/link";

const SignupModal = () => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className=" small border bg-[#21b0fe] text-white font-medium rounded-full text-md px-5 py-2 text-center"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Sign up
      </button>
      <dialog
        id="my_modal_3"
        className="modal bg-black/70"
      >
        <div className="modal-box rounded-[35px] overflow-y-auto p-0 max-w-7xl mx-auto relative">
          
          {/* Close button (cross icon) */}
          <button
            className="absolute top-5 right-5 text-gray-400 hover:text-gray-600"
            onClick={() => document.getElementById("my_modal_3").close()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-[#e8e8e8] p-10 flex flex-col justify-between items-start w-full h-auto py-6">
              <h1 className="text-xl text-[#0c0c0c] hidden lg:block small">Welcome!</h1>

              {/* Centered logo and name */}
              <div className="flex justify-center items-center w-full ">
                <img src="./logo.svg" alt="logo" className="lg:h-20 h-12 w-12 lg:w-20 mr-3" />
                <Link href="/" className="lg:text-6xl text-3xl text-[#0c0c0c] font-bold heading">
                  Oetology
                </Link>
              </div>

              <h1 className="text-md text-center lg:text-left mt-3 text-sm lg:text-lg text-[#0c0c0c] small">
                Wherever the art of medicine is loved, there is also a love of humanity.
              </h1>
            </div>

            <div className="lg:p-10 p-6 flex flex-col justify-center bg-white">
              <h1 className="heading text-[#0c0c0c] text-center lg:text-left text-2xl">Sign up</h1>
              <label className="form-control mt-8 w-full max-w-xl">
                <div className="label">
                  <span className="label-text uppercase text-zinc-400 text-xs tracking-wide small">
                    Email or Username
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Email or Username"
                  className="input input-bordered border-none h-14 placeholder:text-sm rounded-xl placeholder:font-normal placeholder:text-zinc-400 small tracking-wide mt-1 bg-[#f4f4f4] w-full max-w-xl"
                />
              </label>
              <div className="flex lg:flex-row flex-col justify-center items-center space-x-2">
                <label className="form-control mt-6 w-full max-w-xl">
                  <div className="label">
                    <span className="label-text uppercase text-zinc-400 text-xs tracking-wide small">
                      Password
                    </span>
                  </div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered border-none h-14 placeholder:text-sm rounded-xl placeholder:font-normal placeholder:text-zinc-400 small tracking-wide mt-1 bg-[#f4f4f4] w-full max-w-xl"
                  />
                </label>
                <label className="form-control mt-6 w-full max-w-xl">
                  <div className="label">
                    <span className="label-text uppercase text-zinc-400 text-xs tracking-wide small">
                      Confirm Password
                    </span>
                  </div>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="input input-bordered border-none h-14 placeholder:text-sm rounded-xl placeholder:font-normal placeholder:text-zinc-400 small tracking-wide mt-1 bg-[#f4f4f4] w-full max-w-xl"
                  />
                </label>
              </div>

              <div className="flex flex-col items-center">
                <button
                  type="button"
                  className="w-full btn hover:bg-[#212121] heading text-lg mt-10 flex items-center justify-center h-16 px-4 font-semibold text-center text-white rounded-xl bg-[#0c0c0c] transition-all duration-500"
                >
                  Sign up
                </button>
              </div>

              <div className="flex flex-col justify-center">
                <div className="flex max-w-4xl justify-center items-center mt-6 ">
                  <div className="border-t border-zinc-100 w-full"></div>
                  <h1 className="small text-zinc-700 text-sm tracking-wide small px-4">
                    Or
                  </h1>
                  <div className="border-t border-zinc-100 w-full"></div>
                </div>
                <div className="flex flex-col lg:flex-row gap-3 justify-center items-center mt-6">
                  <button
                    type="button"
                    className="lg:w-40 w-full btn small text-md bg-white hover:bg-zinc-50 flex items-center justify-center h-12 px-4 font-semibold text-center text-[#0c0c0c] rounded-xl transition-all duration-500"
                  >
                    <img
                      src="https://www.svgrepo.com/show/452216/google.svg"
                      alt="google"
                      className="h-6"
                    />
                    Google
                  </button>
                  <button
                    type="button"
                    className="lg:w-40 w-full btn small text-md bg-white hover:bg-zinc-50 flex items-center justify-center h-12 px-4 font-semibold text-center text-[#0c0c0c] rounded-xl transition-all duration-500"
                  >
                    <img
                      src="https://quantafile.com/images/twitter.svg"
                      alt="X(Twitter)"
                      className="h-6"
                    />
                    X (Twitter)
                  </button>
                  <button
                    type="button"
                    className="lg:w-40 w-full btn small text-md bg-white hover:bg-zinc-50 flex items-center justify-center h-12 px-4 font-semibold text-center text-[#0c0c0c] rounded-xl transition-all duration-500"
                  >
                    <img
                      src="https://www.svgrepo.com/show/448224/facebook.svg"
                      alt="Facebook"
                      className="h-6"
                    />
                    Facebook
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default SignupModal;
