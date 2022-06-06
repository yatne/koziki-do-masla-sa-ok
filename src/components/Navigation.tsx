import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/">Full Game</Link>
      <Link to="/short">Short version</Link>
      <Link to="/easy">Only easy levels</Link>
      <Link to="/sets">Divided by level sets</Link>
    </div>
  );
}

export default Navigation
