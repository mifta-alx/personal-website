<template>
  <div class="flex justify-center p-4 md:p-6 min-h-screen">
    <div class="flex flex-col md:flex-row gap-3 md:gap-4 w-full max-w-6xl">
      <Sidebar>
        <Profile />
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton href="/home" icon="solar:home-2-linear"
                >Home</SidebarMenuButton
              >
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/about" icon="solar:user-circle-linear"
                >About</SidebarMenuButton
              >
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/project" icon="solar:code-2-linear"
                >Project</SidebarMenuButton
              >
            </SidebarMenuItem>
          </SidebarMenu>
          <div class="flex flex-row gap-2">
            <ColorModePicker />
            <NuxtLink
              to="/hire-me"
              class="flex md:hidden gap-1 cursor-pointer items-center justify-center w-fit bg-dark-6 hover:bg-dark-contrast-5 dark:bg-dark-contrast-4 dark:hover:bg-dark-contrast-5 transition-all duration-300 ease-in-out text-light-1 rounded-md h-8 px-2.5 text-xs font-semibold"
            >
              <Icon name="solar:add-circle-line-duotone" size="14" />
              Hire Me
            </NuxtLink>
          </div>
        </SidebarGroup>
      </Sidebar>
      <div
        class="w-full rounded-xl bg-light-contrast-1 dark:bg-dark-contrast-6 p-6"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
