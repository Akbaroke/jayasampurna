import { IoMdArrowRoundUp } from 'react-icons/io';

export default function ButtonScrolltoTop({ scrollTo, opacity }: { scrollTo: ({ y }: { y: number }) => void; opacity?: 0 | 1 }) {
  return (
    <button
      onClick={() => scrollTo({ y: 0 })}
      style={{ opacity: opacity }}
      className={`fixed z-40 bottom-10 right-5 bg-baseLight text-primary p-3 rounded-full transition-all duration-500 backdrop-filter backdrop-blur-md text-[22px] shadow-2xl hover:scale-110`}>
      <IoMdArrowRoundUp />
    </button>
  );
}
