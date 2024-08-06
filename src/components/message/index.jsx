import React from "react";

export default function Message({ content, type}) {

const messageClass = type === 'sender' ? 'bg-blue-400 ml-auto rounded-l-xl rounded-tr-xl' : 'bg-gray-800 rounded-r-xl rounded-tl-xl';
    
return(
    
    <div>
        <p className={`max-w-prose w-fit p-1 ${messageClass}`}>
            {content}
        </p>
    </div>
)
  
}