
export const Title = ({ children }) => {
    return (
        <div className='flex flex-col items-start '>
            <h2 className='text-start text-[4vw] lg:text-[3vw] flex-wrap justify-center  text-red-600 font-bold my-2 mt-16'>{children}</h2>
            <div className='border-2 border-red-400 mb-10 w-1/2 text-center'></div>
        </div>
    )
}
