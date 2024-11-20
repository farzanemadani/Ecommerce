<template>
  <div class="flex flex-col items-center lg:max-w-md">
    <Logo />
    <h1 class="text-xl font-semibold lg:text-3xl">
      وارد حساب کاربری خود شوید
    </h1>
    <Form @submit="submit" className="mt-6 w-full">
      <Input
        v-model="phoneNumber"
        fontSize="text-sm"
        labelClass="flex mb-2"
        inputClass="bg-white text-sm p-2 rounded border w-full"
        name="phoneNumber"
        type="text"
        placeholder="091000000"
        :autocomplete="false"
        :required="true"
        :errorMessage="errorMessage"
        height="h-[100px]"
        maxlength="11"
        dir="rtl"
        ref="inputRef"
        @validate="submit">
        <template #label> شماره موبایل </template>
      </Input>
      <Button
        @click="submit"
        :loading="authStore.loading"
        className="bg-primary rounded text-white text-sm w-full py-3">
        ثبت نام
      </Button>
    </Form>
    <div v-for="toast in toastStore.toasts" :key="toast.id">
      <Toast
        :type="toast.type"
        :message="toast.message"
        :duration="toast.duration" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { isPhoneNumber } from '~/utils/validation';
const phoneNumber = ref<string | number>('');
const inputRef = ref<HTMLInputElement | null>(null);
const { errorMessage, validate } = useValidation();
const toastStore = useToastStore();
const authStore = useAuthStore();
const emit = defineEmits(['login']);

onMounted(() => {
  if (inputRef.value) {
    inputRef.value?.focus();
  }
});

const submit = async () => {
  try {
    const phone = phoneNumber.value.toString();
    const errorMessage = 'شماره موبایل معتبر نیست';
    if (validate(phone, isPhoneNumber, errorMessage)) {
      const response = await authStore.sendOtp(phone.substring(1));
      if (!toastStore.toasts.length) {
        emit('login', phoneNumber.value);
      }
    }
  } catch (error) {
    console.error('Error during submit:', error);
  }
};
</script>
