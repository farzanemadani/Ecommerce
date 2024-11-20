import { useToastStore } from '../stores/toastStore';

export function useErrorHandler(err: unknown) {
  const toastStore = useToastStore();
  const showToast = (message: string, type: string = 'error') => {
    toastStore.showToast(message, type);
  };

  if (err instanceof Error) {
    if ('response' in err) {
      const responseError = err as { response: Response };
      const statusCode = responseError.response.status;

      if (statusCode >= 400 && statusCode < 500) {
        // Client errors
        showToast(`Client Error: ${responseError.response?._data.message}`, 'clientError')
      } else if (statusCode >= 500 && statusCode < 600) {
        // Server errors
        showToast('Server Error: An internal server error occurred.', 'serverError');
      } else {
        showToast(`Error: ${responseError.response.statusText}`, 'error');
      }
    } else if (err.message === 'Network Error') {
      showToast('No internet connection. Please check your network connection.', 'error');
    } else {
      showToast('An unexpected error occurred.', 'error');
    }
  } else {
    showToast('An unknown error occurred.', 'error');
  }
}
