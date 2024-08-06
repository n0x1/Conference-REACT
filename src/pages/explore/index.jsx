import React from "react";
import Dropdown from "../../components/dropdown"

export default function Explore() {
    return(
        <div className="min-h-screen">
                <h1 className="text-center py-2 mt-4">
                    Explore tutors
                </h1>
                <div className="flex">

                    <div className="border-y-2 border-l-2 border-black bg-zinc-400 min-h-64 ml-4 md:ml-16 w-3/4 rounded-l-xl my-4 flex-col "> 
                        <Dropdown name={'name'} content='content' link='camtmanzo' />
                        <Dropdown name={'Cameron Manzo'} content='I tutor Chem 300, CompSci, Music' link='camtmanzo' />
                    </div>
                    <div className="border-2 border-black bg-gray-500 min-h-64 w-1/4 mr-4 md:mr-16 rounded-r-xl my-4 pl-2 pb-2 flex-col ">
                        <h2 className="p-4 text-2xl text-center"><b>Search Options</b></h2>

                        <div className="flex gap-4 flex-col">
                        <div>
                         <button>Biology</button>
                        </div>
                        <div>
                        <button>Chemistry</button>
                        </div>
                        <div>
                        <button>Math, stats, & CS</button>
                        </div>
                        <div>
                        <button>Physics</button>
                        </div>
                        <div>
                        <button>Language</button>
                        </div>
                        <div>
                        <button>Music</button>
                        </div>
                        </div>
                       
                    </div>
                 
                </div>
        </div>
       
    )
}