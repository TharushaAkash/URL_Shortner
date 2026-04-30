import { nanoid } from "nanoid";
import Url from "../model/url.js";


//Create short code and save in db 
export async function createUrl(req, res){
    try{

        const long_url = req.body.long_url;

        const short_url = nanoid(5);

        
        await Url.create({
            long_url: long_url,
            short_url
        })
        res.status(201).json(
            {
                url: `http://localhost:5000/url/${short_url}`
            }
        )

    }catch(err){
        res.status(500).json(
            {
                error: err.message

            });
    
    }
}


//Verify the url and give the original url
export async function redirectUrl(req, res){
    try{
        const url = await Url.findOne({short_url: req.params.short_url})
        if(url){
            return res.redirect(url.long_url);
        }

        res.status(404).json(
            {
                error: "Url not found"
            }
        )

    }catch(err){
        res.status(500).json(
            {
                error: error.message
            }
        )
    }
}