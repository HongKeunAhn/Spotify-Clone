import { getSession } from 'next-auth/react';
import { Sidebar, Center, Player } from '../components';

const Home = () => {
  return (
    <div className='bg-black h-screen overflow-hidden'>
      <main className='flex'>
        <Sidebar />
        <Center />
      </main>

      <div className='sticky bottom-0'>
        <Player />
      </div>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
