import Image from 'next/image'
import { Text } from './text'
import { tw } from '@/utils/ts-merge'
import React from 'react'

interface RecipeCategorieProps extends React.ComponentProps<'div'> {
  image: string
  categorieName: string
}

export function RecipeCategorie({ className, image, categorieName, ...props}: RecipeCategorieProps) {
  return (
    <div className={tw(["flex-1", className])} {...props}>
      <div className='flex items-center gap-4'>
        <Image
          src={`/images${image}` ?? ''}
          alt='meatballs'
          className='rounded-2xl w-[76px] h-[76px] object-cover'
          width={80}
          height={80}
        />
        <Text className='text-2xs'>{categorieName}</Text>
      </div>
    </div>
  )
}