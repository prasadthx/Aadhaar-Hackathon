import WifiManager from "react-native-wifi-reborn";

export const establishConnection = (ssid:any, password:any) => {
    WifiManager.connectToProtectedSSID(ssid, password, isWep).then(
        () => {
            console.log("Connected successfully!");
        },
        () => {
            console.log("Connection failed!");
        }
    );
}
