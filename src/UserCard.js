import './UserCard.css';

const UserCard = ( { userData }) => {
  return (
      <div className="card">
          <div className="card_title">
          {userData.id}
          </div>
          <div className="card_body">
              <div className="card_id">{userData.first_name} {userData.last_name}</div>
              <div className="card_email">{userData.email}</div>
              <div className="card_image"><img src={userData.avatar} alt="avatar"></img>
              </div>
          </div>
      </div>
  );
};


export default UserCard;