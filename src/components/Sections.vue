<script setup>

</script>

<template>
    <div class="mt-8">
        <div class="container grid grid-cols-2 md:flex gap-2 md:gap-1 justify-between items-center">
            <router-link :to="{ name: 'Landing' }"          class="item max-h-36 md:max-h-96 w-38 md:w-40 relative">
                <div class="absolute font-quicksand font-semibold m-2 md:m-4 text bg-[#6f473d] text-sm md:text-xl uppercase text-white px-3 md:py-2 py-2 md:px-4 rounded-md">Invitation</div>
                <img src="../assets/images/invitation.png" alt="invitation_image"    class="w-full h-full object-cover">
            </router-link>
            <router-link :to="{ name: 'BrideAndGroom' }"    class="item max-h-36 md:max-h-96 w-38 md:w-40 relative">
                <div class="absolute font-quicksand font-semibold m-2 md:m-4 text bg-[#6f473d] text-sm md:text-xl uppercase text-white px-3 md:py-2 py-2 md:px-4 rounded-md">Bride & Groom</div>
                <img src="../assets/images/bride_groom.png" alt="invitation_image"   class="w-full h-full object-cover">
            </router-link>
            <router-link :to="{ name: 'Wedding' }"          class="item max-h-36 md:max-h-96 w-38 md:w-40 relative">
                <div class="absolute font-quicksand font-semibold m-2 md:m-4 text bg-[#6f473d] text-sm md:text-xl uppercase text-white px-3 md:py-2 py-2 md:px-4 rounded-md">Wedding</div>
                <img src="../assets/images/wedding.jpg" alt="invitation_image"       class="w-full h-full object-cover">
            </router-link>
            <router-link :to="{ name: 'Reception' }"        class="item max-h-36 md:max-h-96 w-38 md:w-40 relative">
                <div class="absolute font-quicksand font-semibold m-2 md:m-4 text bg-[#6f473d] text-sm md:text-xl uppercase text-white px-3 md:py-2 py-2 md:px-4 rounded-md">Reception</div>
                <img src="../assets/images/reception.jpg" alt="invitation_image"     class="w-full h-full object-cover">
            </router-link>
        </div>
    </div>
</template>

<style>
body {
    background-color: black;
}

.container {
    margin: 0 auto;
    border: 1px solid lighten(black, 10);

}

.item {
    flex-grow: 1;
    @apply h-80 rounded-xl overflow-hidden;

    background-color: darkred;
    position: relative;
    border: 1px solid lighten(black, 10);
    transition: all 300ms ease-in-out;
    
    &:hover {
        flex-grow: 5;
        background-color: lighten(darkred, 20);
    }
    
    &:before {
        content: attr(data-order);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
    }
    
}

.item:hover .text {
    bottom: 0px;
}

.text {
    bottom: -80px;
    transition: 0.3s;
}
</style>