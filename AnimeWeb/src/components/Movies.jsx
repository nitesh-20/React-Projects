import React from 'react';
import { Link } from 'react-router-dom';

const sharedClasses = {
  bgDark: 'bg-[#2d2d44]',
  textWhite: 'text-white',
  rounded: 'rounded',
  flex: 'flex',
  spaceX4: 'space-x-4',
  spaceX2: 'space-x-2',
  px4: 'px-4',
  py2: 'py-2',
  textLG: 'text-lg',
  textSM: 'text-sm',
  textZinc: 'text-zinc-400',
  justifyBetween: 'justify-between',
  itemsCenter: 'items-center',
  gridCols4: 'grid-cols-4',
  gap4: 'gap-4',
  flex1: 'flex-1',
  w1_4: 'w-1/4',
  spaceY4: 'space-y-4',
  w50: 'w-50',
};

const Header = () => {
  return (
    <header className={`${sharedClasses.bgDark} ${sharedClasses.px4} ${sharedClasses.flex} ${sharedClasses.justifyBetween} ${sharedClasses.itemsCenter}`}>
      <div className={`${sharedClasses.flex} ${sharedClasses.itemsCenter} ${sharedClasses.spaceX4}`}>
        <img src="https://wallpapers-clan.com/wp-content/uploads/2024/04/jjk-yuji-cool-anime-desktop-wallpaper-cover.jpg" alt="Logo" className={`${sharedClasses.rounded} h-[40px] w-[40px]`} />
        <h1 className="text-2xl font-bold">h!anime</h1>
      </div>
      <div className={`${sharedClasses.flex} ${sharedClasses.spaceX4} mt-5`}>
        <Link to="/" className="text-white mt-2">Home</Link>
        <button className="text-white">TV Series</button>
        <button className="text-white">Most Popular</button>
        <button className="bg-pink-500 text-white px-4 py-2 rounded">Login</button>
      </div>
    </header>
  );
};

const Section = () => {
  return (
    <section className={`${sharedClasses.bgDark} ${sharedClasses.px4} ${sharedClasses.flex} ${sharedClasses.itemsCenter} ${sharedClasses.spaceX4}`}>
      <img src="https://rukminim2.flixcart.com/image/850/1000/kxgfzbk0/poster/o/8/a/medium-sukuna-oml-anime-jjk-jujitsu-kaisen-matte-finish-poster-original-imag9wgt9ngg9hfh.jpeg?q=90&crop=false" alt="User Avatar" className={`${sharedClasses.rounded} h-[40px] w-[40px]`} />
      <div>
        <p className={`${sharedClasses.textLG}`}>Share HiAnime</p>
        <p className={`${sharedClasses.textSM} ${sharedClasses.textZinc}`}>to your friends</p>
      </div>
      <div className={`${sharedClasses.flex} ${sharedClasses.spaceX2}`}>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Share</button>
        <button className="bg-black text-white px-4 py-2 rounded">Tweet</button>
      </div>
    </section>
  );
};

const Main = () => {
  return (
    <main className={`${sharedClasses.px4} ${sharedClasses.flex} ${sharedClasses.spaceX4}`}>
      <section className={`${sharedClasses.flex1}`}>
        <h2 className={`${sharedClasses.textLG} font-bold mb-4`}>Movie Anime</h2>
        <div className={`${sharedClasses.gridCols4} ${sharedClasses.gap4}`}>
          <div className={`${sharedClasses.bgDark} ${sharedClasses.px4} ${sharedClasses.rounded}`}>
            <img src="https://placehold.co/200x300" alt="Movie Poster" className={`${sharedClasses.rounded} mb-2`} />
            <h3 className={`${sharedClasses.textLG} font-bold`}>IDOLiSH7 Movie: LIVE 4bit -...</h3>
            <p className={`${sharedClasses.textSM} ${sharedClasses.textZinc}`}>A live performance by IDOLiSH7, TRIGGER, Re:vale, and ZOOL, 4 groups with different charms, will...</p>
            <div className={`${sharedClasses.flex} ${sharedClasses.justifyBetween} ${sharedClasses.textSM} ${sharedClasses.textZinc} mt-2`}>
              <span>Movie</span>
              <span>90m</span>
            </div>
          </div>
        </div>
      </section>
      <aside className={`${sharedClasses.w1_4} ${sharedClasses.bgDark} ${sharedClasses.px4} ${sharedClasses.rounded}`}>
        <h2 className={`${sharedClasses.textLG} font-bold mb-4`}>Top 10</h2>
        <div className={`${sharedClasses.flex} ${sharedClasses.justifyBetween} mb-4`}>
          <button className="bg-pink-500 text-white px-4 py-2 rounded">Today</button>
          <button className="text-white">Week</button>
          <button className="text-white">Month</button>
        </div>
        <div className={`${sharedClasses.spaceY4}`}>
          <div className={`${sharedClasses.flex} ${sharedClasses.itemsCenter} ${sharedClasses.spaceX4}`}>
            <img src="https://placehold.co/50x50" alt="Anime Thumbnail" className={`${sharedClasses.rounded}`} />
            <div>
              <h3 className={`${sharedClasses.textLG} font-bold`}>Demon Slayer: Kimetsu no Yaiba...</h3>
              <div className={`${sharedClasses.flex} ${sharedClasses.spaceX2} ${sharedClasses.textSM} ${sharedClasses.textZinc}`}>
                <span>CC</span>
                <span>8</span>
                <span>1</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </main>
  );
};

const Movies = () => {
  return (
    <div className={`${sharedClasses.bgDark} ${sharedClasses.textWhite} min-h-screen`}>
      <Header />
      <Section />
      <Main />
    </div>
  );
};

export default Movies;
