<template>
  <div class="relative mx-auto">
    <NuxtImg
      width="1400"
      height="800"
      class="h-[420px] w-full object-cover lg:h-[560px] xl:h-[640px]"
      src="/images/hero-4.jpg"
      alt="Hero image"
      loading="eager"
      sizes="sm:100vw md:1400px"
      fetchpriority="high"
      preload
      placeholder
      placeholder-class="blur-xl" />
    <div
      class="from-gray-200 container absolute inset-0 flex flex-col items-start justify-center bg-gradient-to-l md:bg-none">
      <h1
        class="text-lg font-bold md:mb-4 lg:text-3xl">
        جدیدترین ها
      </h1>
      <div
        class="text-md mb-8 max-w-sm text-balance font-light lg:max-w-md">
        <p>برای خرید انواع لباس کافیه</p>
      </div>
      <NuxtLink
        class="bg-gray-800 hover:bg-gray-800 rounded-xl px-6 py-3 font-bold text-white"
        to="/"
        >کلیک کنید</NuxtLink
      >
    </div>
  </div>
</template>
