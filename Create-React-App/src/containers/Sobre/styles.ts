import styled from 'styled-components'

export const GithubSecao = styled.div`
  margin-bottom: 64px;
  margin-top: 32px;
  display: flex;
  justify-content: center;

  img {
    height: 157px;
  }

  @media (max-width: 768px) {
    display: block;
    margin-top: 16px;
    margin-bottom: 16px;

    img {
      height: auto;
      max-width: 300px;
    }
  }
`
