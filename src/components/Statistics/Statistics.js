import { Container, List, HeaderFirst, Header } from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  // console.log(props.data)
  return (
    <Container class="statistics">
      <Header className="title">{title}</Header>

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
