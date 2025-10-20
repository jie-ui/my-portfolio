
export const errorController = (err, req, res, next) => {
  console.error("❌ Error caught by errorController:", err);

  // 默认状态码和信息
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  // 1️⃣ Mongoose CastError → ObjectId 格式错误
  if (err.name === "CastError") {
    statusCode = 400;
    message = `Invalid ${err.path}: ${err.value}`;
  }

  // 2️⃣ Mongoose ValidationError → 字段验证失败
  if (err.name === "ValidationError") {
    statusCode = 400;
    message = Object.values(err.errors)
      .map((e) => e.message)
      .join("; ");
  }

  // 3️⃣ E11000 重复键错误（例如 email unique）
  if (err.code === 11000) {
    statusCode = 409;
    message = `Duplicate field value for ${Object.keys(
      err.keyPattern
    ).join(", ")}`;
  }

  // 4️⃣ 默认输出
  res.status(statusCode).json({
    ok: false,
    status: `${statusCode}`.startsWith("4") ? "fail" : "error",
    error: message,
  });
};
