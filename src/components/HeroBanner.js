import React from 'react'
import Link from '@docusaurus/Link'
import Image from '@theme/IdealImage'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { cn } from '@/lib/utils'
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text'

const FrameworkPill = ({ framework }) => {
  return (
    <div className='inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 transition-all duration-200 hover:scale-105 hover:border-gray-300 hover:bg-white hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600 dark:hover:bg-gray-900'>
      <Image
        img={useBaseUrl(framework.icon)}
        alt={framework.name}
        className='mr-1.5 h-4 w-4 sm:mr-2'
      />
      <span className='text-sm font-semibold text-gray-700 sm:text-sm dark:text-gray-300'>
        {framework.name}
      </span>
    </div>
  )
}

export default function HeroBanner() {
  const frameworks = [
    {
      id: 'python',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
      name: 'Python'
    },
    {
      id: 'django',
      icon: '/img/django.svg',
      name: 'Django'
    },
    {
      id: 'javascript',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
      name: 'JavaScript'
    },
    {
      id: 'svelte',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg',
      name: 'SvelteKit'
    },
    {
      id: 'react',
      icon: '/img/react.svg',
      name: 'React'
    },
    {
      id: 'tailwind',
      icon: '/img/tailwind.svg',
      name: 'Tailwind CSS'
    },
    {
      id: 'rust',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg',
      name: 'Rust'
    },
    {
      id: 'devops',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Devops-toolchain.svg',
      name: 'DevOps'
    }
  ]

  return (
    <div>
      <div className='px-4 py-8 sm:py-12'>
        <div className='mx-auto max-w-7xl'>
          <div className='text-center'>
            <div className='group relative mx-auto flex w-max items-center justify-center rounded-full bg-white px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-transparent'>
              <span
                className={cn(
                  'animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-linear-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-size-[300%_100%] p-px'
                )}
                style={{
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'destination-out',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'subtract',
                  WebkitClipPath: 'padding-box'
                }}
              />
              <AnimatedGradientText className='text-sm font-medium'>
                🚀 As-salaamu alaikum wa rahmatullah
              </AnimatedGradientText>
            </div>

            <h1 className='mt-4 mb-4 text-[28px] leading-tight font-bold text-gray-900 sm:mt-6 sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white'>
              Hello world! I'm
              <br className='hidden sm:block' />
              <span className='sm:hidden'> </span>Mahmud Abdur Rahman
            </h1>

            <p className='mx-auto mb-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:mb-8 sm:text-lg dark:text-gray-300'>
              Software Engineer from Dhaka, Bangladesh specialized in modern computer programming languages like 
              Python, PHP, Javascript, Rust, Golang etc. & has extensive development experience with Django, Wagtail, Laravel, Sveltekit, React.js, Axum etc.
            </p>

            <div className='flex flex-wrap justify-center gap-4'>
              {frameworks.map((framework) => (
                <FrameworkPill key={framework.id} framework={framework} />
              ))}
            </div>

            <div className='mt-6'>
              <Link
                href='https://mahmudabdurrahman.com'
                className='text-blue-700 dark:text-green-700'
              >
                👉 Please go to my official website for more about project information
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
