<template>
  <div class="flex flex-col xl:flex-row relative min-h-screen">
    <NavigationMenu />
    <main
      class="flex flex-1 bg-background pt-20 pb-15 sm:pb-20 px-5 lg:px-10 xl:px-20 justify-center"
    >
      <div class="max-w-3xl w-full flex flex-col">
        <slot />
        <Footer />
      </div>
    </main>
  </div>
</template>
