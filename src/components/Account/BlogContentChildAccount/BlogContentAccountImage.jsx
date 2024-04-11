export default function BlogContentAccountImage({ image }) {
    return (
        <div className="flex justify-center mt-3">
            <img 
                src={image} 
                alt="image post" 
                className="w-[450px] h-[550px] object-cover rounded-xl"
            />
        </div>
    )
}