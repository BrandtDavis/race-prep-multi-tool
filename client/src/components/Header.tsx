import Nav from "./Nav";
import { useEffect, useState } from "react";

const getUserData = async () => {
    const response = await fetch(
      'http://localhost:5000/get_user_data?' + new URLSearchParams({
            user_id: "1",
        }),
    { 
        method: 'GET',
        headers: {
            Accept: 'application/form-data',
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();
    console.log(data)
    return data
};

function Header() {
    const [userName, setUserName] = useState("User Unavailable");

    useEffect(() => {
        (async () => {
            const userData = await getUserData()
            setUserName(`${userData["first_name"]} ${userData["last_name"]}`)
        })()
    }, []);

    return (
        <header className="fixed top-0 z-[1] mx-auto mb-50 flex w-full max-w-8xl flex-wrap items-center justify-between border-b border-gray-100 bg-gray-800 p-[2em] font-sans font-bold uppercase text-text-primary backdrop-blur-[100px] dark:border-gray-800 dark:bg-d-background dark:text-d-text-primary">
            <h3 className="text-gray-400">{ userName }</h3>
            <Nav />
        </header>
    )
  }
  
  export default Header;
