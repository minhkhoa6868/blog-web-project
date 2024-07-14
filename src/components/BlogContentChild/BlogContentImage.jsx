export default function BlogContentImage({ image }) {
    return (
        <div className="flex justify-center">
            <img 
                src={image} 
                alt="image post" 
                className="w-[450px] object-cover rounded-xl"
                loading="lazy"
            />
        </div>
    )
}