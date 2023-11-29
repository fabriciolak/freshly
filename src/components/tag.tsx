import React from 'react'
import { Text } from './text'
import { tw } from '@/utils/ts-merge'
import { spaceGrotesk } from '@/styles/fonts'

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Tag = React.forwardRef<HTMLDivElement, TagProps>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} {...props} className={tw(['flex gap-2 justify-center items-center py-1 px-2 rounded-full bg-white/10 font-medium', spaceGrotesk.className, className])}>
      {children}
    </div>
  )
})

Tag.displayName = 'Tag'