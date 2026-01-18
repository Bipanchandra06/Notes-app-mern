import ratelimit from "../config/upstash.js"; 
const ratelimiter = async (req, res, next) => {
    try {
        const {success} = await ratelimit.limit(req.ip);
        if (!success) {
            return res.status(429).send("Too many requests. Please try again later.");
        }   
        next();

    }catch(err){
        return res.status(500).send("Server Error");
        next();
    }



}

export default ratelimiter;