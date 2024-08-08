import React from "react";

export default function Subjectdropdown() {
    return(
        <div className="flex mt-4">
        (If tutor) Subjects: 
        <select className="bg-gray-500 min-w-48 px-2 hover:pointer-cursor rounded-xl mx-2">
        <option value="math">Biology</option>
         <option value="science">Chemistry</option>
         <option value="history">Language</option>
         <option value="english">Math, Stats, CS</option>
        <option value="history">Physics</option>
        </select>
    </div>
    )
}