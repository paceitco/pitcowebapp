import { useState } from 'react';
import type { NavigationState } from '@react-navigation/native';

export default function useNavigationPersistence(storage: any, key: string) {
  const [initialNavigationState] = useState<NavigationState | undefined>();
  return {
    initialNavigationState,
    onNavigationStateChange: (state: NavigationState | undefined) => {
      if (state) {
        storage.setItem(key, JSON.stringify(state));
      }
    },
  };
}
