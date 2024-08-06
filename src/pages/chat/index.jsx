import React, { useEffect, useRef } from "react";
import Message from '../../components/message'

export default function Chat() {

    const editableDivRef = useRef(null);

    useEffect(() => {
        const editableDiv = editableDivRef.current;

        // Function to handle keypress event
        const handleKeyPress = (event) => {
            if (event.key === 'Enter' && !event.shiftKey) { // Check for Enter key without Shift
                event.preventDefault(); // Prevent adding a new line
                console.log('Enter pressed');
                handleSendMessage();
            }
        };

        if (editableDiv) {
            editableDiv.addEventListener('keypress', handleKeyPress);

            return () => {
                editableDiv.removeEventListener('keypress', handleKeyPress);
            };
        }
    }, []);

    const handleSendMessage = () => {
        const editableDiv = editableDivRef.current;
        if (editableDiv) {
            const message = editableDiv.innerText.trim();
            if (message) {
                console.log('Message to send:', message);
                // Send or handle the message, TODO
                editableDiv.innerText = '';
            }
        }
    };

    return(
        <div className="min-h-screen">
            <h1 className="text-center mt-4">Chat</h1>
            <div className="flex">
                <div className="border-t-2 p-2 border-l-2 w-1/4 border-black bg-zinc-500 h-custom-500 ml-4 md:ml-16 rounded-tl-xl mt-4 flex flex-col"> 
                    <p className="bg-slate-400 rounded-md px-4">user Online status</p>
                </div>
                <div className="border-t-2 border-l-2 border-r-2 w-2/3 border-black bg-zinc-400 h-custom-500 mr-4 md:mr-16 rounded-tr-xl mt-4 p-2 flex flex-col gap-2"> 
                    <Message type='sender' content='Hey! Do you have availability on Thursdays for Bio100 tutoring?'/>
                    <Message type='receiver' content='Yep, noting that on my schedule!' />
                </div>
            </div>

            <div className="flex">
            <div className="border-l-2 border-b-2 border-t-2 justify-center flex border-l-2 w-1/4 border-black bg-zinc-800 ml-4 md:ml-16 rounded-bl-xl mb-4 p-2 flex flex-col gap-2"> 
                   settings
            </div>
            <div className="border-2 justify-center flex border-l-2 w-2/3 border-black bg-zinc-400 mr-4 md:mr-16 rounded-br-xl mb-4 p-2 flex flex-col gap-2"> 
                  <div id="editableDiv" ref={editableDivRef} contentEditable='true' className="border-2 border-gray-600 bg-gray-500 rounded-lg px-2"></div>
            </div>
            </div>
            
        </div>
    )
}
