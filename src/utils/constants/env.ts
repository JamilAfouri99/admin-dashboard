
type EnvResponse = {
    baseUrl: string;
    env: string;
}
export class Env {
    static dev(): EnvResponse {
        return {
            // baseUrl: "https://newqtap602.execute-api.eu-west-1.amazonaws.com",
            baseUrl: "https://jsonplaceholder.typicode.com",
            env: 'development'
        }
    }
}