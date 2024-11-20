import { useToastStore } from './toastStore';
import { useRuntimeConfig } from '#imports';
const { data,loading,fetchData } = useFetchData();
const toastStore = useToastStore();
export const useAuthStore = defineStore('authStore',{
    state:()=>({
        phoneNumber:'',
        otpCode:'',
        otpToken:'',
        loading:false,
    }),
    actions:{
        async sendOtp(phoneNumber: string) {
            const config = useRuntimeConfig();
            this.loading = true;
            try {
              const response = await fetchData(`${config.public.apiBase}/auth/Send_Otp`, 'POST', { phone: phoneNumber });
              this.loading = false;
              this.phoneNumber = phoneNumber;
              this.otpToken = data.items.otpHash; 
              return response;
            } catch (error) {
              this.loading = false;
              throw error;
            }
          },
        async otpLogin(otpCode:string){
            const config = useRuntimeConfig();
            this.loading = true;
            try {
                const response = await fetchData(`${config.public.apiBase}/auth/otp-login`, 
                'POST', 
                { phone: this.phoneNumber ,
                    otpCode: otpCode,
                    otpToken:this.otpToken
                });
                this.loading = false;
                return response;
              } catch (error) {
                this.loading = false;
                throw error;
              }
        }
    }
})
