import { View } from 'react-native';

import { styles } from './styles';

export interface SpacerProps {
  width?: number;
  height?: number;
  expand?: boolean;
}

export const Spacer = ({ width, height, expand }: SpacerProps) => {
  return <View style={[{ width, height }, expand && styles.expand]} />;
};
