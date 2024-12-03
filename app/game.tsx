import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

const ChessBoard = () => {
  type SelectedPiece = { row: number; col: number } | null;
//This is where the respective pieces are imported from the image to be used in the board and was got from this link ==> https://github.com/wcandillon/can-it-be-done-in-react-native/tree/master/season4/src/Chess/assets
  const pieceImages: { [key: string]: any } = {
    RB: require('../assets/br.png'),
    NB: require('../assets/bn.png'),
    BB: require('../assets/bb.png'),
    QB: require('../assets/bq.png'),
    KB: require('../assets/bk.png'),
    PB: require('../assets/bp.png'),
    RW: require('../assets/wr.png'),
    NW: require('../assets/wn.png'),
    BW: require('../assets/wb.png'),
    QW: require('../assets/wq.png'),
    KW: require('../assets/wk.png'),
    PW: require('../assets/wp.png'),
  };
// This is represents the chess board and the initial placement of the pieces
  const initialBoard: (string | null)[][] = [
    ['RB', 'NB', 'BB', 'QB', 'KB', 'BB', 'NB', 'RB'],
    ['PB', 'PB', 'PB', 'PB', 'PB', 'PB', 'PB', 'PB'],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ['PW', 'PW', 'PW', 'PW', 'PW', 'PW', 'PW', 'PW'],
    ['RW', 'NW', 'BW', 'QW', 'KW', 'BW', 'NW', 'RW'],
  ];

  const [board, setBoard] = useState<(string | null)[][]>(initialBoard);
  const [selected, setSelected] = useState<SelectedPiece>(null); 

  const getSquareColor = (row: number, col: number) =>
    selected?.row === row && selected?.col === col ? 'bg-yellow-400' : (row + col) % 2 === 0 ? 'bg-white' : 'bg-gray-700';

  const handlePress = (row: number, col: number) => {
    //This sees if the selected piece and the selected place are at the same place
    if (selected) {
      if (selected.row === row && selected.col === col) {
        setSelected(null);
        return;
      }
      //If not it moves the pieces to the new place and updates the board in new board
      const newBoard = board.map((r) => [...r]); 
      newBoard[row][col] = board[selected.row][selected.col]; 
      newBoard[selected.row][selected.col] = null; 
      setBoard(newBoard);
      setSelected(null); 
    } else if (board[row][col]) {
      setSelected({ row, col });
    }
  };
// Added Chess board with the pieces that can move randomnly and track the grid places
  return (
    <View className="flex-1 bg-gray-100 flex justify-center items-center">
      <View className="flex flex-col">
        {board.map((row, rowIndex) => (
          <View key={rowIndex} className="flex flex-row">
            {row.map((piece, colIndex) => (
              <TouchableOpacity
                key={colIndex}
                className={`w-14 h-14 ${getSquareColor(rowIndex, colIndex)} flex items-center justify-center`}
                onPress={() => handlePress(rowIndex, colIndex)}
              >
                {piece && <Image source={pieceImages[piece]} style={{ width: 32, height: 32 }} />}
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};
         //I have added a HomeScreen But was not able to route it because of some isready undefined    
export default ChessBoard;