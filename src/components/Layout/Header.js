import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className=" mx-2 py-3 md:border-b-2">
      <div className="flex justify-between items-center ml-2 mr-4">
        <Link to="/" className="md:w-96 xs:w-72 w-44">
          <img src="/images/layout/logo.svg" alt="SCMP" />
        </Link>
        <div className="w-3 xs:w-5 md:w-7">
          <img src="/images/icon/navigation.svg" alt="navigation" />
        </div>
      </div>
    </header>
  );
}
