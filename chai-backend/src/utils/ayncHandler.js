const asyncHandler = (requestHandler) =>{
    return (req, res, next) =>{
        Promise.resolve(requestHandler(req, res, next)).catch((err)=> next(err))
    }
}

export {asyncHandler}


//TODO: try catch way

/**
 * 
 *    const asyncHandler = () => {}
      const asyncHandler = (func) => () => {}
      const asyncHandler = (func) => async () => {}


      const asyncHandler = (fn) => {
        try{
            await fn(req,res,next)
            
        }catch(error){
            res.satatus(error.code || 500).json({
                success: false,
                message:error.message
            })

        }
      }
 */




