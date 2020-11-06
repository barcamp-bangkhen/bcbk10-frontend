import styled from "styled-components";

const ProgressBar = styled.div`
    position: absolute;
    background: coral;
    height: 100%;
    width: ${props => (parseInt(props.step) * 25) + 25}%;
    left: 0;
    transition: 0.4s ease;
    
    &:after {
        content: "";
        height: 0;
        width: 0;
        background: coral;
        position: absolute;
        border-top: 1.5rem solid transparent;
        border-bottom: 1.5rem solid transparent;
        right: -1rem;
        top: 0;
        border-radius: 0 1rem 1rem 0;
        border-left: 20px solid coral;
        
        @media only screen and (max-width: 768px) {
            border-top: 0.5rem solid transparent;
            border-bottom: 0.5rem solid transparent;
            right: -0.8rem;
        }
    }
`;

export default ProgressBar;
