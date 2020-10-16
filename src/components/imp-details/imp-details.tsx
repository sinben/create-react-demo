import list from "../../mock-imp-list"
import React, {useEffect, useState} from "react";
import { useParams} from "react-router";
import ImpDetailView from "./imp-detail-view";
import service from "../../services/imp-service";
import Imp from "../../models/imp";

const View: React.FC = () => {
    let { id  } = useParams();

    const [imp, setImp] = useState<Imp | undefined>(undefined);

    //https://reactjs.org/docs/hooks-state.html
    const [isLoading, setIsLoading] = useState<boolean>(false);

    //https://reactjs.org/docs/hooks-effect.html
    useEffect(() => {
        async function getList() {
            setIsLoading(true);
            let res  = await service.list();
            let list = res.data;
            const imp = list.find((i : Imp) => i.id === Number(id));
            setImp(imp);
            setIsLoading(false);
        }
        getList();
    }, []);


    return (
        <ImpDetailView isLoading={isLoading} imp={imp} />
    )
};

export default View;

