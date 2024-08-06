import React from "react";

export default function Info() {
    return(
<div className="relative h-96 mx-4">
<div className="rounded-md flex items-center text-center w-fit flex py-2 flex-col bg-zinc-800 mt-4 px-4">
            <h2 className="text-2xl justify-center" >Browse tutors</h2>
            <p>Browse tutors and find one that fits your needs</p>
        </div>
        <div className="rounded-md items-center text-center flex flex-col absolute px-4 py-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-fit justify-center bg-zinc-800 mt-4">
                <h2 className="text-2xl">Connect</h2>
                <p>Browse tutors and find one that fits your needs</p>
                
        </div>
        <div  id='info-container' className="items-center text-center flex flex-col py-2 rounded-md absolute px-4 right-0 w-fit bg-zinc-800 mt-4">
                <h2 className="text-2xl">Receive flexible support</h2>
                <img src='../../../public/connection.png'></img>
                <p>Browse tutors and find one that fits your needs</p> 
        </div>

</div>

      
    )
}