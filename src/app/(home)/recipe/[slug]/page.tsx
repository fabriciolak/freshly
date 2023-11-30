import Image from 'next/image'
import * as Profile from "@/components/profile";
import * as RecipeCard from "@/components/recipe-card";
import { Heading } from "@/components/heading";
import { Text } from "@/components/text";
import { Tag } from "@/components/tag";
import { BookmarkPlus, Heart, MessageCircle, PauseCircle, QrCodeIcon, Zap } from "lucide-react";

const comments = [
  {
    id: 1,
    text: "Some of the most delicious tacos I’ve ever had! The whole family loved them 😍",
    author: 'James',
    createdAt: '2h ago',
    image: 'person-1.png'
  },
  {
    id: 2,
    text: "Works really well with shrimp and fish 🐟",
    author: 'Molly',
    createdAt: '5h ago',
    image: 'person-2.png'
  },
  {
    id: 3,
    text: "I just had some like an hour ago and now I’m craving more. Soooo good. Thank you so much for this recipe. You are a legend!",
    author: 'Melissa',
    createdAt: '2h ago',
    image: 'person-3.png'
  },
  {
    id: 4,
    text: "Wow! The best!",
    author: 'Antoine',
    createdAt: '2h ago',
    image: 'person-4.png'
  }
]

const related = [
  {
    id: 1,
    image: '/images/taco-1.jpeg',
  },
  {
    id: 2,
    image: '/images/taco-2.jpeg',
  },
  {
    id: 3,
    image: '/images/taco-3.jpeg',
  },
  {
    id: 4,
    image: '/images/taco-4.jpeg',
  }
]

export default function Recipe() {
  return (
    <div className="w-full xl:w-recipe mx-auto mt-[55px] px-8 xl:px-0">
      {/* Header */}
      <div>
        <div className="flex flex-col gap-4">
          <Heading>
            Simple delicious beef tacos
          </Heading>

          <div className="flex gap-2">
            <Tag className="text-1xs text-black bg-[rgba(31,_29,_27,_0.15)] font-medium">Italian</Tag>
            <Tag className="text-1xs text-black bg-[rgba(31,_29,_27,_0.15)] font-medium">Fried</Tag>
            <Tag className="text-1xs text-black bg-[rgba(31,_29,_27,_0.15)] font-medium">Main Course</Tag>
          </div>
        </div>

        <div className="relative w-full h-[428px] rounded-3xl my-8 bg-black/60 overflow-hidden group">
          <div className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-10'>
            <button type="button" className='bg-[rgba(31,_29,_27,_0.40)] flex gap-[6px] items-center justify-center px-4 py-3 rounded-full'>
              <PauseCircle className='text-white' size={24} />
              <Text className='text-white'>Play</Text>
            </button>
          </div>

          <div className='absolute right-6 top-4 z-10'>
            <div className='bg-[rgba(31,_29,_27,_0.40)] flex flex-col gap-[20px] items-center justify-center px-4 py-3 rounded-full'>
              <button type="button">
                <Heart className='text-white' size={24} />
                <Text className='text-white'>89</Text>
              </button>
              <button type="button">
                <MessageCircle className='text-white' size={24} />
                <Text className='text-white'>45</Text>
              </button>
              <button type="button">
                <Zap className='text-white' size={24} />
                <Text className='text-white'>25k</Text>
              </button>
              <button type="button">
                <BookmarkPlus className='text-white' size={24} />
                <Text className='text-white'>25</Text>
              </button>
            </div>
          </div>
          

          <Image
            src='/images/video-background.jpeg'
            alt='picture'
            className='w-full h-full object-cover group-hover:scale-105 transition-all duration-300 group-hover:blur-[2px]'
            width={760}
            height={430}
          />
        </div>

        <Profile.Root>
          <Profile.Picture authorImage="https://github.com/fabriciolak.png" authorName="Fabrício" />
          <Profile.Actions className="gap-4">
            <button type="button" className="w-10 h-10 flex items-center justify-center text-white bg-[#1F1D1B] rounded-full cursor-pointer">
              <QrCodeIcon size={24} />
            </button>
            <button type="button" className="w-10 h-10 flex items-center justify-center text-white bg-[#1F1D1B] rounded-full cursor-pointer">
              <Zap size={24} />
            </button>
            <button type="button" className="text-white bg-[#EC4700] px-4 py-[10px] rounded-full cursor-pointer">
              <Text className="text-white">Follow</Text>
            </button>
          </Profile.Actions>
        </Profile.Root>
      </div>

      {/* Content */}
      <div className="my-10 space-y-8">
        <div className="space-y-4">
          <Heading as="h3">
            Chef&apos;s House
          </Heading>
          <Text className="text-2xs font-normal">
            This is my personal favorite disg and version. Definitely recommend experimenting Add lomboks for spice or green tea for additional flavor
          </Text>
        </div>

        <div className="space-y-4">
          <Heading as="h3">
            Details
          </Heading>
          <ul className="pl-5 text-2xs font-normal list-disc space-y-3">
            <li className="text-2xs leading-[29px]">⏲️ Prep time: 20 min</li>
            <li className="text-2xs leading-[29px]">🍳 Cook time: 3 hours +</li>
            <li className="text-2xs leading-[29px]">🍽️ Servings: 4</li>
          </ul>
        </div>

        <div className="space-y-4">
          <Heading as="h3">
            Ingredients
          </Heading>
          <ul className="pl-5 text-2xs font-normal list-disc space-y-3">
            <li className="text-2xs leading-[29px]">1.5Kg beef in 5cm pieces</li>
            <li className="text-2xs leading-[29px]">5 salam leaves</li>
            <li className="text-2xs leading-[29px]">2 sticks of lemongrass</li>
            <li className="text-2xs leading-[29px]">25gr dried coconut flakes</li>
            <li className="text-2xs leading-[29px]">200ml pineapple juice or oj</li>
            <li className="text-2xs leading-[29px]">1liter santen (coconut milk)</li>
            <li className="text-2xs leading-[29px]">4 red peppers or 2 habanero</li>
            <li className="text-2xs leading-[29px]">3tbps corianderseeds</li>
            <li className="text-2xs leading-[29px]">5cm piece of laos grated</li>
            <li className="text-2xs leading-[29px]">10cm ginger grated</li>
            <li className="text-2xs leading-[29px]">1tbsp koenjit</li>
            <li className="text-2xs leading-[29px]">10 cloves of garlic</li>
            <li className="text-2xs leading-[29px]">4 red peppers or 2 habanero</li>
            <li className="text-2xs leading-[29px]">Lomboks to taste (optional)</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <Heading as="h3">
            Ingredients
          </Heading>
          <ul className="pl-5 text-2xs font-normal list-decimal space-y-3">
            <li className="text-2xs leading-[29px]">In a kitchen mixer add peppers,garlic,laos,ginger,koenjit and the koenjit and blend to a paste</li>
            <li className="text-2xs leading-[29px]">Take the paste and rub it into the beef</li>
            <li className="text-2xs leading-[29px]">Take the beef and santen and bring to a softboilboil</li>
            <li className="text-2xs leading-[29px]">Add the salamleaves and lemongrass(bruised) and simmer on low for 2 hours</li>
            <li className="text-2xs leading-[29px]">Taste add optional lomboks and salt and simmer 1 more hour stirring occasionally</li>
            <li className="text-2xs leading-[29px]">When the liquid has evaporated and oil floats to the top and the meat is goldenbrown its done</li>
            <li className="text-2xs leading-[29px]">Toast the coconut flakes and stir it into the stew</li>
            <li className="text-2xs leading-[29px]">During the cooling down the meat will soak up the liquid we rehydrate this with the pineapple juice</li>
          </ul>
        </div>
      </div>

      {/* Related */}

      <div className="my-10 space-y-8">
        <Heading as="h3">
          More Tacos
        </Heading>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {related.map((recipe, index) => (
            <RecipeCard.Root
              slug='taco-salad'
              className="flex-col gap-[10px] h-[260px] from-transparent to-transparent group hover:from-black/80 transition duration-300"
              imageUrl={recipe.image}
              key={recipe.id}
            >
              <RecipeCard.Content>
                <Heading as="h3" className='text-white text-lg hidden group-hover:block'>
                  Taco Salad
                </Heading>
              </RecipeCard.Content>

              <RecipeCard.Tags className='hidden group-hover:flex'>
                <Tag className='text-white text-xs bg-[rgba(255,_255,_255,_0.15)]'>Mexican</Tag>
                <Tag className='text-white text-xs bg-[rgba(255,_255,_255,_0.15)]'>Meat</Tag>
                <Tag className='text-white text-xs bg-[rgba(255,_255,_255,_0.15)]'>Veggies</Tag>
              </RecipeCard.Tags>
            </RecipeCard.Root>
          ))}
        </div>
      </div>

      <div className="space-y-10 mb-[60px]">
        <Heading as="h3">
          Comments
        </Heading>

        <div className="flex flex-col gap-4">
          {comments.map((comment, index) => (
            <div className="flex gap-4 py-4 border-b border-b-[#DEDBD7]" key={comment.id}>
              <Profile.Root>
                <Profile.Picture className="w-12 h-12" authorImage={`/images/${comment.image}`} />
              </Profile.Root>
  
              <div className="space-y-[6px]">
                <div className="flex gap-2">
                  <Text className="font-normal">{comment.author}</Text>
                  <Text className="font-normal">·</Text>
                  <Text className="font-normal">{comment.createdAt}</Text>
                </div>
  
                <Text className="font-normal text-2xs">
                  {comment.text}
                </Text>
              </div>
            </div>
          ))}

          <div className="flex flex-col gap-4">
            <Heading as="h3">Reply</Heading>
            <textarea className="w-full h-[115px] p-4 rounded-3xl border border-[#DEDBD7]"></textarea>
            <div className="ml-auto">
              <button type="button" className="px-4 py-[10px] bg-[#EC4700] rounded-3xl">
                <Text className="text-white">Post Reply</Text>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}