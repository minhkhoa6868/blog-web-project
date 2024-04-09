export default function BlogContentImage({ image }) {
    return (
        <div className="flex justify-center">
            <img 
                src={image} 
                alt="image post" 
                className="w-[500px] h-[600px] object-cover rounded-xl"
            />
        </div>
    )
}