import { getProviders, signIn } from 'next-auth/react';
import React from 'react';

const Login = ({ providers }) => {
  return (
    <div className='flex flex-col items-center justify-center bg-black min-h-screen w-full'>
      <img className='w-52 mb-5' src='https://links.papareact.com/9xl' alt='spotify logo' />
      {Object.values(providers).map((provider) => {
        return (
          <div key={provider.name}>
            <button
              type='button'
              className='bg-[#18D860] text-white p-5 rounded-full'
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            >
              Login with {provider.name}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
