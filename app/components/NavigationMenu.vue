<script setup lang="ts">
import { contacts, navigation } from "~/data/navigation";
</script>

<template>
  <Sidebar>
    <SidebarGroup>
      <SidebarGroupLabel>navigation</SidebarGroupLabel>
      <SidebarMenu>
        <SidebarMenuItem v-for="item in navigation" :key="item.url">
          <SidebarMenuButton
            :href="item.url"
            :icon="item.icon"
            :target="item.target"
          >
            {{ item.label }}
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
    <SidebarGroup>
      <SidebarGroupLabel>connect</SidebarGroupLabel>
      <SidebarMenu>
        <SidebarMenuItem v-for="item in contacts" :key="item.url">
          <SidebarMenuButton
            :href="item.url"
            :icon="item.icon"
            :target="item.target"
          >
            {{ item.label }}
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>

    <SidebarGroup class="hidden xl:flex">
      <SidebarGroupLabel>mode</SidebarGroupLabel>
      <ColorModeToggle />
    </SidebarGroup>
  </Sidebar>
</template>
