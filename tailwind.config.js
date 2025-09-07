/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  safelist: [
    'h-[350px]',
    'w-[90%]',
    'md:w-[80%]',
    'lg:w-[80%]',
    'rounded-[20px]',
    'object-contain',
    'text-[32px]',
    'lg:text-[48px]',
    'text-[16px]',
    'lg:text-[20px]',
    'mt-[10px]',
    'pb-[30px]',
    'pt-[90px]',
    'pl-[5%]',
    'text-[20px]',
    'list-disc',
    'ml-[20px]',
    'pt-[50px]',
    'pb-[20px]',
    'text-[18px]',
    'mb-[15px]',
    'rounded-lg',
    'px-6', 'py-3'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
