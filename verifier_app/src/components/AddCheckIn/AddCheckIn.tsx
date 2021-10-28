import './AddCheckIn.css';
import {CgProfile} from "react-icons/all";
import {useQRCode} from "next-qrcode";

export const AddCheckIn = () => {
    const { inputRef } = useQRCode<HTMLImageElement>({
        text: 'https://github.com/prasadthx',
        options: {
            type: 'image/jpeg',
            quality: 0.3,
            level: 'M',
            margin: 3,
            scale: 4,
            width: 200,
            color: {
                dark: '#010599FF',
                light: '#FFBF60FF',
            },
        },
    });
    return(
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
                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                    </div>
                    <div className={"flex"}>
                        <div>Last Name</div>
                        <div>
                        <input type="password" id="password"
                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                    </div>
                    <div className={"flex"}>
                        <div>Date Of Birth</div>
                        <div>
                        <input type="password" id="password"
                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                    </div>
                    <div className={"flex"}>
                        <div>Mobile Number</div>
                        <div>
                        <input type="password" id="password"
                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={"flex justify-center items-center"}>
                <div>
                    <img ref={inputRef} />
                </div>
            </div>
        </div>
    )
}
