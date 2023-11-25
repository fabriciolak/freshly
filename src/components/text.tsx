import React from 'react'
import { tw } from '@/utils/ts-merge'
import { spaceGrotesk } from '@/styles/fonts'

interface TextProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const Text = React.forwardRef<HTMLHeadingElement, TextProps>(({ children, className, ...props }, ref) => {
  return (
    <p ref={ref} className={tw(['font-medium text-base text-[#1F1D1B]', className, spaceGrotesk.className])} {...props}>{children}</p>
  )
})

Text.displayName = 'Text'