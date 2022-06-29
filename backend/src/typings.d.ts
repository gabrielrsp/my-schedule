import 'typescript'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // padrão na arquitetura
      NODE_ENV: 'development' | 'test' | 'staging' | 'production'
      PORT: string
      SECRET: string
      DB_HOST: string
      DB_NAME: string
      DB_USERNAME: string
      DB_PASSWORD: string
    }
  }
}

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}
