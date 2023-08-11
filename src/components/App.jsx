import dataStat from "../dataStat.json";
import dataFriends from "../friends.json";
import userData from "../data.json"
import { GlobalStyled } from "./GlobalStyled";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendsList } from "./FriendList/FriendList";

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
      <Statistics title="UPLOAD STATS" stats={dataStat} />
      <FriendsList friends={ dataFriends} />
      <GlobalStyled/>
    </div>
  );
};
