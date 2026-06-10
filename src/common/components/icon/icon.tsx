import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import React from 'react';
import { styles } from './styles';

type IconLibrary =
  | 'Ionicons'
  | 'MaterialIcons'
  | 'MaterialCommunityIcons'
  | 'Feather'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'AntDesign'
  | 'Entypo';

interface IconSymbolProps {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  color?: string;
  library?: IconLibrary;
  style?: any;
}

export const IconSymbol: React.FC<IconSymbolProps> = ({
  name,
  size = 'md',
  color = '#000000',
  library = 'Ionicons',
  style,
  ...props
}) => {
  const getSizeStyle = () => {
    switch (size) {
      case 'xs':
        return styles.xs;
      case 'sm':
        return styles.sm;
      case 'md':
        return styles.md;
      case 'lg':
        return styles.lg;
      case 'xl':
        return styles.xl;
      case '2xl':
        return styles['2xl'];
      default:
        return styles.md;
    }
  };

  const sizeValue = getSizeStyle().fontSize;

  const renderIcon = () => {
    const iconProps = {
      name: name as any,
      size: sizeValue,
      color,
      style: [styles.icon, style],
      ...props,
    };

    switch (library) {
      case 'MaterialIcons':
        return <MaterialIcons {...iconProps} />;
      case 'MaterialCommunityIcons':
        return <MaterialCommunityIcons {...iconProps} />;
      case 'Feather':
        return <Feather {...iconProps} />;
      case 'FontAwesome':
        return <FontAwesome {...iconProps} />;
      case 'FontAwesome5':
        return <FontAwesome5 {...iconProps} />;
      case 'AntDesign':
        return <AntDesign {...iconProps} />;
      case 'Entypo':
        return <Entypo {...iconProps} />;
      case 'Ionicons':
      default:
        return <Ionicons {...iconProps} />;
    }
  };

  return renderIcon();
};
