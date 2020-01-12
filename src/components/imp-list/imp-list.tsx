import ImpListView from "./imp-list-view";
import ImpFilter from "./imp-list-filter";
import React, {useEffect, useState} from "react";
import {useHistory} from "react-router";
import Imp from "../../models/imp";
import {State} from "../../redux/reducers";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {listImps} from "../../redux/actions/imp";
import {RemoteData} from "../../models/remote-data";

interface ImpListProps {
    imps: Imp[],
    status: RemoteData,
    listImps: () => void
}

const View: React.FC<ImpListProps> = ({imps, status, listImps} : ImpListProps) => {
    let history = useHistory();

    const [filter, setFilter] = useState<string >("");

    useEffect(() => {
        if(status === RemoteData.NOT_ASKED){
            listImps();
        }
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
            <ImpListView isLoading={status === RemoteData.NOT_ASKED || status === RemoteData.LOADING} imps={filteredImps} onClicked={onClick}/>
        </>
    )
};

const mapStateToProps = (state : State) => {
    return {
        status: state.imps.status,
        imps: state.imps.value
    };
};

const mapDispatchToProps =  (dispatch:any) => ({
    listImps: bindActionCreators(listImps, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(View as any);
