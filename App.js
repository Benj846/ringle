import { SafeAreaProvider } from "react-native-safe-area-context";
import { RecoilRoot } from "recoil";

import Navigator from "./screens/Navigator";
export default function App() {
  return (
    <RecoilRoot>
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
    </RecoilRoot>
  );
}
