import * as React from 'react'
import Imp from '../../models/imp';
import styled from "styled-components";

interface Props {
    imps: Imp[],
    isLoading: boolean,
    onClicked: (id: number) => void
}

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  
`;

export const ListElement = styled.li`
    background: white;
    border-radius: 0.5rem;
    margin: 0.5rem;
    min-height: 1rem;
    padding: 1rem;
    
    &:hover{
      background: #edfdff;
      cursor: pointer;
    }
   
`;

const View: React.FC<Props> = (props: Props) => {
    const { imps, onClicked, isLoading} = props;
    if(isLoading){
        return <div>Keep loading, loading, loading wow</div>
    }
    return (
        <List>
            {
                imps.map(imp => (
                    <ListElement
                        key={imp.id}
                        onClick={() => onClicked(imp.id)}
                    >
                        {imp.name}
                    </ListElement>)
                )
            }
        </List>
    );
}


export default View;
