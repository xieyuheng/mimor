<template>
  <Transition
    enterActiveClass="transition duration-200 ease-out"
    enterFromClass="transform translate-y-8 opacity-0"
    enterToClass="transform translate-y-0 opacity-100"
    leaveActiveClass="transition duration-150 ease-out"
    leaveFromClass="transform translate-y-0 opacity-100"
    leaveToClass="transform translate-y-8 opacity-0"
  >
    <slot />
  </Transition>
</template>
