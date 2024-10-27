<template>
  <Transition
    enterActiveClass="transition duration-700 ease-in-out"
    enterFromClass="transform transform-gpu opacity-0"
    enterToClass="transform transform-gpu opacity-100"
  >
    <slot />
  </Transition>
</template>
