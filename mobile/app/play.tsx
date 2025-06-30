import { Chessboard } from "@/component/chessboard";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Chessboard isWhite={true}/>
    </View>
  );
}
