<template>
  <div class="flex justify-center p-2 md:p-6 min-h-screen">
    <div class="flex flex-col md:flex-row gap-2 md:gap-4 w-full max-w-6xl">
      <Sidebar>
        <div class="flex flex-col gap-2">
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
              <SidebarMenuItem>
                <SidebarMenuButton href="/chat" icon="solar:dialog-linear"
                  >Chat</SidebarMenuButton
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
        </div>
        <SidebarFooter />
      </Sidebar>
      <div
        class="w-full md:min-h-[calc(100vh-48px)] rounded-xl bg-light-contrast-1 dark:bg-dark-contrast-6 border border-light-2 dark:border-dark-5"
      >
        <slot />
      </div>
      <Footer />
    </div>
  </div>
</template>
