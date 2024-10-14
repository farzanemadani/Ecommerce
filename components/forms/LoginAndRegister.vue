<template>
  <div
    class="flex flex-col items-center lg:max-w-md">
    <Logo />
    <h1 class="text-xl font-semibold lg:text-3xl">
      وارد حساب کاربری خود شوید
    </h1>
    <Form
      @submit="submit"
      className="mt-6 w-full">
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
        className="bg-primary rounded text-white text-sm w-full py-3">
        ثبت نام
      </Button>
    </Form>
  </div>
</template>
<script setup lang="ts">
import { isPhoneNumber } from '~/utils/validation';
const phoneNumber = ref<string | number>('');
const { errorMessage, validate } =
  useValidation();
const emit = defineEmits(['login']);
const inputRef = ref<HTMLInputElement | null>(
  null,
);

const submit = () => {
  const phone = phoneNumber.value.toString();
  const errorMessage = 'شماره موبایل معتبر نیست';

  if (
    validate(phone, isPhoneNumber, errorMessage)
  ) {
    emit('login', phoneNumber.value);
  } else {
    return;
  }
};

onMounted(() => {
  if (inputRef.value) {
    inputRef.value?.focus();
  }
});
</script>
