interface Toast {
  id: number;
  message: string;
  type: string;
  duration: number;
}

export const useToastStore = defineStore('toastStore', {
  state: () => ({
    toasts: [] as Toast[],
  }),
  actions: {
    showToast(message: string, type: string = 'info', duration: number = 3000) {
      const id = Date.now();
      this.toasts.push({ id, message, type, duration });

      setTimeout(() => {
        this.toasts = this.toasts.filter(toast => toast.id !== id);
      }, duration);
    },
  },
});
