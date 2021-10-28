import {IoArrowBack, IoArrowForward } from "react-icons/all";
import {createBrowserHistory} from "history";

export const NavigationButton = () => {
    const history = createBrowserHistory();

    const goBack = () => {
        history.back();
        console.log(history);
    }

    const goForward = () => {
        history.forward();
    }
    return(
        <div style={{flex:0.1}} className={"flex justify-evenly items-center"}>
            <button onClick={goBack} className={"bg-purple-800 h-7 w-7 rounded-full flex items-center justify-center"}>
                <IoArrowBack/>
            </button>

            <button onClick={goForward} className={"bg-purple-800 h-7 w-7 rounded-full flex items-center justify-center"}>
                <IoArrowForward/>
            </button>
        </div>
    )
}

