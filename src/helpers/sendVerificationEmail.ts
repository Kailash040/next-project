import { Resend } from "resend";
import VerficcationEmail from "@/emails/VerificationEmail";
import { ApiResponse } from "@/types/apiResponse";
export async function sendVerificationEmail(
email:string,
username:string,
verifyCode:string
): Promise<ApiResponse> {
try{

}catch(emailError){
console.log("error in sending email",emailError);
return {
    success:false, message:"failed to send email verification"
}
}
}