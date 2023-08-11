import dataStat from "../dataStat.json";
import Friends from "../friends.json";
import transactions from "../transactions.json";
import userData from "../data.json"
import { GlobalStyled } from "./GlobalStyled";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendsList } from "./FriendList/FriendList";
import { TransactionHistory } from "./Transactions/Transactions";

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
      <FriendsList friends={Friends} />
      <TransactionHistory items={transactions}/>
      <GlobalStyled/>
    </div>
  );
};
