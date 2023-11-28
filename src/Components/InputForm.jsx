import { useState } from 'react';

export default function InputForm()
{
    const [messageData, setMessageData] = useState({
        name: "",
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMessageData({
            ...messageData,
            [name]: value,
        });
    };

    const handleSendButton = (e) => {
        e.preventDefault();
        console.log("name: " + messageData.name + '\n' + "message: " + messageData.message);
    };

    return (
        <div className="h-screen inline-block align-middle m-5">

            <div className="flex items-center justify-left">
                <label className="p-4 gap-4">Enter name</label>
                <textarea className="gap-4 text-2xl text-center" type="text" name="name" value={messageData.name} onChange={handleInputChange}/>
            </div>
           
            <div className="flex items-center justify-center">
                <label className="p-4 gap-4">Enter message</label>
                <textarea className="gap-4 text-2xl text-center " type="text" name="message" value={messageData.message} onChange={handleInputChange}/>
                <button className="w-100 h-50 p-2 m-6 bg-gray-600 rounded-2xl " onClick={handleSendButton}>Send</button>
            </div>
            
        </div>
    );
}
