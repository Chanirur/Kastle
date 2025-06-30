import { Chessboard } from "@/component/chessboard";
import { Text, View } from "react-native";
import { Chess } from 'chessops/chess';
import { parseFen } from 'chessops/fen';

export default function Index() {
  const setup = parseFen('r1bqkbnr/ppp2Qpp/2np4/4p3/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 0 4').unwrap();
    const pos = Chess.fromSetup(setup).unwrap();
  
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Chessboard isWhite={false} board={ pos.board }/>
    </View>
  );
}
