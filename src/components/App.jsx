import dataStat from "../dataStat.json";
import userData from "../data.json"
import { GlobalStyled } from "./GlobalStyled";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";

export const App = () => {
  return (
    <div>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={dataStat} />
      <GlobalStyled/>
    </div>
  );
};
