import { use, useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import Header from "../Components/header";
import axios from "axios";
import toast from "react-hot-toast";
import { Atom } from "react-loading-indicators";



export default function HomePage(){

    const [url, setUrl] = useState("");
    const [showModel, setShowModel] = useState(false)
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setUrl(e.target.value);
    }

    async function handleSubmit() {

        try{
            setLoading(true);
            console.log(`url is: ${url}`)

            const response = await axios.post(import.meta.env.VITE_API_URI , 
                {
                    long_url: url
                }
            )

            if(response){
                console.log(`url: ${response.data.url}`)
                setUrl(response.data.url)
                setTimeout(()=> {
                    setShowModel(true);
                    toast.success(response.data.message);
                }, 1000);
                
                
            }
            }catch(err){
                toast.error(err.response.data.message);

            }finally{
                setTimeout(()=>{
                    setLoading(false);
                }, 1000);  //1 second timeout added for better smoot loading animation
            }
        
        }

        


    return(



        
        <div className="flex h-screen">

            {/* loading screen */}

            {loading &&(
                <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
                    <Atom text="Getting URL...."  style={{ fontSize: "30px", color: "#ffffff", fontWeight: "bold"}}   color={["#32cd32", "#327fcd", "#cd32cd", "#cd8032"]} speedPlus="-2" />
                    </div>
            )}

            {/* popup model */}
            {showModel && (
                <div className="flex inset-0 fixed bg-accent justify-center items-center">

                    {/* popup Card */}
                    <div className="w-[400px] h-[200px] bg-white text-center rounded-xl p-3 relative">
                        <h2 className="font-bold text-2xl text-[#05df72] mt-2">Shotend URL</h2>


                        {/* Close button */}
                        <button
                            onClick={()=> 
                                {
                                    setShowModel(false);
                                    setUrl("");
                                }}
                            className="absolute top-2 right-3 text-3xl text-red-500 cursor-pointer hover:text-red-600"
                            >
                                <IoCloseCircleSharp />
                            </button>
                        

                        <input 
                            value={url}
                            readOnly
                            className="w-full bg-amber-200 border rounded-md p-2 mt-6 border-dashed border-[#2F2FE4] focus:outline-none"
                        />


                        <button
                            onClick={()=> {
                                navigator.clipboard.writeText(url);
                                setShowModel(false);
                                setUrl("");
                                toast.success("URL Copied!");
                            }
                            }
                            className="w-[100px] bg-[#2F2FE4] rounded-xl p-2 mt-3 text-white font-bold cursor-pointer hover:bg-transparent hover:text-[#2F2FE4] hover:border-2 hover:border-[#2F2FE4]"
                            >
                            Copy URL
                        </button>


                    </div>

                </div> 
            )}       




            <Header />
            {/* background */}
            <div className="w-full h-screen bg-second flex justify-center items-center">

                {/* input card */}
                <div className="w-[500px] h-[250px] bg-primary rounded-3xl justify">

                    {/* text div */}
                    <div className="text-[#05df72] text-center p-3 font-bold text-2xl">
                        <h1>URL Shortner</h1>
                    
                    </div>

                    {/* input div */}
                    <div className="text-white mt-3 p-3 font-bold flex items-center justify-center">
                        <label className="items-center text-[#05df72]">URL:</label>
                        <input
                            type="text"
                            placeholder="Paste your url!"
                            value={url}
                            name="url"
                            onChange={handleChange}
                            required
                         className="p-2 ml-3 border-2 border-amber-300 rounded-xl focus:outline-none focus:ring-amber-300">

                        </input>
                    </div>

                    {/* button div */}

                    <div className="flex mt-3 justify-center">
                        <button onClick={handleSubmit} className="bg-amber-300 w-[100px] rounded-2xl font-bold p-1 cursor-pointer hover:bg-transparent hover:text-amber-300 hover:border-2 hover:border-amber-300">Get URL</button>
                    </div>
                    

                </div>

            </div>

        </div>
    )
}
