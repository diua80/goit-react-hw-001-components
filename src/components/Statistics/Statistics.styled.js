import styled from 'styled-components';
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
export const HeaderFirst = styled.ul`
display: flex;
// flex-direction: column;
align-items: center;
gap: 15px;
`;
export const List = styled.li`
border: 2px solid black;
color: white;
background-color: ${getRandomColor};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 6px;
width: 100px;
height: 100px;
`;
export const Container = styled.div`
margin: 20px auto;
display: flex;
  flex-direction: column;
  justify-content: center; /* Горизонтальне вирівнювання */
  align-items: center; /* Вертикальне вирівнювання */
  border: 1px solid #989898;
`;
export const Header = styled.h2`
font-size: 30px
`;
