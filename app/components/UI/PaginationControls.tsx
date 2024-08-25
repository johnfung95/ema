import * as React from "react"
import PageIndex from "./PageIndex"

const PaginationControls: React.FC = () => {
    return(
    <div className="flex mt-8 justify-around items-center">
        <button className="p-2 bg-zinc-500 rounded-xl hover:cursor-pointer">Last Page</button>
        <PageIndex pageNum={5}/>
        <button className="p-2 bg-zinc-500 rounded-xl hover:cursor-pointer">Next Page</button>
    </div>
    )
}

export default PaginationControls