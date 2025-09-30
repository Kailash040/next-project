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
        from:"you@example.com",
        to:"user@gmail.com",
        subject:"Verify your email",
        react: <Email url="https://example.com" />,
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