import { Sidebar, Center } from '../components';

const Home = () => {
  return (
    <div className='bg-black h-screen overflow-hidden'>
      <main className='flex'>
        <Sidebar />
        <Center />
      </main>
    </div>
  );
};

export default Home;
