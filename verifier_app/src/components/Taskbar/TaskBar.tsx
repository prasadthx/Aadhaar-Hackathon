import {NavigationButton} from "./NavigationButton";
import {TabName} from "./TabName";
import {AadhaarIcon} from "./AadhaarIcon";

interface PropType {
    currentPage:string
}

export const TaskBar = (props:PropType) => {
    return (
        <div className={"w-full h-full flex"}>
            <NavigationButton/>
            <TabName currentPage={props.currentPage}/>
            <AadhaarIcon/>
        </div>
    )
}
