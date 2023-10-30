import './UserCard.css';
import PropTypes from 'prop-types';

export default function UserCard({ user }) {
  return (
    <article>
      <img src={user.picture.thumbnail} />
      <h2>
        {user.name.first} {user.name.last}
      </h2>
      <p>{user.email}</p>
      <p>Edad: {user.dob.age} años</p>
    </article>
  );
}

UserCard.propTypes = {
  user: PropTypes.object,
};
