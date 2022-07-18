import React from 'react'
import  {CardWithImage, CardWithOutImage } from '../../component/cardImage/card'
import NavBlog from '../../component/navBlog/navblog'
import './styles.scss'

const Blog = () => {
    const year = new Date().getFullYear()
  return (
    <div className='blog'>
    <div className="container mx-auto">
    <NavBlog/>
    </div>
    <div className='blog-sec-one'>
        <div className='blog-cont'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
                <div>
                    <div className='blog-cont-col'>
                        <div className="blog-cont-shap">
                            
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
            <div className="blog-lay">
                <div className="blog-lay-title">
                <p className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300">
                <svg height="80" width="90"><g fill="none"><path stroke="white" d="M5 40 l75 0" /></g></svg>
                <span>BlOG</span>
                </p>  
                </div>
                <div className="blog-lay-sub">
                    <p className='text-4xl text-white'>Articles and News</p>
                </div>
            </div>
        </div>
    </div>
    <div className="search-cont mx-auto">
        <div className='container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 bdgg'>
            <div>
                <div>
                    <p className='text-3xl py-3'>Latest From The Blog</p>
                    <p className='text-sm leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur excepturi dicta inventore, tenetur eos minima ratione aliquid! Aut minus id modi fugiat! Culpa laudantium assumenda optio sequi tempora officia possimus.</p>
                </div>
            </div>
            <div className=''>
                <div className='search-wrap'>
                <form  className='search-wrap-fold'>   
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                <div className="relative">
                    <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-[#fff] rounded-full border border-gray-300 focus:border-gray dark:bg-[#fff] dark:border-gray-600 dark:placeholder-gray-400 dark:text-black outline-none" placeholder="Search here ..." required/>
                    <div className="flex absolute inset-y-0 right-8 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                </div>
                </form>
                </div>
                
            </div>
        </div>
    </div>
    <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
            {
                Array.apply(null, { length: 6 }).map((e, i) => (
                    <CardWithImage key={i}/>
                ))
            }
        </div>
        <div className='my-10 w-full flex justify-start'>
            <div className='' style={{width: '50%'}}>
            <h2 className='text-3xl py-3'>Recent Articles</h2>
            <p className='text-sm leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. a ipsa odit animi error quia officia! Cum iure provident temporibus non nostrum. Reiciendis magnam esse, eligendi maxime quos beatae cupiditate?</p>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
            {
                Array.apply(null, { length: 3 }).map((e, i) => (
                    <CardWithOutImage key={i}/>
                ))
            }
        </div>
        <div className='flex justify-center'>
            <button className="bg-purple-600 hover:bg-blue-500 text-white font-bold py-2 px-8 my-5 rounded-full" type="button">
                LOAD MORE
            </button>
        </div>


    </div>
    <div>
        <div className='footer-sec-one'>
        <div className='footer-cont'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 flex items-center h-[25vh]'>
                <div>
                    <div  className="container mx-auto">
                        <div className='sec-two-grid'>
                        <p className='text-white text-3xl py-5'>Got a Question?</p>
                        <p className='text-white mx-auto'>See how Metricks can help your business grow with best affiliate marketing tracking software.</p>
                        <p className="inline-flex items-center py-2 text-sm font-medium text-center text-fuchsia-600 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300">
                        <span>Contact Us</span>
                        <svg aria-hidden="true" className="mr-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </p>  
                        </div>
                    </div>
                </div>
                <div className='footer-top-right'>
                <div className='flex justify-center'>
                    <div className='footer-cont-col'>
                    </div>
                </div>
                <div className="footer-cont-shap">
                </div>
                </div>
            </div>
        </div>
        </div>
    </div>

        <div className="blog-footer">
        <div className="blog-footer-wrap">
        <div className='grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-2 px-5 blog-footer-wrap-icon'>
                <div><i className="fa fa-youtube-play text-black" aria-hidden="true"></i></div>
                <div><i className="fa fa-facebook-official text-gray-500" aria-hidden="true"></i></div>
                <div><i className="fa fa-linkedin-square text-gray-500" aria-hidden="true"></i></div>
                <div><i className="fa fa-instagram text-gray-500" aria-hidden="true"></i></div>
                <div><i className="fa fa-twitter-square text-gray-500" aria-hidden="true"></i></div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 px-5 pt-2 blog-footer-wrap-icon'>
                <div className='text-gray-500'><p className='text-sm'>Terms of services</p></div>
                <div className='text-gray-500'><p className='text-sm'>Privacy policy</p></div>
            </div>
            <div className='px-5 pt-4 blog-footer-wrap-icon'>
                <div className='text-gray-500'>
                  <p className='text-sm'>Copyright {year} @ Peddle Technologies. All Rights Reserved.</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Blog