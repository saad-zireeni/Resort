import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";

const slides = [
  "https://picsum.photos/200/200?random=1",
  "https://picsum.photos/200/200?random=2",
  "https://picsum.photos/200/200?random=3",
  "https://picsum.photos/200/200?random=4",
];

const Details = () => {
  const [resortData, setResortData] = useState([]);
  const [setAvailability] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchResortData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/resorts/${id}`);
        const data = response.data;
        setResortData(data);
      } catch (error) {
        console.error("Error fetching resort data:", error);
      }
    };

    fetchResortData();
  }, [id]);


  const [redirectToPayment, setRedirectToPayment] = useState(false);

  const handleBooking = () => {
    if (resortData.availability) {
      updateResort();
      setRedirectToPayment(true);
    } else {
      setRedirectToPayment(false);
      alert("Sorry, This Resort is not available at the moment!");
    }
  };

  if (redirectToPayment) {
    return <Navigate to={`/payment/${resortData.id}`} />;
  }

  const updateResort = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/payment/${id}`, {
      });
      if (response.status === 200) {
        setAvailability(false);
      }
    } catch (error) {
      console.log(error);
      // Handle error cases
    }
  };

  return (
    <>
      <section className="py-10 font-poppins dark:bg-gray-800">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="flex flex-wrap mb-24 -mx-4">
            <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
              <Carousel slides={slides} />
            </div>

            <div className="w-full px-4 md:w-1/2">
              <div className="lg:pl-20">
                <div className="mb-6 ">
                  <h2 className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                    {resortData.name}
                  </h2>

                  <p className="block text-2xl font-semibold text-gray-700 dark:text-gray-400 mb-6">
                    <span className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                      Price:{" "}
                    </span>
                    ${resortData.price} / 12 hours
                  </p>
                  <p className="block text-2xl font-semibold text-gray-700 dark:text-gray-400 mb-6">
                    <span className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                      Details:{" "}
                    </span>
                    {resortData.description}
                  </p>
                </div>
                <div className="mb-6">
                  <h2 className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                    Additional Info :
                  </h2>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-xl">
                    <div className="p-3 lg:p-5 ">
                      <div className="p-2 rounded-xl lg:p-6 dark:bg-gray-800 bg-gray-50">
                        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
                          <div className="w-full mb-4 md:w-2/5">
                            <div className="flex ">
                              <span className="mr-3 text-gray-500 dark:text-gray-400">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-calendar-check w-7 h-7"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5 11.793l-3.146-3.147a.5.5 0 0 1 .708-.708L5 10.586l7.646-7.646a.5.5 0 0 1 .708.708l-8 8a.5.5 0 0 1-.708 0z"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    d="M0 2.5A1.5 1.5 0 0 1 1.5 1h13A1.5 1.5 0 0 1 16 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-11zm1.5-1.5a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-13z"
                                  />
                                </svg>
                              </span>
                              <div>
                                <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                  Availability
                                </p>
                                <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                  {resortData.availability
                                    ? "Available"
                                    : "Not Available"}
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div className="w-full mb-4 md:w-2/5">
                            <div className="flex ">
                              <span className="mr-3 text-gray-500 dark:text-gray-400">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-building w-7 h-7"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3 1h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 2v2h10V3H3zm0 3v9h10V6H3zm2 1h2v2H5V7zm4 0h2v2H9V7zm-4 3h2v2H5v-2zm4 0h2v2H9v-2z" />
                                </svg>
                              </span>

                              <div>
                                <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                  City
                                </p>
                                <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                  {resortData.city}
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div className="w-full mb-4 lg:mb-0 md:w-2/5">
                            <div className="flex ">
                              <span className="mr-3 text-gray-500 dark:text-gray-400">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-geo-alt w-7 h-7"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M8 0A6 6 0 0 0 2 6c0 2.166 1.3 4.4 3.563 6.844.37.422.763.842 1.156 1.236a48.01 48.01 0 0 0 1.282 1.17.5.5 0 0 0 .734 0c.41-.395.838-.813 1.28-1.235C12.7 10.4 14 8.166 14 6A6 6 0 0 0 8 0zm0 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
                                  />
                                </svg>
                              </span>

                              <div>
                                <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                  Location
                                </p>
                                <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                  locationURL
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div className="w-full mb-4 lg:mb-0 md:w-2/5">
                            <div className="flex ">
                              <span className="mr-3 text-gray-500 dark:text-gray-400">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-star-fill w-7 h-7"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M7.293 1.143L5.308 4.98 1.34 5.59c-.645.094-.904.886-.445 1.326l3.088 3.006-.745 4.348c-.133.786.687 1.374 1.366.975L8 13.093l3.402 1.824c.68.4 1.5-.189 1.366-.975l-.745-4.348 3.088-3.006c.459-.44.2-1.232-.445-1.326L10.692 4.98 8.707 1.143a.69.69 0 0 0-1.414 0z" />
                                </svg>
                              </span>

                              <div>
                                <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                  Rating
                                </p>
                                <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                  {resortData.rating}
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-6 " />
                <div className="flex gap-4 mb-6">
                  <Link
                    to={
                      resortData.availability
                        ? `/payment/${resortData.id}`
                        : "/resorts"
                    }
                    className={`w-full px-4 py-3 text-center text-gray-100 bg-blue-600 border border-transparent dark:border-gray-700 ${
                      resortData.availability
                        ? "hover:border-blue-500 hover:text-blue-700 hover:bg-blue-100 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-900"
                        : "opacity-50 cursor-not-allowed"
                    } rounded-xl`}
                    onClick={handleBooking}
                  >
                    Book now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
