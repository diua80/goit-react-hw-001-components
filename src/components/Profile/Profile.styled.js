import styled from 'styled-components';

export const Image = styled.img`
border-radius: 50%;
`;
export const List = styled.ul`
display: flex;
// flex-direction: column;
align-items: center;
gap: 15px;
`;
export const ListItm = styled.li`
border: 2px solid black;
color: white;
background-color: #999999;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 6px;
width: 100px;
height: 100px;
`;
export const Wrapper = styled.div`
margin: 20px auto;
display: flex;
  flex-direction: column;
  justify-content: center; /* Горизонтальне вирівнювання */
  align-items: center; /* Вертикальне вирівнювання */
  border: 1px solid #989898;
`;