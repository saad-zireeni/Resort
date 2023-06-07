/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
function Userprofile() {
  const { email } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    // Retrieve data from localStorage
    const userData = localStorage.getItem("userData");
    const parsedData = JSON.parse(userData);

    axios
      .get(`http://localhost:5000/records/${email}`)
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  console.log(user);
  if (user.length !== 0) localStorage.setItem("userData", JSON.stringify(user));

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div
          className="custom-width"
          style={{
            maxWidth: "700px",
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div className="bg-white shadow-xl rounded-lg p-6">
            <div className="photo-wrapper">
              <FaUser className="w-32 h-32 rounded-full mx-auto text-gray-500" />
            </div>
            <div className="p-6">
              <div className="text-center text-gray-600 text-lg font-semibold mb-4"></div>
              <div className="flex">
                <div className="w-1/2 order-first">
                  <form className="text-lg my-4" id="datas">
                    {user.map((u) => (
                      <>
                        <div className="mb-4">
                          <label
                            htmlFor="username"
                            className="block text-gray-700 font-medium mb-2"
                          >
                            User Name : {u.name}
                          </label>
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="email"
                            className="block text-gray-700 font-medium mb-2"
                          >
                            Email : {u.email}
                          </label>
                        </div>
                      </>
                    ))}
                  </form>
                </div>
              </div>
              <div className="text-center mt-6">
                <Link
                  to="/Conformation"
                  className="text-1xl p-3 bg-yellow-500  px-6  font-medium flex items-center justify-center"
                  href="#"
                  style={{ color: "white" }}
                >
                  Edit profile
                </Link>
                <BiEdit className="ml-1 mt-2" style={{ color: "white" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Userprofile;
