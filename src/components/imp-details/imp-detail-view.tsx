import * as React from 'react'
import Imp from '../../models/imp';

interface Props {
    imp: Imp | undefined,
    isLoading: boolean
}

const View: React.FC<Props> = (props: Props) => {
    const { imp, isLoading } = props;

    if(isLoading){
        return <div>Loading</div>
    }

    if(imp == undefined){
        return <div>Not found</div>
    }
    return (
            <div>
                <a href={imp.url}>{imp.id} - {imp.name}</a>
            </div>
    );
}


export default View;
