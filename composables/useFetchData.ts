type HttpMethod = 
    | 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE'
    | 'get' | 'head' | 'patch' | 'post' | 'put' | 'delete' | 'connect' | 'options' | 'trace';

export function useFetchData() {
    const data = reactive<{ [key: string]: any }>({});
    const loading = ref<boolean>(false);
    const error = ref<string | null>(null);

    const fetchData = async (url: string, method: HttpMethod, body?: object) => {
        loading.value = true;
        try {
            const options: RequestInit = {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                ...(body && { body: JSON.stringify(body) })
            };
            const response = await $fetch(url, options);
            Object.assign(data, response);
        } catch (err) {
            useErrorHandler(err);
        } finally {
            loading.value = false;
        }
    };

    return {
        data,
        loading,
        error,
        fetchData,
    };
}
