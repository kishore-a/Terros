import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import {Link, useRouter } from 'expo-router';

const HomePage = () => {
  const bg = require('../assets/background.jpg');
const router =useRouter();
  return (
    <View className="w-full h-full">
      <ImageBackground source={bg} className="h-full w-full flex-1">
        <View className="flex-1 justify-center items-center">
          <TouchableOpacity className='bg-gray-700 p-10 rounded-full' onPress={()=>router.push('')}>
          <Link className="text-lg font-bold text-white" href={'/game'}>Start Game</Link>

          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomePage;