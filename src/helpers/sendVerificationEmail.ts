import { Resend } from "resend";
import VerficcationEmail from "@/emails/VerificationEmail";
import { ApiResponse } from "@/types/apiResponse";
export async function sendVerificationEmail(
email:string,
username:string,
verifyCode:string
): Promise<ApiResponse> {
try{
return {
    success:false, message:" verification email send successfully !"
}
}catch(emailError){
console.log("error in sending email",emailError);
return {
    success:false, message:"failed to send email verification"
}
}
}