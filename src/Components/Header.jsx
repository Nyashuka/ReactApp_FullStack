import { useEffect, useState } from "react";
import reactLogo from "../assets/react.svg"


export default function Header()
{
    const [userData, setUserData] = useState({});
    
    useEffect( () =>
    {
        async function GetUserData()
        {
            const response = await fetch("https://randomuser.me/api/");
            const jsonUserData = await response.json();   
            const user = jsonUserData.results[0];

            setUserData({ 
                nameTitle:user.name.title, 
                firstname:user.name.first, 
                lastname:user.name.last, 
                image: user.picture.medium 
            });
        }    
        
        GetUserData();

    }, []);
    
    return (
        <nav className="flex align-top items-center p-4 gap-4 bg-purple-600">
            <img src={!!userData && userData.image} alt="React logo" className="rounded-full"/>
            <p  className="flex gap-6 text-2xl">
                {!!userData && userData.nameTitle + ". " + userData.firstname + " " + userData.lastname}
            </p>
        </nav>
    );
}