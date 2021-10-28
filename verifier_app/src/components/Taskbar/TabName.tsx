interface PropTypes {
    currentPage:string;
}

export const TabName = (props:PropTypes) => {
    return(
        <div style={{flex:0.8}} className={"text-center flex justify-center items-center"}>
            <div>
                {props.currentPage}
            </div>
        </div>
    )
}
