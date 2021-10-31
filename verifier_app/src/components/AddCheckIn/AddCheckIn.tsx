import './AddCheckIn.css';
import {CgProfile} from "react-icons/all";
import {useQRCode} from "next-qrcode";
import {v4 as uuidv4} from 'uuid';
import {getHotspotCredentials} from "../Api/hotspot";
import QRCode from "react-qr-code";
import {useEffect, useState} from "react";
import {addClient} from "../Api/apiRequests";

export const AddCheckIn = () => {
    const qrID = uuidv4();
    const [qrcode, setQR] = useState("<QRCode value={`${qrID}#${hotspotCredentials}`}/>");

    const [fname ,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [dob,setDob]=useState("");
    const [mob,setMob]=useState("");
    const [photo, setPhoto] = useState("prasad zore");

    useEffect(() => {

        const fetchCredentials = async () => {
            const credentials = await getHotspotCredentials();
            // @ts-ignore
            setQR(<QRCode value={`${qrID}#${credentials}`}/>);
        };

        fetchCredentials();

    }, []);

    const addNewClient = async () => {
        const params = {
            fname : fname,
            lname : lname,
            mob : mob,
            photo:photo,
            dob : dob
        }
        const response = await addClient(params);
        if (response !== undefined){
            if (response === "Success"){
                alert("New User added successfully");
            }
        }

    }

    return (
        <div id={"AddCheckIn"}>
            <div>
                <div className={"flex flex-col items-center justify-evenly h-full w-full"} id={"profileInput"}>
                    <div className={"flex items-center justify-center align-center"}>
                        <CgProfile className={""} size={"35%"}/>
                    </div>
                    <div className={"flex"}>
                        <div>First Name</div>
                        <div>
                            <input type="password" id="password"
                                   onChange={e => setFname(e.target.value)}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                        </div>
                    </div>
                    <div className={"flex"}>
                        <div>Last Name</div>
                        <div>
                            <input type="password" id="password"
                                   onChange={e => setLname(e.target.value)}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                        </div>
                    </div>
                    <div className={"flex"}>
                        <div>Date Of Birth</div>
                        <div>
                            <input type="password" id="password"
                                   onChange={e => setDob(e.target.value)}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                        </div>
                    </div>
                    <div className={"flex"}>
                        <div>Mobile Number</div>
                        <div>
                            <input type="password" id="password"
                                   onChange={e => setMob(e.target.value)}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                        </div>
                    </div>
                    <div>
                        <button className="bg-blue-600 rounded-full" onClick={addNewClient}>
                            Add Client
                        </button>
                    </div>
                </div>
            </div>
            <div className={"flex justify-center items-center"}>
                <div>
                    {qrcode}
                </div>
            </div>
        </div>
    )
}
