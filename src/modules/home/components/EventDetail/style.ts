import styled from 'styled-components'

import Flex from 'common/components/Flex'


export const DetailTitle  = styled.h3`
  display: block;
  font-size: 28px;
  margin: 0;
  margin-top: -10px;
  margin-left: 30px;

  border:1px solid black;

  @media (max-width: 768px) {
    margin-left: 20px;
    font-size: 22px;
  }

`
export const Detail = styled.div`
  border: 2px solid black;
  padding: 15px 40px 50px 40px;

  /* margin-top: -8px; */
  /* margin-left: 10px; */
  margin-bottom: 1em;
  /* margin: 15px 50px 50px 40px; */

  @media (max-width: 768px) {
    padding-left:200px;
    width: 60%;
    padding-right:3rem;
    p {
      font-size: 18px;
      margin-top: 8px;
    }
  }
`