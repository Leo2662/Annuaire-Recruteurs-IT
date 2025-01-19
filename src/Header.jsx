import React from 'react';
    import SearchBar from './SearchBar';

    function Header({ searchQuery, handleSearch }) {
      return (
        <header className="bg-[#020202] text-[#f1f1f1] p-6 text-center font-inter">
          <h1 className="text-4xl font-extrabold tracking-wide">Trouvez votre recruteur IT</h1>
          <p className="text-lg mb-4">Connectez-vous avec des professionnels de premier plan pour faire avancer votre carrière dans le secteur technologique.</p>
          <SearchBar searchQuery={searchQuery} handleSearch={handleSearch} />
        </header>
      );
    }

    export default Header;
