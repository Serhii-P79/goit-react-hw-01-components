import PropTypes from 'prop-types';
import defaultAvatar from 'img/no-avatar.png';
import { FriendListItemCss } from 'components';

export function FriendListItem({ avatar = defaultAvatar, name, isOnline }) {
  return (
    <FriendListItemCss status={isOnline}>
      <span className="status"></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendListItemCss>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
