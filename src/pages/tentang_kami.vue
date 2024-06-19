<template>
    <div class="custom-background">
        <v-main class="top-padding">
            <div style="padding: 80px 0;">
                <v-container class="fill-height d-flex align-center justify-center">
                    <v-row>
                        <v-col cols="12" md="6">
                            <div class="text-center">
                                <div style="margin: auto; max-width: 80%;">
                                    <h2 class="mb-5"
                                        style="color: #9BB1D6; font-family: 'Mochiy Pop One', sans-serif; font-size: 31px; text-align: left;">
                                        Siapa Kami
                                    </h2>
                                    <p class="mb-8"
                                        style="font-family: 'Poppins', sans-serif; font-size: 18px; font-weight: 500; text-align: left;">
                                        Kami adalah sebuah komunitas pecinta hewan yang berkomitmen untuk menyediakan 
                                        fasilitas kesehatan serta layanan untuk hewan peliharaan Anda.
                                    </p>
                                    <h2 class="mb-5"
                                        style="color: #9BB1D6; font-family: 'Mochiy Pop One', sans-serif; font-size: 31px; text-align: left;">
                                        Visi Kami
                                    </h2>
                                    <p class="mb-8"
                                        style="font-family: 'Poppins', sans-serif; font-size: 18px; font-weight: 500; text-align: left;">
                                        Menjadi penyedia layanan petcare terdepan yang memberikan perawatan holistik, 
                                        inovatif, dan penuh kasih sayang kepada hewan peliharaan, serta meningkatkan 
                                        kualitas hidup hewan peliharaan dan kepuasan pemiliknya.

                                    </p>
                                    <h2 class="mb-5"
                                        style="color: #9BB1D6; font-family: 'Mochiy Pop One', sans-serif; font-size: 31px; text-align: left;">
                                        Misi Kami
                                    </h2>
                                    <p class="mb-8"
                                        style="font-family: 'Poppins', sans-serif; font-size: 18px; font-weight: 500; text-align: left;">
                                        1. Memberikan Perawatan Terbaik<br>
                                        2. Meningkatkan Kesehatan Hewan<br>
                                        3. Lingkungan yang Aman dan Nyaman<br>
                                        4. Layanan Inovatif<br>
                                        5. Pelayanan Pelanggan yang Unggul
                                    </p>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" md="6" class="align-self-center">
                            <div class="d-flex justify-center">
                                <v-img src="@/assets/collapse.png" width="462" height="457"></v-img>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </div>

        </v-main>
    </div>
</template>

<script setup></script>

<style scoped>
    .custom-background {
        background-color: rgba(155, 177, 214, 0.13);
        /* This makes sure the background color covers the full height of the viewport */
    }

    .hero-image {
        width: 100%;
        /* Adjust as needed */
    }

    .top-padding {
        padding-top: 0px;
        /* Adjust this value to increase or decrease the top padding */
    }

    .fixed-size {
        width: 400px;
        /* Adjust as needed */
        height: 246px;
        /* Adjust as needed */
    }

    .fixed-width {
        flex: 0 0 auto !important;
        max-width: 400px !important;
        /* Adjust as needed */
    }

    .card-wrapper {
        width: 100%;
        max-width: 400px;
        height: 246px;
    }

    @media (min-width: 800px) {
        .card-wrapper {
            width: 400px;
        }
    }

    .center-cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>
