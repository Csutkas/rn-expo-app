import { vs } from '@/common/utils/scaling';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  icon: {
    // Base icon styles
  },
  // Size variants
  xs: {
    fontSize: vs(12),
  },
  sm: {
    fontSize: vs(16),
  },
  md: {
    fontSize: vs(20),
  },
  lg: {
    fontSize: vs(24),
  },
  xl: {
    fontSize: vs(32),
  },
  '2xl': {
    fontSize: vs(40),
  },
});
