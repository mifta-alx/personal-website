<script setup lang="ts">
const navigation = [
  {
    url: "/",
    icon: null,
    label: "Work",
  },
  {
    url: "/about",
    icon: null,
    label: "About",
  },
  {
    url: "/stack",
    icon: null,
    label: "Stack",
  },
  {
    url: "https://drive.google.com/file/d/1K45yTCw0Vf1r3csYQjHPDvVtSwtg-jnK/view?usp=drive_link",
    icon: null,
    label: "Resume",
    target: "_blank",
  },
];

const contacts = [
  // {
  //   url: "mailto:miftakhussurural@gmail.com",
  //   icon: "ph:envelope",
  //   label: "Email",
  //   target: "_blank",
  // },
  {
    url: "/contact",
    icon: "ph:envelope",
    label: "Contact",
  },
  {
    url: "https://github.com/mifta-alx",
    icon: "ph:github-logo",
    label: "Github",
    target: "_blank",
  },
  {
    url: "https://www.linkedin.com/in/miftakhussurur",
    icon: "ph:linkedin-logo",
    label: "LinkedIn",
    target: "_blank",
  },
  {
    url: "https://www.instagram.com/alx.al_",
    icon: "ph:instagram-logo",
    label: "Instagram",
    target: "_blank",
  },
  {
    url: "https://www.tiktok.com/@alxsemuanya",
    icon: "ph:tiktok-logo",
    label: "Tiktok",
    target: "_blank",
  },
];
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
