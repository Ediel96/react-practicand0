import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl">Welcome to My App</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Home;