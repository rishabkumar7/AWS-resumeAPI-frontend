import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResumeCard = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get('https://njvqvf7mk72umhtipwwvg2kipa0hpcpk.lambda-url.ca-central-1.on.aws')
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="card">
      <img src={user.basics.avatar_url} className="card-img-top" alt="User avatar" />
        <div className="card-body">
        <h5 className="card-title">{user.basics.name}</h5>
        <p className="card-text">{user.basics.label}</p>
        <p className="card-text">{user.basics.summary}</p>
        <a href={user.basics.website} className="btn btn-primary">View profile</a>
  </div>
    </div>
  );
};

export default ResumeCard;
