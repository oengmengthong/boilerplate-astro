import { map } from 'nanostores';
import type { User } from '../lib/api';

type AuthStore = {
  user: User | null;
  isAuthenticated: boolean;
};

export const authStore = map<AuthStore>({
  user: null,
  isAuthenticated: false,
});

export function setUser(user: User) {
  authStore.set({
    user,
    isAuthenticated: true,
  });
}

export function logout() {
  authStore.set({
    user: null,
    isAuthenticated: false,
  });
}