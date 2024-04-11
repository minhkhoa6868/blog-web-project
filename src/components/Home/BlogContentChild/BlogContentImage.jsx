export default function BlogContentImage({ image }) {
    return (
        <div className="flex justify-center">
            <img 
                src={image} 
                alt="image post" 
                className="w-[450px] h-[500px] object-cover rounded-xl"
            />
        </div>
    )
}