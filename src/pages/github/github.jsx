import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import TimeAgo from 'timeago-react';
import { URL } from '../../api/config';

const Github = () => {
    const [state, setState] = useState({})

    const HandleApi = () => {
        URL
        .then((res) => {
            // const data = res.data.items.filter(item => Math.max(item.stargazers_count))
            setState(res.data)
        })
        .catch((err) => err)
    }

    useEffect(()=> {
        HandleApi()
    },[])

  return (
    <>
    <div className='mx-auto'>
    <NavLink  to="/" className="nav-logo" activeclassname="bg-[#fff]">
        Bosey
        <i className="fa fa-code"></i>
    </NavLink>
    {
        state?.items?.filter((item, idx) => idx < 20).map(item => (
            <div className='my-5 w-full' key={item.id}>
            <div className="flex flex-col w-full items-center shadow-md md:flex-row md:max-w-full" key={item.id}>
                <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={item.owner.avatar_url} alt="Owner Avater"/>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray"> {item.full_name}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description ? item.description : "No Description Available"}</p>
                    <div className="flex items-center mt-2.5 mb-5">
                    <button className="inline-flex items-center text-sm font-medium text-center text-gray">{`Stars: ${item.stargazers_count}`}
                     <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                     </button>
                    <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray">{`Issues: ${item.open_issues_count}`}
                     </button>
                        <span className="text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 ml-3">
                          Submitted <TimeAgo
                            datetime={item.created_at}
                            locale='en'
                            /> by {item.name}
                        </span>
                    </div>
                </div>
            </div>
            </div>
        ))
    }
    </div>
</>
  )
}

export default Github