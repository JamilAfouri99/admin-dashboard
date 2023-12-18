import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';

export class HttpService {
    private axiosInstance: AxiosInstance;

    constructor(baseURL: string) {
        this.axiosInstance = axios.create({
            baseURL,
            timeout: 5000,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        this.axiosInstance.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => this.requestInterceptor(config),
            (error) => Promise.reject(error)
        );
        this.axiosInstance.interceptors.response.use(this.responseSuccessInterceptor, this.responseErrorInterceptor);
    }

    private requestInterceptor(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig> {
        // Modify the request config here, e.g., add authentication headers
        const realToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkIjoiZTQ3NTJlODYtZDkxZC00NDllLTgyOTgtMTQyNDI1ZmEyZTRhIiwidXNlcklkIjoiOWRjODI2MjEtNWU0OS00YTUwLTlmMjAtOWZmOWIyNjY1NGMzIiwiaWF0IjoxNzAwNTU2OTU4LCJleHAiOjE3MDgzMzI5NTh9.F0Nj1Kj-FdGOKFrkqpuXJSs6AYL5kucT8r_dA89prWUlk0wT_g42IJ1iDhQqzAG4Zu_F0jKG8RE3LWZrr0z-Uei7Of0r-dKzZ_Ct7DaneeWzr2WTefdw1ZSlmB10drhldnDOE3ZPW4g_i7Gg8WK2NWj9qyGnVhwxMpV-SnedpuQfUrt6y7yPVJnkWgTZnqddY-_qHaJmky2PhJ4nv1x00ypgeVoJn09aq_4b5DqdIC1Sxty3Dp_8YoHhvuhadOTjs1m9lLbalA-6_R1-hVJ3-vIBPSyFC1jmRgLS02mYDtppcWhFluXUncTIGMg3wkVuJSj9nc11Z6gJfFhCY2eT_A";

        const token = realToken;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    }
    private responseSuccessInterceptor(response: AxiosResponse): AxiosResponse {
        // You can modify the response here before returning it
        return response;
    }

    private responseErrorInterceptor(error: any): Promise<any> {
        // You can handle errors here and decide whether to propagate or reject them
        return Promise.reject(error);
    }

    // CRUD operations

    async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.axiosInstance.get<T>(url, config);
        console.log(response)
        return response.data;
    }

    async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.axiosInstance.post<T>(url, data, config);
        return response.data;
    }

    async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.axiosInstance.put<T>(url, data, config);
        return response.data;
    }

    async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.axiosInstance.delete<T>(url, config);
        return response.data;
    }
}
