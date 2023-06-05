import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useAuthCall from "../hooks/useAuthCall";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const { logout } = useAuthCall();

  return (
    <>
      <nav
        className="flex justify-around py-4 bg-white/40
            backdrop-blur-md w-full
            fixed top-0 left-0 right-0 z-10"
      >
        <div className="flex items-center">
          <Link to="/" className="cursor-pointer">
            <h3 className="text-2xl font-bold text-cyan-800">Blog-app</h3>
          </Link>
        </div>

        {user ? (
          <div className="flex items-center space-x-5 ">
            <Link
              to="/profile"
              state={{ user }}
              className="text-blue-500 cursor-pointer"
            >
              {user?.username}
            </Link>
            <Link to={"/login"}>
              <span
                onClick={logout}
                className="font-semibold w-20 flex items-center text-gray-600"
              >
                Logout
                <svg
                  fill="rgb(75, 85, 99)"
                  width="24px"
                  height="24px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="-115.49 -115.49 615.95 615.95"
                  xmlSpace="preserve"
                  stroke="rgb(75, 85, 99)"
                  strokeWidth="13"
                  transform="rotate(0)"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#CCCCCC"
                    strokeWidth="12.319072"
                  />
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <g id="Sign_Out">
                        {" "}
                        <path d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03 C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03 C192.485,366.299,187.095,360.91,180.455,360.91z" />{" "}
                        <path d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279 c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179 c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z" />{" "}
                      </g>{" "}
                      <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </span>
            </Link>
          </div>
        ) : (
          <div className="flex items-center space-x-5">
            <Link
              to="/register"
              className="flex text-gray-600 hover:text-indigo-500
          cursor-pointer transition-colors duration-300"
            >
              <svg
                className="fill-current h-5 w-5 mr-2 mt-0.5"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path d="M12 0L11.34 .03L15.15 3.84L16.5 2.5C19.75 4.07 22.09 7.24 22.45 11H23.95C23.44 4.84 18.29 0 12 0M12 4C10.07 4 8.5 5.57 8.5 7.5C8.5 9.43 10.07 11 12 11C13.93 11 15.5 9.43 15.5 7.5C15.5 5.57 13.93 4 12 4M12 6C12.83 6 13.5 6.67 13.5 7.5C13.5 8.33 12.83 9 12 9C11.17 9 10.5 8.33 10.5 7.5C10.5 6.67 11.17 6 12 6M.05 13C.56 19.16 5.71 24 12 24L12.66 23.97L8.85 20.16L7.5 21.5C4.25 19.94 1.91 16.76 1.55 13H.05M12 13C8.13 13 5 14.57 5 16.5V18H19V16.5C19 14.57 15.87 13 12 13M12 15C14.11 15 15.61 15.53 16.39 16H7.61C8.39 15.53 9.89 15 12 15Z" />
              </svg>
              Register
            </Link>
            <Link
              to="/login"
              className="flex text-gray-600 hover:text-indigo-500 
                    cursor-pointer transition-colors duration-300
                    font-semibold "
            >
              <svg
                className="fill-current h-5 w-5 mr-2 mt-0.5"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z" />
              </svg>
              Login
            </Link>
          </div>
        )}
      </nav>
      <div className="h-[64px]"></div>
    </>
  );
};

export default Navbar;
