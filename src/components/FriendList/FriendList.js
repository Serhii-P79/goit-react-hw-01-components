import PropTypes from 'prop-types';
import { FriendListItem } from 'components';

export function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(element => {
        return <FriendListItem key={element.id} element={element} />;
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
