import styled from "styled-components";

const FormControl = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0.8rem 1.5rem;
    overflow: hidden;
    
    @media only screen and (max-width: 768px) {
        padding-bottom: 1.2rem;
    }
`;

export default FormControl;
