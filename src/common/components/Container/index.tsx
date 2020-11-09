import styled from 'styled-components'
import {blue} from 'common/styles/colors'

export const Container = styled.div`
  padding: 15px 100px 60px 100px;
  color: ${blue};

  /* border: 1px solid black; */

  @media (max-width: 768px) {
    padding: 15px 10px 10px 10px;

    p {
      font-size: 16px;
      margin-top: 8px;
    }
  }
`