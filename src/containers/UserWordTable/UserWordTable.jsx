import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserWordTable.scss';

import { Table } from 'reactstrap';

import UserWordTableItem from 'components/UserWordTableItem';

class UserWordTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Table className={styles.UserWordTable}>
        <tbody>
          {this.props.userWords.map(userWord => (
            <UserWordTableItem
              key={userWord.content}
              content={userWord.content}
              count={userWord.count}
              lastUserId={userWord.lastUserId}
              lastTimestamp={userWord.lastTimestamp}
            />
          ))}
        </tbody>
      </Table>
    );
  }
}

UserWordTable.propTypes = {
  userWords: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string,
      count: PropTypes.number,
      lastUserId: PropTypes.string,
      lastTimestamp: PropTypes.number
    })
  )
};
UserWordTable.defaultProps = {
  userWords: []
};

export default UserWordTable;