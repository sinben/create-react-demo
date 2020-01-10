import ImpList from "../components/imp-list";
import list from  "../mock-imp-list"
import React from "react";
import { useParams} from "react-router";
import ImpDetail from "../components/imp-detail";

const View: React.FC = () => {
    let { id  } = useParams();

    const imp = list.find(i => i.id === Number(id));

    return (
        <ImpDetail imp={imp} />
    )
};

export default View;

