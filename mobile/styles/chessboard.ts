import { StyleSheet } from "react-native";

const chessboardStyles = StyleSheet.create({
  lightSquare: {
    width: `${1/8*100}%`,
    height: '100%',
    backgroundColor: "#f0d9b5",
  },
  darkSquare: {
    width: `${1/8*100}%`,
    height: '100%',
    backgroundColor: "#b58863",
  },
  lightSquareLetters: {
    color: "#b58863",
  },
  darkSquareLetters: {
    color: "#f0d9b5",
  },
  rankLetters: {
    position: 'absolute',
    top: '10%',
    left: '10%'
  },
  fileLetters: {
    position: 'absolute',
    bottom: '10%',
    right: '10%'
  }
});

export default chessboardStyles;