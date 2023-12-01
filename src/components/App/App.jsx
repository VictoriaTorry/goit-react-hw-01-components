import { Profile } from 'components/Profile/Profile';
import user from 'components/Profile/user';
import data from 'components/Statistics/data';
import { Statistics } from 'components/Statistics/Statistics';
import friends from 'components/FriendList/friends';
import { FriendList } from 'components/FriendList/FriendList';
import transactions from 'components/TransactionHistory/transactions';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
