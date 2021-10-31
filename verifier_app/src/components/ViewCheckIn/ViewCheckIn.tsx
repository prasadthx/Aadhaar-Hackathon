import './ViewCheckIn.css';
import {Component, ReactChild, ReactFragment, ReactPortal, useEffect, useState} from "react";
import {getAllClients} from "../Api/apiRequests";


export class ViewCheckIn extends Component {
    // Constructor
    constructor(props: any) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    // ComponentDidMount is used to
    // execute the code
    componentDidMount() {
        getAllClients()
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });

                this.render();
            })
    }

    render() {
        // @ts-ignore
        const {DataisLoaded, items} = this.state;
        console.log(items);
        const backgroundColor = (index:number) => index % 2 === 0 ? "#000" : "#fff";
        const textColor = (index:number) => index % 2 === 0 ? "#fff" : "#000"
        return(
            <div>
                <div>
                    {items.reverse().map((data: any, index: number) => (
                        <div className={"flex mx-4 my-2 py-2"} key={index} style={{backgroundColor:backgroundColor(index), color:textColor(index)}}>
                            <div style={{flex: 0.2}} className={"flex justify-center items-center"}>
                                <div>{index + 1}</div>
                            </div>
                            <div className={"flex flex-1 flex-col"}>
                                <div className={"flex justify-center items-center"}>
                                    <div className={"text-2xl"}><b>{data.first_name} {data.last_name}</b></div>
                                </div>
                                <div>
                                    <div>{data.time_created}</div>
                                </div>
                            </div>
                            <div style={{flex: 0.2}} className={"flex justify-center items-center"}>
                                <div>{data.mobile}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )


    }
}
