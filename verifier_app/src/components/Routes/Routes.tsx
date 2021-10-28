import {Link} from "react-router-dom";

export const Routes = () => {
    return(
        <div id={"Routes"} className={"flex flex-col justify-center items-center"}>
            <Link to="/create">
                <div>Add</div>
            </Link>
            <Link to="/view">
                <div>View</div>
            </Link>
            <Link to="/delete">
                <div>Delete</div>
            </Link>
        </div>
    )
}
