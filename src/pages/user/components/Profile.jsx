import { Card, Dropdown } from "flowbite-react";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import axiosInstance from "../../../helper/axios-instance.js";

function Profile() {

    const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {

            setLoading(true);

            if (cookies.accessToken) {
                try {
                    const response = await axiosInstance.get("/users/me", {
                        headers: {
                            Authorization: `Bearer ${cookies.accessToken}`
                        }
                    });
                    setLoading(false);
                    setUserData(response.data);
                    console.log(response.data);
                } catch (error) {
                    setLoading(false);
                    console.error("Error fetching user data:", error);
                }
            }
        };

        fetchUserData();
    }, [cookies.accessToken]);

    return (
        <div className={``}>
            {loading && <div>Loading...</div>}
            {userData && (
                <Card className="max-w-sm">
                    <div className="flex justify-end px-4 pt-4">
                        <Dropdown inline label="">
                            <Dropdown.Item>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Edit
                                </a>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Export Data
                                </a>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Delete
                                </a>
                            </Dropdown.Item>
                        </Dropdown>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <img
                            alt="avatar"
                            height="96"
                            src={"src/assets/img/roleta_da_picanha.jpeg"}
                            width="96"
                            className="mb-3 rounded-full shadow-lg"
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{ userData.username }</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{ userData.email }</span>
                        <div className="mt-4 flex space-x-3 lg:mt-6">
                            <a
                                href="#"
                                className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                            >
                                Add friend
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                            >
                                Message
                            </a>
                        </div>
                    </div>
                </Card>
            )}
        </div>
    );
}

export default Profile;