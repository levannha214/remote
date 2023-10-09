import { useEffect,useRef,useState } from 'react';

import { View, Text, StyleSheet, Image, Animated } from 'react-native';
const button_arrow = require("./image/button_arrow.png");
const button_2 = require("./image/button_2.png");
const list_button = require("./image/litst_button.png");
const button_left = require("./image/next_left.png");
const button_right = require("./image/next_right.png");
const remote = require('./image/remote.png');

const Remote = ({ check }) => {
    const [remoteNext, setRemoteNext] = useState(30);
  
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
                <View style={{ mixBlendMode: 'overlay', backgroundColor: "rgba(255,255,255,0.5)", width: 23, height: 23, borderColor: "red", borderWidth: 1, borderRadius: 50 }}>
                    <Image source={button_left} style={{ width: 20, height: 20, borderRadius: 50 }}></Image>
                </View>
                <View style={{ mixBlendMode: 'overlay', backgroundColor: "rgba(255,255,255,0.5)", width: 23, height: 23, borderColor: "red", borderWidth: 1, borderRadius: 50 }}>
                    <Image source={button_right} style={{ width: 20, height: 20, borderRadius: 50 }}></Image>
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
                with: "100%", height: 110, marginTop: 258, backgroundColor: "rgba(255,255,255,0.5)", borderColor: "red", borderWidth: 1,
            }} >
                <Image source={list_button} style={{ width: 88, height: 108 }}></Image>
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
                width: 20, height: 53, marginLeft: 62, borderRadius: 50, marginTop: 175, backgroundColor: "rgba(255,255,255,0.5)", borderColor: "red", borderWidth: 1,
            }} >
                <Image source={button_2} style={{ width: 18, height: 51, borderRadius: 53 }}></Image>
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
                width: 30, height: 20, borderRadius: 50, marginTop: 146, backgroundColor: "rgba(255,255,255,0.5)", borderColor: "red", borderWidth: 1,
            }} >
                <Image source={button_arrow} style={{ width: 27, height: 17, borderRadius: 53 }}></Image>
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
    </View > : <Animated.View style={{ marginTop:animationValue}}><View style={{width: 90, overflow: 'hidden' }}>
            {styleRemote.map((item, index) => index === check && item.b1)}
                {styleRemote.map((item, index) => index === check && item.a1)}
    </View></Animated.View>;
}
const styles = StyleSheet.create({
    container: {
        width: 90
    }
}
);

export default Remote;
