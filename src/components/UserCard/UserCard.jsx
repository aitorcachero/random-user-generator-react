import './UserCard.css';
import PropTypes from 'prop-types';

export default function UserCard({ user }) {
  return (
    <main className="main-card">
      <div className="card">
        <img src={user.picture.large} alt="" />
        <div className="card-content">
          <h2>
            {user.name.first} {user.name.last}
          </h2>
          <p>{user.email}</p>
          <a href="#" className="button">
            Edad: {user.dob.age}
            <span className="material-symbols-outlined">años</span>
          </a>
        </div>
      </div>
    </main>
  );
}

UserCard.propTypes = {
  user: PropTypes.object,
};
