<template>
  <div class="w-full lg:max-w-md">
    <Button className="block mr-auto p-1 rounded bg-gray-200"
    @click="$emit('back')"
      ><Icon icon="mdiChevronLeft"
    /></Button>
    <Form
      className="mt-6 flex flex-col items-center">
      <div
        class="mb-4 flex flex-row-reverse gap-2">
        <Input
          v-for="i in OTP_LENGTH"
          :key="`input-el-${i}`"
          ref="inputRefs"
          type="text"
          inputClass="bg-white text-sm p-2 rounded border w-[40px]"
          maxlength="1"
          dir="ltr"
          @input="
            handleInputElsInput($event, i - 1)
          " />
      </div>
      <Button
        className="bg-primary rounded text-white text-sm w-full py-3">
        ورود
      </Button>
    </Form>
  </div>
</template>
<script setup lang="ts">
const authStore = useAuthStore();
const OTP_LENGTH = 5;
const otpValue = ref(
  Array.from({ length: OTP_LENGTH }, () => ''),
);
const inputRefs = ref<
  (HTMLInputElement | null)[]
>([]);
const emit = defineEmits(['back'])

const handleInputElsInput = async (
  event: Event,
  index: number,
) => {
  try{
    const target = event.target as HTMLInputElement;
    otpValue.value[index] = target.value;
    if (target.value && index < OTP_LENGTH - 1) {
      inputRefs.value[index + 1]?.focus();
    }
    const response = await authStore.otpLogin(otpValue.value.join(''))
  }catch(err){
    console.log('err',err)
  }
};
onMounted(() => {
  if (inputRefs.value[0]) {
    inputRefs.value[0].focus();
  }
});
</script>
