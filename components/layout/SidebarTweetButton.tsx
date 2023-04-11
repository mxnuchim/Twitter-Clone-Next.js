import { useCallback } from 'react';
import { FaFeather } from 'react-icons/fa';
import { useRouter } from 'next/router';

import useLoginModal from '@/hooks/useLoginModal';
import useCurrentUser from '@/hooks/useCurrentUser';

const SidebarTweetButton = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();

  const onClick = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    router.push('/');
  }, [loginModal, router, currentUser]);

  return (
    <div onClick={onClick}>
      <div
        className='
        mt-6
        lg:hidden 
        rounded-full 
        h-11
        w-11
        p-4
        flex
        items-center
        justify-center 
        bg-sky-500 
        hover:bg-opacity-80 
        transition 
        cursor-pointer
        mx-auto
      '
      >
        <FaFeather size={24} color='white' />
      </div>
      <div className='px-5'>
        <div
          className='
        mt-6
        hidden 
        lg:block 
        px-4
        py-2
        rounded-full
        bg-sky-500
        hover:bg-opacity-90 
        cursor-pointer
      '
        >
          <p
            className='
            hidden 
            lg:block 
            text-center
            font-semibold
            text-white 
            text-[20px]
        '
          >
            Tweet
          </p>
        </div>
      </div>
    </div>
  );
};

export default SidebarTweetButton;
