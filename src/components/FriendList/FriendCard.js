import { Itm, StatusDot } from "./FriendList.styled";

export const FriendCard = ({ friends }) => {
  return <Itm>
    <StatusDot isOnline={friends.isOnline}></StatusDot>
          <img
            src={friends.avatar}
            alt="User avatar"
            className="avatar"
            width="48"
          />
        <p class="name">{friends.name}</p>
    </Itm>
}