function ErrorHandler(err, statusCode, res) {
  return res.json(
    {
      success: false,
      error: err || "Internal Server Error",
    },
    { status: statusCode || 500 }
  );
}
export default ErrorHandler;
