import ImpListView from "./imp-list-view";
import ImpFilter from "./imp-list-filter";
import service from "./../../services/imp-service"
import React, {useEffect, useState} from "react";
import {useHistory} from "react-router";
import Imp from "../../models/imp";


const View: React.FC = () => {
    let history = useHistory();
    const [imps, setImps] = useState<Imp[]>([]);
    const [filter, setFilter] = useState<string >("");

    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        async function getList() {
            setIsLoading(true);
            let res  = await service.list();
            setImps(res.data);
            setIsLoading(false);
        }
         getList();
    }, []);

    const filterImps: (list : Imp[], filter: string) => Imp[] =
        (list : Imp[], filter: string) => {
            return (list || []).filter((imp : Imp) => imp.name.toLowerCase().search(filter) !== -1);
    };

    const onClick: (id: number) => void =
        (id: number): void => {
            history.push(`/imp/${id}`);
        };

    const filteredImps = filterImps(imps, filter);

    return (
        <>
            <ImpFilter onFilter={setFilter} />
            <ImpListView isLoading={isLoading} imps={filteredImps} onClicked={onClick}/>
        </>
    )
};

export default View;

