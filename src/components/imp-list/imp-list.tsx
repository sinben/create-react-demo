import ImpListView from "./imp-list-view";
import list from "../../mock-imp-list"

import React from "react";
import {useHistory} from "react-router";


const View: React.FC = () => {
    let history = useHistory();

    const onClick: (id: number) => void =
        (id: number): void => {
            history.push(`/imp/${id}`);
        };

    return (
        <ImpListView imps={list} onClicked={onClick}/>
    )
};

export default View;

