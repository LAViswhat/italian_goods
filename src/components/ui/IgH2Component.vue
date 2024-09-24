<template>
  <h2 class="lg:text-6xl relative capitalize"><slot></slot></h2>
</template>
<script></script>
<style scoped>
h2::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  height: 4px;
  border-radius: 4rem;
  background-color: #c2a16d;
  width: 50%;
  transform: translate(-50%, 15%);
}

@media (min-width: 1024px) {
  h2::before {
    bottom: -25px;
  }
}
</style>
