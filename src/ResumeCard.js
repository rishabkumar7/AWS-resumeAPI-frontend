import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResumeCard = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get('https://api.github.com/users/rishabkumar7')
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="card">
      <img src={user.avatar_url} className="card-img-top" alt="User avatar" />
        <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">{user.bio}</p>
        <p className="card-text">{user.company}</p>
        <a href={user.blog} className="btn btn-primary">View profile</a>
        </div>
    </div>
  );
};

export default ResumeCard;
