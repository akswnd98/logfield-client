const ENV_MODE: string = 'production';

export const PUBLIC_URL = ENV_MODE === 'production' ? '/logfield-client' : '';
export const API_SERVER_URL = ENV_MODE === 'production' ? 'https://logfd.com:8080' : 'http://localhost:8080';
