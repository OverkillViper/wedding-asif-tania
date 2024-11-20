<script setup>
import { ref } from 'vue';

const active = ref(false);

function toggleActive() {
  active.value = !active.value;
}

</script>

<template>
  <ul class="nav py-4 font-quicksand font-medium grid grid-cols-2 md:flex md:justify-center">
    <li class="mx-4 text-ash-900 text-sm">
      <router-link :to="{ name: 'Landing' }">
        Invitation
      </router-link>
    </li>
    <li class="mx-4 text-ash-900 text-sm">
      <router-link :to="{ name: 'BrideAndGroom' }">
        Bride & Groom
      </router-link>
    </li>
    <li class="mx-4 text-ash-900 text-sm">
      <router-link :to="{ name: 'Wedding' }">
        Wedding
      </router-link>
    </li>
    <li class="mx-4 text-ash-900 text-sm">
      <router-link :to="{ name: 'Reception' }">
        Reception
      </router-link>
    </li>
  </ul>

  
</template>

<style>
.nav {
  text-transform: uppercase;
  text-align: center;
}

.nav * {
  box-sizing: border-box;
  transition: all .35s ease;
}

.nav li {
  display: inline-block;
  list-style: outside none none;
  margin: .5em 1em;
  padding: 0;
}

.nav a {
  padding: .5em .8em;
  position: relative;
  text-decoration: none;
}

.nav a::before,
.nav a::after {
  content: '';
  height: 14px;
  width: 14px;
  position: absolute;
  transition: all .35s ease;
  opacity: 0;
}

.nav a::before {
  content: '';
  right: 0;
  top: 0;
  border-top: 1px solid #030303;
  border-right: 1px solid #030303;
  transform: translate(-100%, 50%);
}

.nav a:after {
  content: '';
  left: 0;
  bottom: 0;
  border-bottom: 1px solid #030303;
  border-left: 1px solid #030303;
  transform: translate(100%, -50%)
}

.nav a:hover:before,
.nav a:hover:after{
  transform: translate(0,0);
  opacity: 1;
}

.nav a:hover {
  color: #222222;
}
</style>