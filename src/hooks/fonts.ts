import { useFonts, Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';
import BooleanHook from './types';

const useLoadFont: BooleanHook = () => {
  const [fontLoaded] = useFonts({ Poppins_400Regular, Poppins_500Medium });
  return fontLoaded;
};

export default useLoadFont;
