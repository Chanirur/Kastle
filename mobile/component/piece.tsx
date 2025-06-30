import { View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { getPieceSVG } from '../assets/pieces/pieces';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { useMemo } from 'react';

interface Props {
	type: 'pawn' | 'knight' | 'bishop' | 'rook' | 'queen' | 'king';
	color: 'white' | 'black';
	canMove: boolean;
	startSquare: number;
	isWhite: boolean;
	boardDimention: number;
}

export const Piece = ({ type, color, canMove, startSquare, isWhite, boardDimention }: Props) => {
	const Piece = useMemo(() => getPieceSVG(type, color), [type, color])
	const squareWidth = useMemo(() => boardDimention / 8, [boardDimention])

	const isPressed = useSharedValue(false);
	const offset = useSharedValue({ x: 0, y: 0 });

	const DnDStyles = useAnimatedStyle(() => {
		return {
			transform: [
				{ translateX: offset.value.x },
				{ translateY: offset.value.y },
				{ scale: withSpring(isPressed.value ? 1.2 : 1) },
			],
		}
	})

	const zIndexStyle = useAnimatedStyle(() => {
		return {
			zIndex: isPressed.value ? 1000 : 10,
		}
	})

	const start = useSharedValue({ x: 0, y: 0 });
	const gesture = Gesture.Pan()
		.onBegin(() => {
			isPressed.value = true;
		})
		.onUpdate((e) => {
			offset.value = {
				x: e.translationX + start.value.x,
				y: e.translationY + start.value.y,
			};
		})
		.onEnd(() => {
			const [row, col] = [1, 1];
		})
		.onFinalize(() => {
			isPressed.value = false;
		});

	return (
		<GestureDetector gesture={gesture}>
			<Animated.View style={[{ flex: 1 }, ...(canMove ? [DnDStyles, zIndexStyle] : [])]}>
				<Piece />
			</Animated.View>
		</GestureDetector>
	)
}