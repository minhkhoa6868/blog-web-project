export default function UploadImage({ file }) {
  return (
    <div className="flex justify-center items-center">
      <img src={file} className="w-[350px] object-cover" />
    </div>
  );
}
