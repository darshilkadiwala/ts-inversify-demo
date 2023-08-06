export declare global {
  namespace Express {
    export interface Request {
      body: {
        username?: string;
      };
    }
  }
}
