import React from "react";

export default function Chatuser({ username}) {


    return(
        <div className="bg-slate-400 items-center flex justify-between rounded-md py-2 px-4 mb-2">
        {username}
    </div>
    )
}