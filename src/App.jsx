import { useState } from 'react';
import Contact from './Contact';
import './App.css';

const users = [
  {
    name: 'Abebe Kebede',
    email: 'abebe.kebede@example.com',
    phone: '+251 911 234 567',
    profile_picture: 'https://img.icons8.com/?size=100&id=7819&format=png&color=000000',
    age: 24,
    location: 'Addis Ababa, Ethiopia',
    bio: 'Software engineer who loves clean code.',
    isOnline: true,
    followers: 1240,
  },
  {
    name: 'Sara Haile',
    email: 'sara.haile@example.com',
    phone: '+251 922 345 678',
    profile_picture: 'https://img.icons8.com/?size=100&id=7821&format=png&color=000000',
    age: 21,
    location: 'Dire Dawa, Ethiopia',
    bio: 'Passionate about UI/UX design.',
    isOnline: false,
    followers: 870,
  },
  {
    name: 'Yonas Tesfaye',
    email: 'yonas.tesfaye@example.com',
    phone: '+251 933 456 789',
    profile_picture: 'https://img.icons8.com/?size=100&id=7819&format=png&color=000000',
    age: 28,
    location: 'Hawassa, Ethiopia',
    isOnline: true,
    followers: 3100,
  },
];

function App() {
  const [selectedUser, setSelectedUser] = useState(users[0]);

  return (
    <div className="app-container">
      <aside className="sidebar">
        <h2>Contacts</h2>
        <div className="contact-list">
          {users.map((user) => (
            <div
              key={user.email}
              className={`sidebar-profile ${selectedUser.email === user.email ? 'active' : ''}`}
              onClick={() => setSelectedUser(user)}
            >
              <div className="avatar-wrapper">
                <img
                  src={user.profile_picture}
                  alt={user.name}
                  className="sidebar-avatar"
                />
                {user.isOnline && <span className="online-indicator"></span>}
              </div>
              <span className="sidebar-name">{user.name}</span>
            </div>
          ))}
        </div>
      </aside>
      <main className="main-content">
        <h1>Contact Details</h1>
        <div className="contact-details-container">
          {selectedUser ? (
            <Contact {...selectedUser} />
          ) : (
            <p>Select a contact to view details.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
