import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Posts = () => {
    const [blog, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {

        const fetchData = async () => {
            setLoading(true);
            try {
                const result = await axios.get(`${process.env.REACT_APP_BLOG_API}`);
                setTimeout(() => {
                    setLoading(false);
                }, 300)

                setBlogs(result.data.data)

            } catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, []);
    return (
        <>
            {/* heading */}

            {loading ? <div className="text-center mt-12">
                <div role="status">
                    <svg className="inline w-full h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="text-blue-600 text-base">Loading...</span>
                </div>
            </div> : <>
                <h3 className='mt-3 text-center font-bold text-xl'>Blogs</h3>
                <div className='flex flex-wrap justify-center mt-4'>
                    {blog.map((blog) => {
                        return <div className="max-w-sm rounded overflow-hidden shadow-lg m-2" key={blog._id}>
                            <img className="h-60 w-96 object-cover" src={blog.image} alt="Sunset in the mountains" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">
                                    <Link to={`/blog/${blog._id}`}>
                                        {blog.title}
                                    </Link>

                                </div>
                                <p className="text-gray-700 text-base">
                                    {blog.description}
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                            </div>
                        </div>
                    })}



                </div></>

            }


            {/* blogs */}

        </>
    )
}

export default Posts