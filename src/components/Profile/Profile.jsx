import PropTypes from 'prop-types';
import {
  UserProfile,
  Discription,
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
  UserStatsList,
  UserStatsItem,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <section>
      <UserProfile>
        <Discription>
          <UserAvatar src={avatar} alt="User avatar" />
          <UserName>{username}</UserName>
          <UserTag>@{tag}</UserTag>
          <UserLocation>{location}</UserLocation>
        </Discription>

        <UserStatsList>
          <UserStatsItem>
            <Label>Followers</Label>
            <Quantity>{stats.followers}</Quantity>
          </UserStatsItem>

          <UserStatsItem>
            <Label>Views</Label>
            <Quantity>{stats.views}</Quantity>
          </UserStatsItem>

          <UserStatsItem>
            <Label>Likes</Label>
            <Quantity>{stats.likes}</Quantity>
          </UserStatsItem>
        </UserStatsList>
      </UserProfile>
    </section>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
