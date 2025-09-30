import {resend } from "@/lib/resend";
import VerficcationEmail from "@/emails/VerificationEmail";
import { ApiResponse } from "@/types/apiResponse";
export async function sendVerificationEmail(
email:string,
username:string,
verifyCode:string
): Promise<ApiResponse> {
try{
    await resend.emails.send({
        from:"onboarding@resend.dev",
        to:email,
        subject:"Mystery message | Verification code",
        react: VerficcationEmail,
    })
return {
    success:true, message:" verification email send successfully !"
}
}catch(emailError){
console.log("error in sending email",emailError);
return {
    success:false, message:"failed to send email verification"
}
}
}