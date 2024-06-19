<template>
    <v-container style="margin-top: 80px;">
      <v-card class="mx-auto" max-width="600">
        <v-card-title class="text-center">
          <span class="headline" style="color: #9BB1D6; font-family: 'Mochiy Pop One', sans-serif;">Formulir Pemesanan Layanan Petshop</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" style="margin-top: 20px;">
            <v-text-field v-model="name" label="Nama Lengkap" required dense outlined :style="{ 'font-family': 'Mochiy Pop One, sans-serif', color: '#9BB1D6' }"></v-text-field>
            <v-text-field v-model="email" label="Alamat Email" required type="email" dense outlined :style="{ 'font-family': 'Mochiy Pop One, sans-serif', color: '#9BB1D6' }"></v-text-field>
            <v-text-field v-model="address" label="Alamat Rumah" required dense outlined :style="{ 'font-family': 'Mochiy Pop One, sans-serif', color: '#9BB1D6' }"></v-text-field>
            <v-select v-model="service" :items="services" label="Jenis Layanan" required dense outlined :style="{ 'font-family': 'Mochiy Pop One, sans-serif', color: '#9BB1D6' }"></v-select>
            <v-textarea v-model="description" label="Deskripsi" required dense outlined :style="{ 'font-family': 'Mochiy Pop One, sans-serif', color: '#9BB1D6' }"></v-textarea>
          </v-form>
        </v-card-text>
        <v-card-actions class="text-center" style="margin-bottom: 20px;">
          <v-btn color="primary" @click="submitForm" :style="{ 'font-family': 'Mochiy Pop One, sans-serif', color: '#9BB1D6', 'margin': 'auto' }">Hubungi Kami</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const name = ref('');
  const email = ref('');
  const address = ref('');
  const service = ref('');
  const description = ref('');
  const services = ['Grooming','PetShop', 'Penitipan', 'Dokter'];
  const whatsappNumber = '6285603535805'; // Gantilah dengan nomor WhatsApp Anda dalam format internasional tanpa tanda tambah (+)
  
  const submitForm = () => {
    const message = `Halo, saya ingin memesan layanan berikut:
      Nama Lengkap: ${name.value}
      Alamat Email: ${email.value}
      Alamat Rumah: ${address.value}
      Jenis Layanan: ${service.value}
      Deskripsi: ${description.value}`;
  
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  </script>
  
  <style scoped>
  .headline {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
  }
  
  .text-center {
    text-align: center;
  }
  </style>
  