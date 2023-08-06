export const Statistics = ({ title, stats }) => {
  // console.log(props.data)
  return (
    <section class="statistics">
      <h2 className="title">{title}</h2>

      <ul class="stat-list">
        {stats.map(item => (
          <li class="item" key={item.id}>
            <span class="label">{item.label}</span>
            <span class="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
