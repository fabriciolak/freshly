import { Header } from "@/components/header"
import { Heading } from "@/components/heading"
import { Tag } from "@/components/tag"
import { Text } from "@/components/text"
import * as Profile from '@/components/profile'
import * as RecipeCard from "@/components/recipe-card"
import { Bookmark, Heart, Zap } from "lucide-react"
import { RecipeCategorie } from "@/components/recipe-categorie"
import Image from "next/image"

const cards = [
  {
    id: 1,
    title: 'Easy Meatballs with Arugula',
    tags: ['Italian', 'Fried', 'Main Course'],
    imageUrl: '/images/meatballs.jpg',
  },
  {
    id: 2,
    title: 'Best Steak & Veggies',
    tags: ['American', 'Meat', 'Veggie'],
    imageUrl: '/images/steak.webp',
  },
  {
    id: 3,
    title: 'Baked Eggs in a Blanket',
    tags: ['American', 'Meat', 'Veggie'],
    imageUrl: '/images/eggs.jpg',
  },
  {
    id: 4,
    title: 'Home-made Raspberry Ice Cream',
    tags: ['American', 'Meat', 'Veggie'],
    imageUrl: '/images/ice-cream.jpg',
  }
]

const author_recipes = [
  {
    id: 1,
    image: '/images/camarao.png',
  },
  {
    id: 2,
    image: '/images/eggs.jpg',
  },
  {
    id: 3,
    image: '/images/hamburger.jpg',
  },
  {
    id: 4,
    image: '/images/ice-cream.jpg',
  },
  {
    id: 5,
    image: '/images/meatballs.jpg',
  },
  {
    id: 6,
    image: '/images/pizza.jpg',
  },
  {
    id: 7,
    image: '/images/salad.jpg',
  },
  {
    id: 8,
    image: '/images/steak.webp',
  },
  {
    id: 9,
    image: '/images/sushi.jpg',
  },
]

export default function Home() {
  return (
    <div>
      <Header />
      
      <section className="w-full xl:w-container mx-auto flex flex-col gap-6 mt-[39px] px-8 xl:px-0">
        <Heading as="h2">
          Popular Recipes
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((item, i) => (
            <RecipeCard.Root imageUrl={item.imageUrl} key={item.id}>
              <RecipeCard.Actions>
                <RecipeCard.ActionItem>
                  <Heart size={20} className="cursor-pointer text-white" />
                  <Text className="text-xs mt-0.5 text-white font-medium">
                    88
                  </Text>
                </RecipeCard.ActionItem>
                <RecipeCard.ActionItem>
                  <Heart size={20} className="cursor-pointer text-white" />
                  <Text className="text-xs mt-0.5 text-white font-medium">
                    88
                  </Text>
                </RecipeCard.ActionItem>
                <RecipeCard.ActionItem>
                  <Heart size={20} className="cursor-pointer text-white" />
                  <Text className="text-xs mt-0.5 text-white font-medium">
                    25k
                  </Text>
                </RecipeCard.ActionItem>
              </RecipeCard.Actions>

              <RecipeCard.Content>
                <Heading as="h3" className="text-white text-lg">
                  {item.title}
                </Heading>

                <RecipeCard.Tags>
                  {item.tags.map((tag, i) => (
                    <Tag className="text-white text-xs" key={item.id}>{tag}</Tag>
                  ))}
                </RecipeCard.Tags>
              </RecipeCard.Content>
            </RecipeCard.Root>
          ))}
        </div>
      </section>

      <section className="w-full xl:w-container mx-auto flex flex-col gap-6 mt-[60px] px-8 xl:px-0">
        <Heading as="h2">
          Popular categories
        </Heading>

        <div className="w-full flex flex-col gap-y-6">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-10 gap-y-6">
            {Array.from({ length: 10 }).map((_, i) => (
              <RecipeCategorie key={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full xl:w-container mx-auto flex flex-col gap-6 mt-[60px] px-8 xl:px-0">
        <Heading as="h2">
          Under 30 minutes
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((item, i) => (
            <RecipeCard.Root className="from-transparent" imageUrl={item.imageUrl} key={item.id} />
          ))}
        </div>
      </section>
      
      <section className="w-full xl:w-container mx-auto flex flex-col gap-6 mt-[83px] mb-[163px] px-8 xl:px-0">
        <div className="flex items-center gap-6">
          <Heading as="h2" className="">
            Top users
          </Heading>
          <Text className="text-[#EC4700]">View all</Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px]">
          <div className="w-full rounded-3xl p-4 border border-[#DEDBD7] shadow-sm">
            {/* Header */}
            <Profile.Root className="flex flex-col lg:flex-row gap-y-6 items-start lg:items-center lg:justify-between">
              <Profile.Picture authorImage="https://github.com/fabriciolak.png" authorName="Fabrício" />
              <Profile.Actions>
                <div className="flex items-center gap-1">
                  <Zap size={24} className="text-black/80" />
                  <Text className="text-black/80">1.5M</Text>
                </div>

                <div className="flex items-center gap-1">
                  <Heart size={24} className="text-black/80" />
                  <Text className="text-black/80">532</Text>
                </div>

                <button type="button" className="px-4 py-[10px] rounded-full bg-[#EC4700] text-white">Follow</button>
              </Profile.Actions>
            </Profile.Root>

            <div className="flex items-center justify-between my-6 md:my-4">
              <Text className="text-2xs text-[#1F1D1B]">25 Recipes</Text>
              <Text className="text-[#EC4700]">View all</Text>
            </div>

            {/* Content */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-[21px] gap-y-4">
              {author_recipes.map((recipe, i) => (
                <div className="justify-self-auto h-[160px] flex items-center justify-center relative group" key={recipe.id}>
                  <Image
                    src={recipe.image}
                    alt="picture"
                    width={256}
                    height={256}
                    className="rounded-3xl h-full object-cover group-hover:opacity-80 transition-opacity duration-300 group-hover:blur-[2px]"
                  />
                  
                  <div className="hidden absolute group-hover:flex flex-col gap-3">
                    <div className="flex items-center gap-6">
                      <div className="flex flex-col items-center gap-1 ">
                        <Heart size={24} className="cursor-pointer text-white hover:text-white/80" />
                        <Text className="text-white hover:text-white/80">89</Text>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <Bookmark size={24} className="cursor-pointer text-white hover:text-white/80" />
                        <Text className="text-white hover:text-white/80">89</Text>
                      </div>
                    </div>

                    <button type="button" className="px-3 py-[6px] rounded-full bg-[#EC4700]   text-white">
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full rounded-3xl p-4 border border-[#DEDBD7] shadow-sm">
            {/* Header */}
            <Profile.Root className="flex flex-col lg:flex-row gap-y-6 items-start lg:items-center lg:justify-between">
              <Profile.Picture authorImage="https://github.com/fabriciolak.png" authorName="Fabrício" />
              <Profile.Actions>
                <div className="flex items-center gap-1">
                  <Zap size={24} className="text-black/80" />
                  <Text className="text-black/80">1.5M</Text>
                </div>

                <div className="flex items-center gap-1">
                  <Heart size={24} className="text-black/80" />
                  <Text className="text-black/80">532</Text>
                </div>

                <button type="button" className="px-4 py-[10px] rounded-full bg-[#EC4700] text-white">Follow</button>
              </Profile.Actions>
            </Profile.Root>

            <div className="flex items-center justify-between my-6 md:my-4">
              <Text className="text-2xs text-[#1F1D1B]">25 Recipes</Text>
              <Text className="text-[#EC4700]">View all</Text>
            </div>

            {/* Content */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-[21px] gap-y-4">
              {author_recipes.map((recipe, i) => (
                <div className="justify-self-auto h-[160px] flex items-center justify-center relative group" key={recipe.id}>
                  <Image
                    src={recipe.image}
                    alt="picture"
                    width={256}
                    height={256}
                    className="rounded-3xl h-full object-cover group-hover:opacity-80 transition-opacity duration-300 group-hover:blur-[2px]"
                  />
                  
                  <div className="hidden absolute group-hover:flex flex-col gap-3">
                    <div className="flex items-center gap-6">
                      <div className="flex flex-col items-center gap-1 ">
                        <Heart size={24} className="cursor-pointer text-white hover:text-white/80" />
                        <Text className="text-white hover:text-white/80">89</Text>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <Bookmark size={24} className="cursor-pointer text-white hover:text-white/80" />
                        <Text className="text-white hover:text-white/80">89</Text>
                      </div>
                    </div>

                    <button type="button" className="px-3 py-[6px] rounded-full bg-[#EC4700]   text-white">
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
