import { useEffect,useRef } from 'react';
import { View, Text, StyleSheet, Image, Animated } from 'react-native';


import Bg01 from './image/bg2-2.svg';

import Bg02 from './image/bg2-3.svg';
import Bg03 from './image/bg2-4.svg';
import Bg04 from './image/bg2-5.svg';
const remote = require('./image/remote.png');

const Remote = ({ check }) => {
   
  
    const styleRemote = [{
        b1: <Image source={remote}  resizeMode="cover" style={
            {
             width: 92.6, height: 400, position: 'relative',
                objectFit: "fill"
            }
        } ></Image>,
        a1: <View style={{ width: 92.6, height: 400, position: "absolute", borderRadius: 23 }}></View>
    },
    {
        b1: <Image source={remote}  style={
            {
                width: 92.6, height: 400, position: 'relative',
                objectFit: "fill"
            }
        } ></Image>,
        a1: <View style={{ height:"100%", width: "100%", position: "absolute" }} >
           
            <Bg01 /> 
           
        </View>
    },
    {
        b1: <Image source={remote} resizeMode="cover" style={
            {
               width: 92.6, height: 400, position: 'relative',
                objectFit: "fill"
            }
        } ></Image>,
        a1: <View style={{ width: 92.6, height: 400, position: "absolute" }}>
         <Bg02/>
        </View>
    }, {
        b1: <Image source={remote} resizeMode="cover" style={
            {
                width: 92.6, height: 400, position: 'relative',
                objectFit: "fill"
            }
        } ></Image>,
        a1: <View style={{ width: 92.6, height: 400, position: "absolute" }}>
            <Bg03 /> 
        </View>
    }, {
        b1: <Image source={remote} resizeMode="cover" style={
            {
                width: 92.6, height: 400, position: 'relative',
                objectFit: "fill"
            }
        } ></Image>,
        a1: <View style={{ width: 92.6, height: 400, position: "absolute" }}>
        
            <Bg04 /> 
      
        </View>
    },
    {
        b1: <Image source={remote} resizeMode="cover" style={
            {
                width: 92.6, height: 400, position: 'relative',
                objectFit: "fill"
            }
        } ></Image>,
        a1: <View style={{  width: 92.6, height: 400, backgroundColor: "rgba(000,000,000,0.75)", position: "absolute", borderRadius: 23 }}>
           
        </View>
    },
    ];
  
    const animationValue = useRef(new Animated.Value(50)).current;
    useEffect(() => {
        
        if ( check===0||check===3||check===4) {
            Animated.timing(animationValue, {
                toValue: 50,
                duration: 2000,
                useNativeDriver: false,
            }).start();
        }
        if (check === 1|| check===2) {
           Animated.timing(animationValue, {
                toValue: -150,
                duration: 2000,
                useNativeDriver: false,
            }).start();
        }
     }, [check]);
    return check===5? <View style={styles.container}>
        <View style={{width:70,height:70,borderColor:"#ffffff",borderWidth:5,backgroundColor:"rgba(255,255,255,0)",borderRadius:50,marginTop:100,alignItems:'center',justifyContent:'center'}}>
            <Text style={{
                color: "#ffffff",fontSize:40}}>?</Text>
     </View>
    </View > : <Animated.View style={{ marginTop: animationValue }}><View style={{ width: 92.6, overflow: 'hidden' }}>
 
            {styleRemote.map((item, index) => index === check && item.b1)}
                {styleRemote.map((item, index) => index === check && item.a1)}
    </View></Animated.View>;
}
const styles = StyleSheet.create({
    container: {
        width: 90
    },
    container2: {
flex: 1,
position: 'relative',
},
image: {
flex: 1,
width: '100%',
height: '100%',
},
overlay: {
position: 'absolute',
top: 0,
    left: 0,
    zIndex: 999,

},
}
);

export default Remote;
