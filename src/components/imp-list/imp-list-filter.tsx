import ImpListView from "./imp-list-view";
import service from "./../../services/imp-service"
import React, {useEffect, useState, ChangeEvent} from "react";
import {useHistory} from "react-router";
import Imp from "../../models/imp";


interface Props {
    onFilter: (filter : string) => void
}

const View: React.FC<Props> = (props: Props) => {
    const {onFilter} = props;

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        onFilter((event.target.value || "").toLowerCase());
    };

    return (
        <input type="text" placeholder="Search" onChange={onChange}/>
    )
};

export default View;

