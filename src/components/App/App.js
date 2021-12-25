import {
  Profile,
  Statistics,
  FriendList,
  TransactionHistory,
} from 'components';
import users from 'json/user.json';
import data from 'json/data.json';
import friends from 'json/friends.json';
import transactions from 'json/transactions.json';

export function App() {
  return (
    <div>
      <Profile
        username={users.username}
        tag={users.tag}
        location={users.location}
        avatar={users.avatar}
        stats={users.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
