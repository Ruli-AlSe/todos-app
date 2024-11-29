import { DefaultSession, DefaultUser } from 'next-auth';

interface IUser extends DefaultUser {
  /**
   * Adding extrafields to the user interface
   */
  roles?: string[];
  isActive?: boolean;
}

declare module 'next-auth' {
  interface User extends IUser {}

  interface Session {
    user?: User;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends IUser {}
}
