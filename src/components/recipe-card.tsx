import React from "react"
import { tw } from "@/utils/ts-merge"
import { spaceGrotesk } from "@/styles/fonts"
import Link from "next/link"

interface RecipeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl?: string
  slug: string
}

const Root = React.forwardRef<HTMLDivElement, RecipeCardProps>(({ className, children, imageUrl, slug, ...props }, ref) => {
  return (
    <Link replace href={`/recipe/${slug}`}>
      <div 
        className={tw(["relative w-full h-[24.375rem] overflow-hidden rounded-3xl", className, spaceGrotesk.className])} 
        ref={ref} 
        style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        {...props}
      >
        <div className={tw(["absolute flex flex-col h-full w-full px-5 py-6 bg-gradient-to-t to-black/25 from-black"], className)}>
          
            {children}
        </div>
      </div>
    </Link>
  )
})

Root.displayName = "Root"

const Actions = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ children, ...props }, ref) => {
  return (
    <div className="flex flex-col gap-3" ref={ref} {...props}>
      {children}
    </div>
  )
})

Actions.displayName = 'Actions'

const ActionItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ children, className, ...props }, ref) => {
  return (
    <div className="flex justify-end">
      <div className={tw(["flex items-center flex-col gap-0.5", className])} ref={ref} {...props}>
        {children}
      </div>
    </div>
  )
})

ActionItem.displayName = 'ActionItem'

const Content = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ children, ...props }, ref) => {
  return (
    <div className="mt-auto">
      {children}
    </div>
  )
})

Content.displayName = 'Content'

const Tags = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({children, ...props}, ref) => {
  return (
    <div className="w-full mt-[10px] flex gap-2" ref={ref} {...props}>
      {children}  
    </div>
  )
})

Tags.displayName = 'Tags'

export { Root, Content, Actions, ActionItem, Tags }