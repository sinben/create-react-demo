import React, {useEffect, useState, ChangeEvent} from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  padding: 1rem 0.5rem ;
  
`;

const Input = styled.input`
  width: 100%;
  min-height: 1rem;
  border-radius: 0.5rem;
  border-style: hidden;
  background-color: white;
  padding: 1rem;
  
`;

interface Props {
    onFilter: (filter : string) => void
}

const View: React.FC<Props> = (props: Props) => {
    const {onFilter} = props;

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        onFilter((event.target.value || "").toLowerCase());
    };

    return (
        <InputWrapper>
            <Input type="text" placeholder="Search" onChange={onChange}/>
        </InputWrapper>
    )
};

export default View;

