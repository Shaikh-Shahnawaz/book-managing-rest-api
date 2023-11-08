exports.centralErrorHandler= async(err,req,res,next)=>{
    let errMsg = JSON.stringify({error:err.message})
    res.status(500).end(errMsg)    
    
    }