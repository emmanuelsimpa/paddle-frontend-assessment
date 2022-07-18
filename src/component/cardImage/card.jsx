import React from 'react'

export const CardWithImage = () => {
  return (
    <div>
        <div className="max-w-sm bg-white border border-gray-200 p-2 shadow-md dark:bg-[#fff] dark:border-gray-700">
            <a href="#">
                <img className="" src="https://image.shutterstock.com/image-photo/man-lying-on-sofa-reading-260nw-1612678756.jpg" alt=""/>
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-dark">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-fuchsia-400">
                <svg height="80" width="90"><g fill="none"><path stroke="fuchsia" d="M5 40 l75 0" /></g></svg>
                    Read more
                </a>
            </div>
        </div>
    </div>
  )
}


export const CardWithOutImage = () => { 
    return(
    <div className="max-w-sm bg-white border border-gray-200 p-2 shadow-md dark:bg-[#fff] dark:border-gray-700">
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-dark">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-fuchsia-400">
            <svg height="80" width="90"><g fill="none"><path stroke="fuchsia" d="M5 40 l75 0" /></g></svg>
                Read more
            </a>
        </div>
     </div>
)}