export interface User {
  id: string;
  email: string;
  createdAt: string;
}

export interface UserStore {
  user: User | null;
  isAuthorized: boolean;
  setUser: (user: User) => void;
  logout: () => void;
}
