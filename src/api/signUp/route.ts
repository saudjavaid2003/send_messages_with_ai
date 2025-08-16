import {dbConnect} from '@/lib/dbConnect';
import { UserModel } from '@/model/User';
import VerificationEmail from '../../../emails/VerificationEmail';

export async function POST(request: Request) { 
    await dbConnect();
    try{
        const {enail,password,username}=await request.json();
        

    }
    catch(error){
        console.log(error,"error signup user")
        return Response.json({
            success:false,
            message:"error singup user "
        }, {
            status: 500
        });
    }
}