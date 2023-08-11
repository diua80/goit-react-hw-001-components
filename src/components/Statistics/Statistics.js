import { Container } from './Statistics.styled';
import { List } from './Statistics.styled';
import { HeaderFirst } from './Statistics.styled.js'
export const Statistics = ({ title, stats }) => {
  // console.log(props.data)
  return (
    <Container class="statistics">
      <h2 className="title">{title}</h2>

      <HeaderFirst class="stat-list">
        {stats.map(item => (
          <List class="item" key={item.id}>
            <span class="label">{item.label}</span>
            <span class="percentage">{item.percentage}%</span>
          </List>
        ))}
      </HeaderFirst>
    </Container>
  );
};
