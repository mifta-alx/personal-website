<template>
  <div class="flex justify-center p-4 lg:p-6 min-h-screen">
    <div class="flex flex-col lg:flex-row gap-3 lg:gap-4 w-full max-w-6xl">
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
          <ColorModePicker/>
        </SidebarGroup>
      </Sidebar>
      <div class="w-full rounded-xl bg-gray-light-contrast-1 dark:bg-gray-dark-contrast-6 p-4">
        <slot />
      </div>
    </div>
  </div>
</template>
