<template>
  <div class="flex flex-col xl:flex-row relative min-h-screen">
    <NavigationMenu />
    <main class="flex flex-1 bg-background py-20 px-5 lg:px-10 xl:px-20 justify-center">
      <slot />
    </main>
  </div>
</template>