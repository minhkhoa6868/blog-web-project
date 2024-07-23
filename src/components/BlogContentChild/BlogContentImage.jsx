export default function BlogContentImage({ image }) {
    return (
        <div className="flex justify-center">
            <img 
                src={image} 
                alt="image post" 
                className="sm:w-[450px] w-[350px] object-cover rounded-xl"
                loading="lazy"
            />
        </div>
    )
}