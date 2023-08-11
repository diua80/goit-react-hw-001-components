import { FriendCard } from "components/FriendCard";

export const FriendsList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map((item) => (
          <li key={item.id}>
              <FriendCard friends={item} />
          </li>
      ))}
    </ul>
  );
};
