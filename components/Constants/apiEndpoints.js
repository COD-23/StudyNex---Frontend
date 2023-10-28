export const ApiUrl =
  process.env.NEXT_PUBLIC_APP_ENV == "production"
    ? "https://study-nex-backend.vercel.app/"
    : "http://localhost:3001/api";
export const loginApi = "/login";
export const registerApi = "/register";
export const forgotPasswordApi = "/forgot-password";
export const resetPasswordApi = "/reset-password";
