<template>
  <div
    class="my-16 min-h-[600px] lg:my-24 lg:flex lg:justify-center">
    <div
      class="flex flex-col items-center lg:max-w-md">
      <Logo />
      <h1
        class="text-xl font-semibold lg:text-3xl">
        وارد حساب کاربری خود شوید
      </h1>
      <div class="my-2 text-center text-sm">
        حساب کاربری ندارید؟<a
          class="cursor-pointer font-semibold text-primary">
          ثبت نام کنید </a
        >.
      </div>
      <Form
        @submit="submit"
        className="mt-6 w-full">
        <Input
          v-model="phoneNumber"
          @input="handleInput"
          fontSize="text-sm"
          labelClass="flex mb-2"
          inputClass="bg-white text-sm rounded border p-3 w-full"
          name="phoneNumber"
          type="text"
          placeholder="091000000"
          :autocomplete="false"
          :required="true"
          :errorMessage="errorMessage"
          height="h-[100px]"
          maxlength="11"
          dir="rtl">
          <template #label>
            شماره موبایل
          </template>
        </Input>
        <Button
          className="bg-primary rounded text-white text-sm w-full py-3">
          ثبت نام
        </Button>
      </Form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { isPhoneNumber } from '~/utils/validation';
const phoneNumber = ref<string | number>('');
const { errorMessage, validate } =
  useValidation();
const submit = () => {
  if (
    validate(
      phoneNumber.value.toString(),
      isPhoneNumber,
      'شماره موبایل معتبر نیست',
    )
  )
    return;
  console.log('jjj');
};
const handleInput = (event: InputEvent) => {
  const input = (event.target as HTMLInputElement)
    .value;
  validate(
    input,
    isPhoneNumber,
    'شماره موبایل معتبر نیست',
  );
};
</script>
