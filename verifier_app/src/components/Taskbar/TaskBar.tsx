import {NavigationButton} from "./NavigationButton";
import {TabName} from "./TabName";
import {AadhaarIcon} from "./AadhaarIcon";


export const TaskBar = () => {
    return (
        <div className={"w-full h-full flex"}>
            <NavigationButton/>
            <TabName/>
            <AadhaarIcon/>
        </div>
    )
}
