import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='lg:flex gap-8 mx-5 p-5 justify-between lg:mx-16 items-center bg-gray-50 shadow-2xl  rounded-2xl lg:p-10 mt-3 md:mt-10'>
                <h1 className='text-4xl sm:text-center lg:text-6xl'>This is a question <br /><span className='text-red-600'>Blogs</span></h1>
                <img style={{width:'300px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgQJon3OVWXvODkktTNpnB23QSDuSmUC9o8Q&usqp=CAU" alt="" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-5 lg:mt-16 mb-5 '>
                <div className='border my-8 p-5 rounded-2xl mx-5 shadow-xl'>
                    <div className='flex justify-between mb-3'>
                        <h2 style={{ fontFamily: 'cursive' }} className='text-2xl text-gray-400 font-bold'>Tell us the differences between uncontrolled and controlled components ?</h2>
                        <span className='text-lg font-bold bg-red-600 py-1 px-3 rounded-lg text-white h-10'>QA</span>
                    </div>
                    <p className='text-gray-600'><b>Ans:</b> A controlled component is one where the value of the form element is controlled by the React component state. The component state is the single source of truth for the value of the input element. In a controlled component, whenever a user types something into the input element, the onChange event handler of the input element is triggered, which in turn updates the component state. Then, the component re-renders with the new state value, which in turn updates the value of the input element</p>
                </div>
                <div className='border my-8 p-5 rounded-2xl mx-5 shadow-xl'>
                    <div className='flex justify-between mb-3'>
                        <h2 style={{ fontFamily: 'cursive' }} className='text-2xl text-gray-400 font-bold'>How to validate React props using PropTypes ?</h2>
                        <span className='text-lg font-bold bg-red-600 py-1 px-3 rounded-lg text-white h-10'>QA</span>
                    </div>
                    <p className='text-gray-600'><b>Ans:</b> 
                    <ul>
                        <li>1. any : The prop can be of any data type.</li>
                        <li>2. bool : The prop should be a Boolean.</li>
                        <li>3. number : The prop should be a number.</li>
                        <li>4. string : The prop should be a string.</li>
                        <li>5. func : The prop should be a function.</li>
                        <li>6. array : The prop should be an array.</li>
                        <li>7. object : The prop should be an object.</li>
                    </ul>
                    </p>
                </div>
                <div className='border my-8 p-5 rounded-2xl mx-5 shadow-xl'>
                    <div className='flex justify-between mb-3'>
                        <h2 style={{ fontFamily: 'cursive' }} className='text-2xl text-gray-400 font-bold'>Tell us the difference between nodejs and express js. ?</h2>
                        <span className='text-lg font-bold bg-red-600 py-1 px-3 rounded-lg text-white h-10'>QA</span>
                    </div>
                    <p className='text-gray-600'><b>Ans:</b> Js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>
                </div>
                <div className='border my-8 p-5 rounded-2xl mx-5 shadow-xl'>
                    <div className='flex justify-between mb-3'>
                        <h2 style={{ fontFamily: 'cursive' }} className='text-2xl text-gray-400 font-bold'>What is a custom hook, and why will you create a custom hook? ?</h2>
                        <span className='text-lg font-bold bg-red-600 py-1 px-3 rounded-lg text-white h-10'>QA</span>
                    </div>
                    <p className='text-gray-600'><b>Ans:</b> Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
                </div>
            </div>

        </div>
    );
};

export default Blog;