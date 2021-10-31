// @ts-ignore
import {fs} from "@tauri-apps/api";


export const getHotspotCredentials = async() => {
    try {
        const content = await fs.readTextFile("../public/hotspot.txt")
        const ssid = content.split("\n")[0].split(":")[1];
        const password = content.split("\n")[1].split(":")[1];
        return `${ssid}#${password}`;
    }
    catch (error) {
        console.log(error);
    }
}

