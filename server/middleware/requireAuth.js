import jwt from "jsonwebtoken";

const requireAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(" Authorization header:", authHeader);

  
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ ok: false, error: "No token provided" });
  }

  
  const token = authHeader.split(" ")[1];

  try {
   
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(" Decoded token:", decoded);

   
    if (!decoded.id || typeof decoded.id !== "string") {
      return res.status(400).json({ ok: false, error: "Invalid token payload (missing id)" });
    }

  
    req.user = decoded;
    next(); 
  } catch (err) {
    console.error(" Token verification failed:", err.message);
    return res.status(401).json({ ok: false, error: "Invalid or expired token" });
  }
};

export default requireAuth;

