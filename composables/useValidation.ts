
export function useValidation() {
  const errorMessage = ref<string>('');

  const validate = (input: string, validationFn: (value: string) => boolean, errorMsg: string) => {
    if (!input) {
      errorMessage.value = 'لطفا این قسمت را خالی نگذارید';
      return false;
    }
    const isValid = validationFn(input);
    if (!isValid) {
      errorMessage.value = errorMsg;
      return false;
    }
    errorMessage.value = '';
    return true;
  };

  return {
    errorMessage,
    validate,
  };
}
