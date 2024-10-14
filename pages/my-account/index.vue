<template>
  <div class="container min-h-[600px]">
    <Breadcrumbs
      :items="items" />
    <div
      class="my-16 min-h-[600px] lg:my-24 lg:flex lg:justify-center">
      <LazyOTP @back="back" v-if="showOTPInput" />
      <LazyLoginAndRegister
        v-else
        @login="login" /> 
    </div>
  </div>
</template>
<script setup lang="ts">
const items = [
  { name: 'صفحه اصلی', url: '/' },
  { name: 'حساب کاربری من', url: '/my-account' },
];
useSeoMeta({
  title: `حساب کاربری من`,
});
const showOTPInput = ref<boolean>(false);
const login = (phoneNumber: number) => {
  showOTPInput.value = !!phoneNumber;
};
const back = () =>{
  showOTPInput.value = !showOTPInput.value
}
</script>
