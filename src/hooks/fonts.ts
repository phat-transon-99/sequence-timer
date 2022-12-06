import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import BooleanHook from './types';

const useLoadFont: BooleanHook = () => {
  const [fontLoaded] = useFonts({ Poppins_400Regular });
  return fontLoaded;
};

export default useLoadFont;
