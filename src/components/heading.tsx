import React from 'react'
import { tw } from '@/utils/ts-merge'
import { spaceGrotesk } from '@/styles/fonts'

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(({ children, className, as, ...props }, ref) => {
  const Comp = as ?? 'h1'

  return (
    <Comp ref={ref} className={tw(['font-medium text-2xl text-[#1F1D1B]', className, spaceGrotesk.className])} {...props}>{children}</Comp>
  )
})

Heading.displayName = 'Heading'