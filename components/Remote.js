import { useEffect,useRef } from 'react';
import { Icon } from '@rneui/themed';
import { View, Text, StyleSheet, Image, Animated } from 'react-native';
const list_button = require("./image/litst_button.png");
import Svg, { Defs, Rect ,ClipPath,Circle} from 'react-native-svg';

const remote = require('./image/remote.png');
const next = require('./image/back.png');
const back = require('./image/next.png');
const ch = require('./image/button_ch.png');

const arrow = require('./image/button_arrow.png');
const Remote = ({ check }) => {
   
  
    const styleRemote = [{
        b1: <Image source={remote} style={
            {
             width: "100%", height: 450, position: 'relative',
                objectFit: "fill"
            }
        } ></Image>,
        a1: <View style={{ width: '100%', height: "100%", position: "absolute", borderRadius: 23 }}></View>
    },
    {
        b1: <Image source={remote} style={
            {
                width: "100%", height: 450, position: 'relative',
                objectFit: "fill"
            }
        } ></Image>,
        a1: <View style={{width: '100%', height: "100%", backgroundColor: "rgba(000,000,000,0.75)", position: "absolute", borderRadius: 23 }}>
            <View style={{
               marginTop:230, with: "100%", height: 25, flexDirection: 'row',
                justifyContent: 'space-between', paddingLeft: 7, paddingRight: 7,
            }} >
              

 

                <View style={{ mixBlendMode: 'overlay', backgroundColor: "rgba(255,255,255,1)",justifyContent:'center',alignItems:"center", width: 23, height: 23, borderColor: "red", borderWidth: 1, borderRadius: 50 }}>
      <Svg height="20" width="20">
                    <Defs>
    <ClipPath id="clip">
      <Circle cx="50%" cy="50%" r="40%" />
    </ClipPath>
                    </Defs>
                        <Rect x="50" y="50" width="100%" height="100%" borderRadius="50" fill="red"/>
                        <Image source={next} style={{width:20,height:20,borderRadius:50}} />
</Svg>
                </View>
                <View style={{ backgroundColor: "rgba(255,255,255,1)",justifyContent:'center',alignItems:"center", width: 23, height: 23, borderColor: "red", borderWidth: 1, borderRadius: 50 }}>
            <Svg height="20" width="20">
                    <Defs>
    <ClipPath id="clip">
      <Circle cx="50%" cy="50%" r="40%" />
    </ClipPath>
                    </Defs>
                        <Rect x="50" y="50" width="100%" height="100%" borderRadius="50" fill="red"/>
                        <Image source={back} style={{width:20,height:20,borderRadius:50}} />
</Svg>
                </View>
            </View>
        </View>
    },
    {
        b1: <Image source={remote} style={
            {
               width: "100%", height: 450, position: 'relative',
                objectFit: "fill"
            }
        } ></Image>,
        a1: <View style={{ width: '100%', height: "100%", backgroundColor: "rgba(000,000,000,0.75)", position: "absolute", borderRadius: 23 }}>
            <View style={{
                with: "100%", height: 112, marginTop: 257, backgroundColor: "rgba(255,255,255,0.5)", borderColor: "red", borderWidth: 1,
            }} >
                <Image source={list_button} style={{ width: 88, height: 109 }}></Image>
            </View>
        </View>
    }, {
        b1: <Image source={remote} style={
            {
                width: "100%", height: 450, position: 'relative',
                objectFit: "fill"
            }
        } ></Image>,
        a1: <View style={{  width: '100%', height: "100%", backgroundColor: "rgba(000,000,000,0.75)", position: "absolute", borderRadius: 23 }}>
            <View style={{
                width: 20, height: 53, marginLeft: 62, borderRadius: 50, marginTop: 175, backgroundColor: "rgba(255,255,255,1)", 
            }} >
               <Svg height="20" width="53">
                    <Defs>
    <ClipPath id="clip">
      <Circle cx="50%" cy="50%" r="40%" />
    </ClipPath>
                    </Defs>
                    <Rect x="50" y="50" width="20" height="53" fill="red" />
                        <Image   x="5%" 
                        y="5%"
    resizeMode='cover'                    preserveAspectRatio="xMidYMid slice"
    clipPath="url(#clip)"  source={ch} style={{width:20,height:53,borderRadius:50,borderColor: "red", borderWidth: 1,}}/>
</Svg>
            </View>
        </View>
    }, {
        b1: <Image source={remote} style={
            {
                width: "100%", height: 450, position: 'relative',
                objectFit: "fill"
            }
        } ></Image>,
        a1: <View style={{ width: '100%', height: "100%", backgroundColor: "rgba(000,000,000,0.75)", position: "absolute", borderRadius: 23 }}>
            <View style={{
                width: 24, height: 16, marginTop: 150,marginLeft:8
            }} >
                      <Svg height="15" width="22">
                    <Defs>
    <ClipPath id="clip">
      <Circle cx="50%" cy="50%" r="40%" />
    </ClipPath>
                    </Defs>
                    <Rect x="50" y="50" width="20" height="53" fill="red" />
                        <Image   x="5%" 
                        y="5%"
    resizeMode='cover'                    preserveAspectRatio="xMidYMid slice"
    clipPath="url(#clip)"  source={arrow} style={{width:16,height:12,borderRadius:50,borderColor:'red',borderWidth:1}}/>
</Svg>
            </View>
        </View>
    },
    {
        b1: <Image source={remote} style={
            {
                width: "100%", height: 450, position: 'relative',
                objectFit: "fill"
            }
        } ></Image>,
        a1: <View style={{  width: '100%', height: "100%", backgroundColor: "rgba(000,000,000,0.75)", position: "absolute", borderRadius: 23 }}>
            <View style={{
                width: 30, height: 20, borderRadius: 50, marginTop: 146, backgroundColor: "rgba(255,255,255,0.5)", borderColor: "red", borderWidth: 1,
            }} >
            </View>
        </View>
    },
    ];
  
    const animationValue = useRef(new Animated.Value(20)).current;
    useEffect(() => {
        
        if ( check===0||check===3||check===4) {
            Animated.timing(animationValue, {
                toValue: 20,
                duration: 2000,
                useNativeDriver: false,
            }).start();
        }
        if (check === 1|| check===2) {
           Animated.timing(animationValue, {
                toValue: -170,
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
    </View > : <Animated.View style={{ marginTop: animationValue }}><View style={{ width: 90, overflow: 'hidden' }}>
  <View style={styles.container}>       
<Svg style={styles.overlay} height="100%" width="100%">
<Defs>
<Rect id="highlight" x="0" y="0" width="100%" height="100%" fillOpacity="0.7" fill="#000" />
</Defs>
<Rect width="100%" height="100%" fill="url(#highlight)" />
                </Svg>
                </View>
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
