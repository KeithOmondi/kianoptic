import React from 'react'
import styles from '../../styles/styles'
import { blogData } from '../../static/data'
import { Link } from "react-router-dom"

const Blog = () => {
  return (
    <div className={`${styles.section}`}>
    <div className="flex items-center justify-between">
    <hr className="flex-grow h-0.5 bg-black" />
    <h2 className="text-center uppercase text-[20px]">blog</h2>
    <hr className="flex-grow h-0.5 bg-black" />
  </div>
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-4 xl:gap-[30px] mb-12 border-0 pb-11">
        {
            blogData && blogData.map((i, index) =>(
                <div>
                    <img src={i.image_Url} alt="" key={index}
                style={{height: "10rem"}}
                className='w-full'
                />
                <Link to="/" className='text-[#0000FF]'>
                {
                    i.title
                }
                </Link>
                <p>
                    {i.paragraph}{"..."}
                </p>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Blog
