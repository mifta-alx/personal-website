<template>
  <section id="about" class="pt-10 pb-10 lg:pb-15 xl:pb-20">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <div
        class="order-2 lg:order-1 overflow-hidden aspect-4/5 w-full h-full rounded-2xl"
      >
        <NuxtImg
          src="/images/alx.webp"
          placeholder
          :preload="{ fetchPriority: 'high' }"
          quality="90"
          format="webp"
          alt="Alx"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="order-1 lg:order-2">
        <div class="space-y-6">
          <h2 class="text-base font-normal uppercase font-mono text-primary">
            about
          </h2>
          <h1
            class="text-2xl md:text-3xl lg:text-4xl mb-8 text-primary/70 tracking-tight font-medium"
          >
            Building with purpose, learning with curiosity
          </h1>
          <div class="space-y-6 text-base text-secondary/90 leading-snug">
            <p>
              I'm Mifta, a 23-year-old Frontend Developer driven by a curiosity
              for how digital products are built. I love
              <span class="text-primary">solving problems through code</span
              >, focusing on being
              <span class="text-primary">detail-oriented</span> to ensure
              every product I build feels solid and intuitive for the user.
            </p>
            <p>
              I enjoy working across the full development process—from early
              concepts to finished products. I thrive on
              <span class="text-primary">bridging the gap</span> between
              complex requirements and technical implementation, always ensuring
              that the logic behind the code serves the final user experience.
            </p>
            <p>
              Outside of coding, I enjoy gaming, listening to music, and
              watching films. I'm always curious about new things and finding
              inspiration in the details of everyday life.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
