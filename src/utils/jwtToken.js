import { cookies } from "next/headers";

// Create Token and saving in cookie

const sendToken = (user, statusCode, res) => {
  const token = user.createToken();

  // options for cookie
  const options = {
    name: "token",
    value: token,
    expire: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    path: "/",
  };
  // Set cookie
  cookies().set(options);
  user.password = undefined;
  return res.json(
    {
      success: true,
      user,
      token,
    },
    { status: statusCode }
  );
};

export default sendToken;
