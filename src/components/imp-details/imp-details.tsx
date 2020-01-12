import React, {useEffect} from "react";
import {useParams} from "react-router";
import ImpDetailView from "./imp-detail-view";
import Imp from "../../models/imp";
import {State} from "../../redux/reducers";
import {bindActionCreators} from "redux";
import {listImps} from "../../redux/actions/imp";
import {connect} from "react-redux";
import {RemoteData} from "../../models/remote-data";

interface ImpListProps {
    imps: Imp[],
    status: RemoteData,
    listImps: () => void
}

const View: React.FC<ImpListProps> = ({imps, status, listImps}) => {
    let { id  } = useParams();

    //https://reactjs.org/docs/hooks-effect.html
    useEffect(() => {
        if(status === RemoteData.NOT_ASKED) {
            listImps();
        }
    }, []);


    const imp = (imps || []).find((i : Imp) => i.id === Number(id));

    return (
        <ImpDetailView isLoading={(status === RemoteData.NOT_ASKED || status === RemoteData.LOADING)} imp={imp} />
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
