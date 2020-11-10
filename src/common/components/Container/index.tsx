import styled from 'styled-components'
import {blue} from 'common/styles/colors'



export const Container = styled.div`
  padding: 15px 100px 60px 100px;
  color: ${blue};

  border: 2px solid green;
  font-size: 26px;
 
  @media (max-width: 768px) {
    padding: 15px 40px 10px 40px;

    font-size:18px;
  }
`