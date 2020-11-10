import styled from 'styled-components'
import {red, blue} from 'commond/styles/colors'

export const DetailTitle  = styled.h3`
  display: block;
  font-size: 28px;
  margin: 0;
  margin-top: -10px;
  margin-left: 30px;
  color:${red};
  /* border:1px solid black; */

  @media (max-width: 768px) {
    margin-left: 20px;
    font-size: 22px;
  }

`
export const Detail = styled.div`
  padding: 15px 100px 60px 100px;
  color: ${blue};

  /* border: 1px solid black; */
  
  @media (max-width: 768px) {

    p {
      font-size: 18px;
      margin-top: 8px;
    }
  }
`