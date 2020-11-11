const env = process.env;
export const nodeEnv = env.NODE_ENV || 'development';

export default {
    port:env.Port || 8080
}