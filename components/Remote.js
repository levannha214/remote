import { useEffect,useRef } from 'react';
import { Icon } from '@rneui/themed';
import { View, Text, StyleSheet, Image, Animated } from 'react-native';
const list_button = require("./image/litst_button.png");
const remote = require('./image/remote.png');
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
      <Icon
        size={10}
        name='backward'
        type='font-awesome'
        color='#000'
        />
                </View>
                <View style={{ mixBlendMode: 'overlay', backgroundColor: "rgba(255,255,255,1)",justifyContent:'center',alignItems:"center", width: 23, height: 23, borderColor: "red", borderWidth: 1, borderRadius: 50 }}>
                   <Icon
        size={10}
        name='forward'
        type='font-awesome'
        color='#000'
        />
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
                width: 20, height: 53, marginLeft: 62, borderRadius: 50, marginTop: 175, backgroundColor: "rgba(255,255,255,1)", borderColor: "red", borderWidth: 1,
            }} >
                <View style={{ flexDirection: 'column' }}>
                    <View style={{width:16,height:16,borderRadius:50,backgroundColor:'rgba(000,000,000,0.1)',justifyContent:"center",alignItems:'center',marginTop:1,marginLeft:1}}><Icon
                        
                    size={10}
        name='chevron-up'
        type='font-awesome'
        color='#000'
                    /></View>
                    <View style={{justifyContent:'center',alignItems:"center",height:15}}><Text style={{fontSize:7,fontWeight:900}}>CH</Text></View>
                </View>
                <View style={{ width: 17, height: 17, borderRadius: 50, backgroundColor: 'rgba(000,000,000,0.1)', marginTop: 1, justifyContent: "center", alignItems: 'center' }}>
                    <Icon
                    size={10}
        name='chevron-down'
        type='font-awesome'
        color='#000'
                    /></View> 
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
                width: 28, height: 18, borderRadius: 50, marginTop: 146, backgroundColor: "rgba(255,255,255,1)", borderColor: "red", borderWidth: 1,
            }} >
                 <View style={{justifyContent:"center",alignItems:"center",paddingTop:2}}><Icon
                    size={10}
        name='arrow-left'
        type='font-awesome'
        color='#000'
                    /></View>
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
