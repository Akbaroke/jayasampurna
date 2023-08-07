import * as React from 'react';
import { Skeleton } from '@mantine/core';
import getImgUrl from '../../public/getImgUrl';

export interface PropsCard {
  id: string;
  url: string;
  judul: string;
  imgUrl: string;
}

export default function Card({ value }: { value: PropsCard }) {
  const [isLoading, setIsLoading] = React.useState(true);
  return (
    <a href={value.url} target="_blank" className="bg-white rounded-lg flex flex-col border shadow-sm hover:shadow-none hover:scale-95 transition-all duration-500" data-aos="fade-up" data-aos-delay={parseInt(value.id) * 15}>
      <Skeleton visible={isLoading}>
        <img src={getImgUrl(value.imgUrl)} alt={value.judul} className="rounded-tr-lg rounded-tl-lg h-48 w-full object-center object-cover" onLoad={() => setIsLoading(false)} />
      </Skeleton>
      <h1 className="capitalize font-medium text-[13px] text-center p-3">"{value.judul}"</h1>
    </a>
  );
}
