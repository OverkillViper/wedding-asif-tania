<script setup>
import { ref, onMounted } from 'vue';

const targetDate = new Date('2025-01-25T00:00:00').getTime();

const days = ref(0);
const dayTens = ref('0');
const dayOnes = ref('0');

const hours = ref(0);
const hourTens = ref('0');
const hourOnes = ref('0');

const minutes = ref(0);
const minuteTens = ref('0');
const minuteOnes = ref('0');

const seconds = ref(0);
const secondTens = ref('0');
const secondOnes = ref('0');

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance > 0) {
    days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds.value = Math.floor((distance % (1000 * 60)) / 1000);

    // Split the days, hours, minutes, and seconds into two characters each
    const dayString = days.value.toString().padStart(2, '0');
    const hourString = hours.value.toString().padStart(2, '0');
    const minuteString = minutes.value.toString().padStart(2, '0');
    const secondString = seconds.value.toString().padStart(2, '0');

    dayTens.value = dayString[0];
    dayOnes.value = dayString[1];

    hourTens.value = hourString[0];
    hourOnes.value = hourString[1];

    minuteTens.value = minuteString[0];
    minuteOnes.value = minuteString[1];

    secondTens.value = secondString[0];
    secondOnes.value = secondString[1];
  } else {
    // When the countdown is over, set everything to zero
    days.value = 0;
    hours.value = 0;
    minutes.value = 0;
    seconds.value = 0;
    dayTens.value = '0';
    dayOnes.value = '0';
    hourTens.value = '0';
    hourOnes.value = '0';
    minuteTens.value = '0';
    minuteOnes.value = '0';
    secondTens.value = '0';
    secondOnes.value = '0';
  }
}

onMounted(() => {
  // Update the countdown every second
  setInterval(updateCountdown, 1000);
});
</script>

<template>
    <div class="timer grid grid-cols-2 md:grid-cols-4 justify-center gap-4">
        <div class="flex flex-col items-center">
            <div class="col-span-2 text-center font-quicksand text-sm font-medium uppercase text-[#301e1a] mb-2">Days</div>
            <div class="flex gap-x-2">
                <div class="static overflow-clip rounded-md shadow-sm shadow-[#cecece]">
                    <div class="date-card-top"></div>
                    <hr>
                    <div class="date-card-text">{{ dayTens }}</div>
                    <div class="date-card-bottom"></div>
                </div>
                <div class="static overflow-clip rounded-md shadow-sm shadow-[#cecece]">
                    <div class="date-card-top"></div>
                    <hr>
                    <div class="date-card-text">{{ dayOnes }}</div>
                    <div class="date-card-bottom"></div>
                </div>
            </div>
        </div>

        <div class="flex flex-col items-center">
            <div class="col-span-2 text-center font-quicksand text-sm font-medium uppercase text-[#301e1a] mb-2">Hours</div>
            <div class="flex gap-x-2">
                <div class="static overflow-clip rounded-md shadow-sm shadow-[#cecece]">
                    <div class="date-card-top"></div>
                    <hr>
                    <div class="date-card-text">{{ hourTens }}</div>
                    <div class="date-card-bottom"></div>
                </div>
                <div class="static overflow-clip rounded-md shadow-sm shadow-[#cecece]">
                    <div class="date-card-top"></div>
                    <hr>
                    <div class="date-card-text">{{ hourOnes }}</div>
                    <div class="date-card-bottom"></div>
                </div>
            </div>
        </div>

        <div class="flex flex-col items-center">
            <div class="col-span-2 text-center font-quicksand text-sm font-medium uppercase text-[#301e1a] mb-2">Minutes</div>
            <div class="flex gap-x-2">
                <div class="static overflow-clip rounded-md shadow-sm shadow-[#cecece]">
                    <div class="date-card-top"></div>
                    <hr>
                    <div class="date-card-text">{{ minuteTens }}</div>
                    <div class="date-card-bottom"></div>
                </div>
                <div class="static overflow-clip rounded-md shadow-sm shadow-[#cecece]">
                    <div class="date-card-top"></div>
                    <hr>
                    <div class="date-card-text">{{ minuteOnes }}</div>
                    <div class="date-card-bottom"></div>
                </div>
            </div>
        </div>

        <div class="flex flex-col items-center">
            <div class="col-span-2 text-center font-quicksand text-sm font-medium uppercase text-[#301e1a] mb-2">Seconds</div>
            <div class="flex gap-x-2">
                <div class="static overflow-clip rounded-md shadow-sm shadow-[#cecece]">
                    <div class="date-card-top"></div>
                    <hr>
                    <div class="date-card-text">{{ secondTens }}</div>
                    <div class="date-card-bottom"></div>
                </div>
                <div class="static overflow-clip rounded-md shadow-sm shadow-[#cecece]">
                    <div class="date-card-top"></div>
                    <hr>
                    <div class="date-card-text">{{ secondOnes }}</div>
                    <div class="date-card-bottom"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.date-card-top {
    @apply w-10 h-6 2xl:w-12 2xl:h-8 bg-[#f7f7f7];
}

.date-card-bottom {
    @apply w-10 h-6 2xl:w-12 2xl:h-8 bg-[#ffffff];
}

.date-card-text {
    @apply absolute -translate-y-1/2 flex justify-center text-3xl 2xl:text-4xl translate-x-2/3 font-mono font-semibold text-[#885546];
}
</style>
