const express=require("express")



exports.testing = async (req,res)=>{

    try{
        const {email} = await req.body;
        console.log(email);
        return res.status(400).json({
            success:true,
            message:"wao",
            data:email
        })
        

    }
    catch(error){

        console.log("error testing is runnig",error);

    }

}

