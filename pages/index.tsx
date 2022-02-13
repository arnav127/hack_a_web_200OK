import Layout from '../components/Layout'
import HeroHome from '../components/Hero/HeroHome';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="flex-grow">
        <HeroHome />
      </main>
    </div>
  );
}