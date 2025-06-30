import bP from './bP.svg';
import bN from './bN.svg';
import bB from './bB.svg';
import bR from './bR.svg';
import bQ from './bQ.svg';
import bK from './bK.svg';

import wP from './wP.svg';
import wN from './wN.svg';
import wB from './wB.svg';
import wR from './wR.svg';
import wQ from './wQ.svg';
import wK from './wK.svg';

type type = 'pawn' | 'knight' | 'bishop' | 'rook' | 'queen' | 'king'
type color = 'white' | 'black'

export function getPieceSVG(type: type, color: color) {
    switch (type) {
        case 'pawn':
            return color === 'white' ? wP : bP;
        case 'knight':
            return color === 'white' ? wN : bN;
        case 'bishop':
            return color === 'white' ? wB : bB;
        case 'rook':
            return color === 'white' ? wR : bR;
        case 'queen':
            return color === 'white' ? wQ : bQ;
        case 'king':
            return color === 'white' ? wK : bK;
    }
}