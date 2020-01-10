import list from "../../mock-imp-list"
import React from "react";
import { useParams} from "react-router";
import ImpDetailView from "./imp-detail-view";

const View: React.FC = () => {
    let { id  } = useParams();

    const imp = list.find(i => i.id === Number(id));

    return (
        <ImpDetailView imp={imp} />
    )
};

export default View;

