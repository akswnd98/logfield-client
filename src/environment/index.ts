const ENV_MODE: string = 'development';

export const PUBLIC_URL = ENV_MODE === 'production' ? '/logfield-client' : '';
export const API_SERVER_URL = ENV_MODE === 'production' ? '' : 'http://localhost:8080'
