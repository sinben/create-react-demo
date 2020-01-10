import * as React from 'react'
import Imp from '../models/imp';

interface Props {
    imps: Imp[],
    onClicked: (id: number) => void
}

const ImpList: React.FC<Props> = (props: Props) => {
    const { imps, onClicked } = props;
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


export default ImpList;
