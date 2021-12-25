import { Profile, Statistics } from 'components';
import users from 'json/user.json';
import data from 'json/data.json';

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
    </div>
  );
}
