<script setup>
</script>

<template>
    <div class="mx-auto gap-x-6 w-2/3 2xl:w-1/2 mt-8 text-center font-austein text-4xl text-[#301e1a]">
        The Reception Ceremony
    </div>

    <div class="mx-auto flex flex-col md:flex-row gap-x-6 w-2/3 2xl:w-1/2 mt-8 items-center">
        <div class="md:w-1/2 flex flex-col text-center md:text-end">
            <div class="font-cinzel text-2xl">25 January, 2025</div>
            <div class="font-cinzel text-lg">Saturday</div>
        </div>
        <div>&#9672;</div>
        <div class="md:w-1/2 flex md:flex-col text-center md:text-start">
            <div class="text-2xl font-cinzel text-[#301e1a]">7:00<span class="md:hidden"> PM</span></div>
            <div class="font-cinzel text-lg hidden md:block">PM</div>
        </div>
    </div>

    <div class="mx-auto md:w-2/3 2xl:w-1/2 flex mt-8 flex-col items-center">
        <img src="../assets/images/top_border.png" alt="top_border" class="w-72 mb-4">
        <div class="font-quicksand font-medium">The Venue</div>
        <div class="text-2xl 2xl:text-3xl font-montserrat font-semibold text-[#301e1a]">Polwel Convention Center</div>
        <div class="font-quicksand font-medium text-sm">Blue Moon Hall</div>
        <img src="../assets/images/bottom_border.png" alt="top_border" class="w-72 mt-4">
    </div>

    <div class="flex flex-col md:flex-row items-center md:items-start mx-auto w-3/4 2xl:w-1/2 mt-8 gap-6 mb-8">
        <div class="md:w-1/2 flex flex-col items-center md:items-start">
            <div class="flex items-center font-quicksand font-semibold"><span class="material-symbols-outlined me-2">location_on</span>Address</div>
            <div class="font-quicksand text-lg mt-2 text-center md:text-start">Polwel Carnation, Dhaka - Mymensingh Hwy, Dhaka 1230</div>
            
            <div class="flex items-center font-quicksand font-semibold mt-8"><span class="material-symbols-outlined me-2">directions_car</span>How to reach</div>
            <div>
                <div class="font-quicksand font-bold mt-2"># Metrorail - Rickshaw</div>
                <div class="font-quicksand py-2 flex flex-col gap-y-2 text-xs md:text-sm">
                    <div class="flex items-center">
                        <span class="material-symbols-outlined mx-2">counter_1</span>
                        <span>Reach <b>Uttara North Metro Station</b> by MRT-1</span>
                    </div>
                    <div class="flex items-center">
                        <span class="material-symbols-outlined mx-2">counter_2</span>
                        <span>Take Rickshaw to <b>Abdullahpur (BDT 70)</b></span>
                    </div>
                </div>

                <div class="font-quicksand font-bold mt-2"># Metrorail - Leguna/Bus - Rickshaw</div>
                <div class="font-quicksand py-2 flex flex-col gap-y-2 text-xs md:text-sm">
                    <div class="flex items-center">
                        <span class="material-symbols-outlined mx-2">counter_1</span>
                        <span>Reach <b>Uttara North Metro Station</b> by MRT-1</span>
                    </div>
                    <div class="flex items-center">
                        <span class="material-symbols-outlined mx-2">counter_2</span>
                        <div>Take <b>Leguna (BDT 15)</b> to <b>Housebuilding</b></div>
                    </div>
                    <div class="flex items-center">
                        <span class="material-symbols-outlined mx-2">counter_3</span>
                        <span>Take Rickshaw to <b>Abdullahpur (BDT 20)</b></span>
                    </div>
                </div>

                <div class="font-quicksand font-bold mt-2"># Local Bus</div>
                <div class="font-quicksand py-2 flex flex-col gap-y-2 text-xs md:text-sm">
                    <div>
                        These following buses come to Abdullahpur. Note that some of
                        the buses may use the BRT flyover, in that case, you need to get off at <b>Azampur</b> and take a bus to <b>Abdullahpur</b>
                    </div>
                    <div class="font-bold">
                        Ajmeri Glory, Airport Avenue, Akash Paribahan, Anabil Super, Balaka, Basumati, Bikash, Gazipur Paribahan, Green Dhaka, Paristhan, Prajapati, Provati Banasree, Turag, Victor Classic, VIP
                    </div>
                </div>

                <div class="font-quicksand font-bold mt-2"># Elevated Expressway</div>
                <div class="font-quicksand py-2 flex flex-col gap-y-2 text-xs md:text-sm">
                    <div>
                        The <b>Dhaka Elevated Expressway</b> has the following entry ramps, that ends at Kawla, HSIA.
                    </div>
                    <div class="font-bold">
                        Bijoy Sharani Flyover, Banani Kakoli, Kuril Bishwaroad
                    </div>
                </div>
            </div>
            
        </div>
        <div class="rounded-2xl border overflow-hidden w-80 md:w-auto">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.3056838936113!2d90.39903687609534!3d23.878776783834244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4384c912823%3A0x3f36c8be0805c68!2sPolwel%20Convention%20Center!5e0!3m2!1sen!2sbd!4v1731953023296!5m2!1sen!2sbd"
            width="450" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </div>
</template>

<style>

</style>