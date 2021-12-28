import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const ProfilePic = styled.img`
  width:250px;
  height:250px;
  object-fit: cover;
  overflow: hidden;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 50%;
    height: 50%;
    object-fit: cover;
    overflow: hidden;
  }
`

