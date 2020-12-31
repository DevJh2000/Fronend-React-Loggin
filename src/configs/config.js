import dotenv from "dotenv";
dotenv.config();
export const appApiUrl = process.env.REACT_APP_API_URL || "";
