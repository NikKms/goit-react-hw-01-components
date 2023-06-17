import PropTypes from 'prop-types';
import {
  List,
  FriendItem,
  FriendAvatar,
  FriendStatus,
  FriendName,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <section>
      <List>
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <FriendItem key={id}>
              <FriendStatus isOnline={isOnline} />
              <FriendAvatar src={avatar} alt={name} />
              <FriendName>{name}</FriendName>
            </FriendItem>
          );
        })}
      </List>
    </section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
