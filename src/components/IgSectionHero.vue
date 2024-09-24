<template>
  <section
    class="hero text-center overflow-hidden mx-auto max-w-3xl my-8 lg:mt-20 lg:mb-28"
  >
    <h3 class="subtitle text-secondary relative inline-block lg:text-3xl">
      Lorem, ipsum dolor.
    </h3>
    <h1 class="capitalize mt-3 lg:text-8xl lg:mt-4">Lorem, ipsum dolor.</h1>
    <p
      class="text-secondary leading-8 lg:text-2xl mt-5 lg:mt-9 px-4 text-pretty"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
      deserunt ea sit temporibus dolorum quae sed eum natus quis obcaecati
      consectetur facilis, ducimus cumque, unde assumenda distinctio. Fugit, ut
      ullam.
    </p>
  </section>
</template>
<script setup></script>
<style scoped>
.subtitle::after,
.subtitle::before {
  content: "";
  position: absolute;
  top: 50%;
  height: 1px;
  width: 100vw;
  background-color: #cbcbcb;
}

.subtitle::after {
  left: calc(100% + 30px);
}

.subtitle::before {
  right: calc(100% + 30px);
}

.anchor::before,
.anchor::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 100%;
  height: 2px;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.anchor::before {
  background-color: #fff;
}

.anchor::after {
  background-color: #c2a16d;
  width: 0%;
}
.anchor:hover::after {
  width: 100%;
}
</style>
