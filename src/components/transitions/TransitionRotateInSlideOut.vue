<template>
  <Transition
    enterActiveClass="transition duration-100"
    enterFromClass="transform opacity-0 translate-x-6 -rotate-45"
    enterToClass="transform opacity-100 rotate-0"
    leaveActiveClass="transition duration-100"
    leaveFromClass="transform opacity-100"
    leaveToClass="transform opacity-0 -translate-x-6"
  >
    <slot />
  </Transition>
</template>
