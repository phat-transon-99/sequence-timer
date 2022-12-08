import {
  useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import BooleanHook from './types';

const useLoadFont: BooleanHook = () => {
  const [fontLoaded] = useFonts({ Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold });
  return fontLoaded;
};

export default useLoadFont;
