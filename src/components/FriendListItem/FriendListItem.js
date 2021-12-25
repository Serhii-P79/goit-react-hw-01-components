import PropTypes from 'prop-types';
import defaultAvatar from 'img/no-avatar.png';

export function FriendListItem({
  element: { avatar = defaultAvatar, name, isOnline },
}) {
  return (
    <li className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
