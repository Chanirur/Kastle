import chessboardStyles from "@/styles/chessboard"
import { Board } from "chessops/board";
import { Dimensions, View, Text } from "react-native"
import { Piece } from "./piece";
import { useState } from "react";

interface Props {
	isWhite: boolean;
	board: Board;
}

export const Chessboard = ({ isWhite, board }: Props) => {

	const fileLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
	const [boardDimensions, setBoardDimensions] = useState(0)

	return (
		<View
			style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').width }}
			onLayout={(event) => {
				setBoardDimensions(event.nativeEvent.layout.width);
			}}
		>
			{Array.from({ length: 8 }, (_, i) => i).map((rowIdx) => {
				const row = isWhite ? rowIdx : 7 - rowIdx
				return (<View key={row} style={{ height: `${1 / 8 * 100}%`, width: '100%', flexDirection: 'row' }}>
					{Array.from({ length: 8 }, (_, i) => i).map((squareIdx) => {
						const square = isWhite ? squareIdx : 7 - squareIdx;
						const piece = board.get((7 - row) * 8 + square);
						return (
							<View key={square} style={(row + square) % 2 === 0 ? (chessboardStyles.lightSquare) : (chessboardStyles.darkSquare)}>
								<Text style={[chessboardStyles.rankLetters, (row + square) % 2 === 0 ? (chessboardStyles.lightSquareLetters) : (chessboardStyles.darkSquareLetters)]} >{squareIdx === 0 ? 7 - row + 1 : null}</Text>
								<Text style={[chessboardStyles.fileLetters, (row + square) % 2 === 0 ? (chessboardStyles.lightSquareLetters) : (chessboardStyles.darkSquareLetters)]}>{rowIdx === 7 ? fileLetters[square] : null}</Text>
								{piece && <Piece type={piece.role} color={piece.color} canMove={piece.color === 'black' ? false : true} startSquare={(7 - row) * 8 + square} isWhite={isWhite} boardDimention={1} />}
							</View>
						)
					})}
				</View>)
			})}
		</View>
	)
}