import styled from "styled-components";

const Stepper = styled.div`
    display: flex;
    height: 3rem;
    margin-top: 2rem;
    align-items: center;
    border-radius: 1rem 1rem 0 0;
    position: relative;
    overflow: hidden;
    
    @media only screen and (max-width: 768px) {
        height: 1rem;
    }
`;

export default Stepper;
