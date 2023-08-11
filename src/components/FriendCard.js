export const FriendCard = ({friends}) => {
    return <div> <span className={friends.isOnline? 'online' : 'offline'}></span>
          <img
            src={friends.avatar}
            alt="User avatar"
            className="avatar"
            width="48"
          />
        <p class="name">{friends.name}</p>
    </div>
}