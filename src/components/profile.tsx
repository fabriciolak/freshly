import Image from 'next/image'
import { Text } from './text'
import { Zap, Heart } from "lucide-react"
import React from 'react'
import { tw } from '@/utils/ts-merge'

const Profile = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-y-6 items-start lg:items-center lg:justify-between">
      <div className="flex items-center gap-2">
        <Image
          src="https://github.com/fabriciolak.png"
          alt="picture"
          width={64}
          height={64}
          className="rounded-full"
        />

        <Text className="text-2xs">Fabrício</Text>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Zap size={24} className="text-black/80" />
          <Text className="text-black/80">1.5M</Text>
        </div>

        <div className="flex items-center gap-1">
          <Heart size={24} className="text-black/80" />
          <Text className="text-black/80">532</Text>
        </div>

        <button type="button" className="px-4 py-[10px] rounded-full bg-[#EC4700] text-white">Follow</button>
      </div>
    </div>
  )
}

type ProfilePrimitive = React.HTMLAttributes<HTMLDivElement>

interface ProfileRootProps extends ProfilePrimitive {}

interface ProfilePictureProps extends ProfilePrimitive {
  authorImage: string
  authorName: string
}

interface ProfileActionsProps extends ProfilePrimitive {}

const Root = React.forwardRef<HTMLDivElement, ProfileRootProps>(({ children, className, ...props }, ref) => {
  return (
    <div className={tw(["flex flex-row items-center justify-between", className])} ref={ref} {...props}>
      {children}
    </div>
  )
})

Root.displayName = 'Root'

const Picture = React.forwardRef<HTMLDivElement, ProfilePictureProps>(({ children, className, authorImage, authorName, ...props }, ref) => {
  return (
    <div className={tw(["flex items-center gap-2", className])} ref={ref} {...props}>
      <Image
        src={authorImage}
        alt="picture"
        width={64}
        height={64}
        className="rounded-full"
      />

      <Text className="text-2xs">{authorName}</Text>
    </div>
  )
})

Picture.displayName = 'Picture'

const Actions = React.forwardRef<HTMLDivElement, ProfileActionsProps>(({ children, className, ...props }, ref) => {
  return (
    <div className={tw(["flex items-center gap-4", className])} ref={ref} {...props}>
      {children}
    </div>
  )
})

Actions.displayName = 'Actions'



export { Root, Picture, Actions }