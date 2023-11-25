import React from 'react'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import { Heading } from './heading'
import { Text } from './text'
import Link from 'next/link'

export function Header() {
  return (
    <header className='xl:w-container max-h-[70px] mx-auto flex items-center justify-between lg:justify-center py-[10px] mt-5 px-8 xl:px-0'>
      {/* Logo */}
      <div className='flex items-center justify-center gap-3 lg:mr-[61px]'>
        <div>
          <Image 
            src='/freshly.svg'
            alt='Freshly Logo'
            width={48}
            height={48}
          />
        </div>
        <Heading as='h2' className='hidden md:flex'>
          Freshly
        </Heading>
      </div>
      
      {/* Navigation */}
      <nav className='hidden sm:flex lg:gap-12 gap-6 py-[15px] lg:mr-auto'>
        <Link href='/'>
          <Text>
            Recipes
          </Text>
        </Link>
        <Link href='/'>
          <Text>
            Categories
          </Text>
        </Link>
        <Link href='/'>
          <Text>
            Favorites
          </Text>
        </Link>
        <Link href='/'>
          <Text>
            Lists
          </Text>
        </Link>
      </nav>
      
      {/* Actions */}
      <div className='flex gap-4'>
        <div className='hidden lg:flex justify-center items-center'>
          <button type="button" className='justify-center items-center gap-2 rounded-full py-[10px] px-4 bg-[#EC4700]'>
            <Text className='text-white'>
              + Add Recipe
            </Text>
          </button>
        </div>

        <div className='flex items-center sm:hidden'>
          <Menu size={24} className='cursor-pointer' />
        </div>

        <Image 
          src='https://github.com/fabriciolak.png'
          alt='Profile Picture'
          className='rounded-full cursor-pointer'
          width={48}
          height={48}
        />
      </div>
    </header>
  )
}