import "./FirstPage.css";
import {AddCheckIn} from "../AddCheckIn/AddCheckIn";
import {ViewCheckIn} from "../ViewCheckIn/ViewCheckIn";

export const FirstPage = () => {
    return(
        <div id={"FirstPage"}>
            <div>
                <AddCheckIn/>
            </div>
            <div>
                <ViewCheckIn/>
            </div>
            <div>

            </div>
        </div>
    )
}
