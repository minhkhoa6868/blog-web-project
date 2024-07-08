import { Outlet, Link } from "react-router-dom";
import DeleteButton from "../DeleteButton";

export default function BlogContentHeader({
  onSelect,
  accountImage,
  name,
  time,
}) {
  return (
    <div className="flex flex-col gap-3 px-[20px]">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <Link to="/account" onClick={() => onSelect("account")} key="account">
            <img
              src={accountImage}
              alt="account-img"
              className="w-[50px] h-[50px] rounded-full object-cover border border-gray-300 bg-white"
            />
          </Link>
          <div>
            <Link
              className="font-semibold"
              to="/account"
              onClick={() => onSelect("account")}
              key="account"
            >
              <span>{name}</span>
            </Link>
            <div className="flex gap-2 text-gray-400 text-[0.85rem] fill-sky-400">
              <span id="time">{time} hour</span>
              <div id="public">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  height="22"
                  width="12"
                >
                  <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <DeleteButton />
      </div>
      <p className="text-justify text-[15px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, quod quaerat quae quasi quisquam voluptates, quod quaerat
        quae quasi quisquam voluptates, quod quaerat quae quasi quisquam
        voluptates, quod quaerat quae quasi quisquam voluptates, quod quaerat
        quae quasi quisquam voluptates, quod quaerat quae quasi quisquam
        voluptates, quod quaerat quae quasi quisquam voluptates, quod quaerat
        quae quasi quisquam voluptates, quod quaerat quae quasi quisquam
      </p>
      <Outlet />
    </div>
  );
}