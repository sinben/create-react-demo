import ImpListView from "./imp-list-view";
import service from "./../../services/imp-service"
import React, {useEffect, useState} from "react";
import {useHistory} from "react-router";
import Imp from "../../models/imp";


const View: React.FC = () => {
    let history = useHistory();
    const [list, setList] = useState<Imp[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        async function getList() {
            setIsLoading(true);
            let res  = await service.list();
            setList(res.data);
            setIsLoading(false);
        }
        getList();
    }, []);

    const onClick: (id: number) => void =
        (id: number): void => {
            history.push(`/imp/${id}`);
        };

    return (
        <ImpListView isLoading={isLoading} imps={list} onClicked={onClick}/>
    )
};

export default View;

