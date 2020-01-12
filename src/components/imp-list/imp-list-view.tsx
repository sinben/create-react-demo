import * as React from 'react'
import Imp from '../../models/imp';

interface Props {
    imps: Imp[],
    isLoading: boolean,
    onClicked: (id: number) => void
}

const View: React.FC<Props> = (props: Props) => {
    const { imps, onClicked, isLoading} = props;
    if(isLoading){
        return <div>Keep loading, loading, loading wow</div>
    }
    return (
        <ul>
            {
                imps.map(imp => (
                    <li
                        key={imp.id}
                        onClick={() => onClicked(imp.id)}
                    >
                        {imp.name}
                    </li>)
                )
            }
        </ul>
    );
}


export default View;
