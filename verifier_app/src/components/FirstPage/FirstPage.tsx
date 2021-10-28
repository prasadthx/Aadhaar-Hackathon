import "./FirstPage.css";
import {AddCheckIn} from "../AddCheckIn/AddCheckIn";
import {ViewCheckIn} from "../ViewCheckIn/ViewCheckIn";
import {Link, Route, Router, Switch} from "react-router-dom";
import {Routes} from "../Routes/Routes";
import {TaskBar} from "../Taskbar/TaskBar";

export const FirstPage = () => {
    return(
        <div id={"FirstPage"} className={"flex flex-col"}>
            <div id={"Header"} className={"text-white"}>
                <TaskBar/>
            </div>
            <div id={"AppBody"}>
                <div className={"flex flex-col justify-center"}>
                        <Switch>
                            <Route path="/create">
                                <AddCheckIn />
                            </Route>
                            <Route path="/view">
                                <ViewCheckIn />
                            </Route>
                            <Route path="/delete">
                                <AddCheckIn />
                            </Route>
                            <Route path="" exact>
                                <Routes/>
                            </Route>
                        </Switch>
                </div>
            </div>
        </div>
    )
}
