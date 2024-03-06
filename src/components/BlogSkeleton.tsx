// import React from 'react'

const BlogSkeleton = () => {
    return(
        <div className="border-b p-4 border-slate-200 max-w-screen-lg animate-pulse">
            <div className="flex">
                <div className="flex justify-center flex-col">
                    <div className="flex justify-center flex-col"> 
                        <div className="h-5 w-5 bg-gray-200 rounded-full mb-4"></div>
                    </div>
                </div>
                <div className="h-2 mt-2 ml-2 w-8 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="text-[4px] pl-2 pb-3 flex justify-center flex-col text-slate-500"> &#9679; </div>
                <div className="h-2 w-8 mt-2 ml-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
        
    )

}

        // <div role="status" className="max-w-sm animate-pulse">
        //     <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
        //     <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
        //     <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        //     <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
        //     <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
        //     <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
        //     <span className="sr-only">Loading...</span>
        // </div>
export default BlogSkeleton