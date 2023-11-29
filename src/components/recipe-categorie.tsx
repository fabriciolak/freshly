import Image from 'next/image'
import { Text } from './text'
import { tw } from '@/utils/ts-merge'
import React from 'react'

interface RecipeCategorieProps extends React.ComponentProps<'div'> {}

export function RecipeCategorie({ className, ...props}: RecipeCategorieProps) {
  return (
    <div className={tw(["flex-1", className])} {...props}>
      <div className='flex items-center gap-4'>
        <Image
          src='/images/meatballs.jpg'
          alt='meatballs'
          className='rounded-2xl w-[76px] h-[76px] object-cover'
          width={80}
          height={80}
        />
        <Text className='text-2xs'>Meats</Text>
      </div>
    </div>
  )
}