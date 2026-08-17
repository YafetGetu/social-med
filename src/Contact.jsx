function Contact({ name, email, phone, profile_picture, age, location, bio, isOnline, followers }) {
  return (
    <div className="contact-card">
      <img src={profile_picture} alt={name} className="contact-avatar" />
      <h2>{name}</h2>
      <p className="status">{isOnline ? 'Online' : 'Offline'}</p>
      {bio && <p className="bio">{bio}</p>}
      <div className="stats">
        <span>Age: {age}</span>
        <span>Followers: {followers}</span>
      </div>
      <div className="details">
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Location: {location}</p>
      </div>
    </div>
  );
}

Contact.defaultProps = {
  age: 'N/A',
  location: 'Unknown',
  bio: '',
  isOnline: false,
  followers: 0,
};

export default Contact;
