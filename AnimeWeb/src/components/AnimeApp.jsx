import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const sharedClasses = {
  background: 'bg-zinc-800',
  foreground: 'text-white',
  primary: 'pink-500',
  primaryForeground: 'text-pink-500',
  accent: 'pink-500',
  accentForeground: 'text-white',
  mutedForeground: 'text-zinc-400',
  card: 'bg-zinc-800',
  input: 'bg-zinc-700',
  ring: 'pink-500',
};

const Header = ({ sharedClasses }) => {
  return (
    <header className={`p-4 ${sharedClasses.background}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold text-pink-500">8!Anime.Web</div>
        <nav className="space-x-4">
          <Link to="/" className="text-white hover:text-pink-500">Home</Link>
          <Link to="/movies" className="text-white hover:text-pink-500">Movies</Link>
          <Link to="/tv-series" className="text-white hover:text-pink-500">TV Series</Link>
          <Link to="/most-popular" className="text-white hover:text-pink-500">Most Popular</Link>
        </nav>
      </div>
    </header>
  );
};

const MainContent = ({ sharedClasses }) => {
  return (
    <main className="container mx-auto mt-8 flex flex-col items-center">
      <div className={`p-8 rounded-lg text-center w-full max-w-2xl ${sharedClasses.card}`}>
        <h1 className="text-4xl font-bold mb-4">Watch Anime Online, Free Anime Streaming</h1>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search anime..."
            className={`w-full p-4 rounded-full ${sharedClasses.input} ${sharedClasses.foreground} focus:outline-none`}
          />
          <button className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-${sharedClasses.primary} p-2 rounded-full`}>
            <FaSearch />
          </button>
        </div>
        <p className={sharedClasses.mutedForeground + ' mb-4'}>
          Top search: Demon Slayer: Kimetsu no Yaiba, Kaiju No. 8, One Piece, Wind Breaker, The Ossan Newbie Adventurer...
        </p>
        <button className={`bg-${sharedClasses.accent} ${sharedClasses.accentForeground} px-6 py-3 rounded-full hover:bg-${sharedClasses.accent}/80`}>
          Watch anime
        </button>
      </div>
      <div className="mt-8">
        <img
          src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/02/jjk-gda.jpg"
          alt="anime characters"
          className="rounded-3xl"
        />
      </div>
    </main>
  );
};

const AnimeApp = () => {
  return (
    <div className={`min-h-screen ${sharedClasses.background} ${sharedClasses.foreground}`}>
      <Header sharedClasses={sharedClasses} />
      <MainContent sharedClasses={sharedClasses} />
    </div>
  );
};

export default AnimeApp;
