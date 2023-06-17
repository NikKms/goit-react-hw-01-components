import { Profile } from '../Profile/Profile';
import user from '../../data/user';
import data from '../../data/data';
import friends from '../../data/friends';
import transactions from '../../data/transactions';
import { Container } from './App.styled';
import { FriendList } from 'components/FriendList/FriendList';
import { Statistics } from 'components/Statistics/Statistics';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <Container>
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
    </Container>
  );
};
