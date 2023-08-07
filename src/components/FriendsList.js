import React from 'react';
import Friend from './Friend';

const FriendsList = ({ friends, onSelection, selectedFriend }) => {
  return (
    <ul className="sidebar">
      {friends.map((friend) => (
        <Friend
          onSelection={onSelection}
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
