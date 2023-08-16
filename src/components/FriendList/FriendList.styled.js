import styled from "styled-components";

export const List = styled.ul`
    display: flex;
flex-direction: column;
align-items: center;
gap: 15px;
`;
export const Itm = styled.div`
    display: flex;
flex-direction: flex;
align-items: center;
gap: 15px;
`;
export const ItmWrapper = styled.li`
    display: flex;
flex-direction: column;
// align-items: center;
gap: 15px;
border: 1px solid #989898;
width: 300px;
padding: 8px;
`;
export const StatusDot = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 8px;
  background-color: ${props => (props.isOnline ? 'green' : 'yellow')};
`;
