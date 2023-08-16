import { FriendCard } from "components/FriendList/FriendCard";
import { List, ItmWrapper } from "./FriendList.styled";

export const FriendsList = ({ friends }) => {
  return (
    <List className="friend-list">
      {friends.map((item) => (
          <ItmWrapper key={item.id}>
              <FriendCard friends={item} />
          </ItmWrapper>
      ))}
    </List>
  );
};
