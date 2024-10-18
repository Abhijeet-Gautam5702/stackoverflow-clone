export type EnvType = {
  appwrite: {
    endpoint: string;
    projectId: string;
    apiKey: string;
  };
};

const env: EnvType = {
  appwrite: {
    endpoint: String(process.env.NEXT_PUBLIC_APPWRITE_HOST_URL),
    projectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
    apiKey: String(process.env.APPWRITE_API_KEY),
  },
};

export default env;
