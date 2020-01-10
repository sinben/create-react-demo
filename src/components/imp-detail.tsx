import * as React from 'react'
import Imp from '../models/imp';

interface Props {
    imp: Imp | undefined,
}

const ImpDetail: React.FC<Props> = (props: Props) => {
    const { imp } = props;

    if(imp == undefined){
        return <div>Not found</div>
    }
    return (
            <div>
                <a href={imp.url}>{imp.id} - {imp.name}</a>
            </div>
    );
}


export default ImpDetail;
