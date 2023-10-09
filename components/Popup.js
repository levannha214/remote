
import React, { useEffect, useState ,useRef} from "react";
import { View,Text, StyleSheet, ImageBackground, Animated} from 'react-native';
import Remote from "./Remote";
import { Button } from '@rneui/themed';
const bg = require('./image/background.png');

const Popup = () => {
  
    const [check, setCheck] = useState(0);
    const user_manual = [{
        title: 'Welcom to your TV Guide',
        text: `Use your remote to get the most out of
your TV guide. Let's walk you through
some shortcuts.`
    }, {
        title: 'Skip to the day',
        text: `On your remote,press the Fast Forward and
Rewind buttons to +/-24 hours.`
    },
    {
        title: 'Zap to a channel',
        text: `Uer the number pad on your remote to jump
straight to a channel in the guide.`
    },
    {
        title: 'Scroll by pages',
        text: `Press Channel Up or Channel Down to move
up or down a page in the guide.`
    }, {
        
        title: 'Back to the channel',
        text: `While in the Guide,press the Back Button
to highlight the channel tile.`
    }, {
        title: 'Help is always here',
        text: `Check out these tips at any time by selecting 
the '?' icon.`
    }
    ];
    const animationText = useRef(new Animated.Value( 1 )).current;
    const animationTitle = useRef(new Animated.Value(1)).current;
   
    const Next = () => {
        Animated.timing(animationText, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false,
        }).start();
      Animated.timing(animationTitle, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
      }).start();
     
    if (check === 5) {
        setTimeout(() => setCheck(0), 500)
    } else {
        setTimeout(() => setCheck(check + 1), 500);
    }
    }
     
   
    const Back = () => {
        Animated.timing(animationText, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false,
        }).start();
     Animated.timing(animationTitle, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false,
        }).start();
  
        setTimeout(() => setCheck(check - 1), 500);
  
}
    useEffect(() => {

        if (check !== 0) {
             
                 Animated.timing(animationTitle, {
                 toValue: 12,
                    duration: 500,
                    useNativeDriver: false,
                }).start();
             Animated.timing(animationText, {
                 toValue: 20,
                    duration: 500,
                    useNativeDriver: false,
                }).start();
           
        }
    }, [check]);
    return (<View style={styles.container}>
        <ImageBackground source={bg} resizeMode="cover" borderRadius={20} style={styles.background}>

           <View><View style={{ width: 250, height: 150, paddingTop: 20 }}>
                <Text style={{color:"#ffffff"}}>Dismiss</Text>
            </View>
                {user_manual.map((item, index) => index === check && <View style={index !=0 ?styles.text2:styles.text}>
                    {check === 0 ? <Animated.Text style={{ color: `rgba(255,255, 255, 1)`, fontSize: 20, fontWeight: 900, width: 150 }}>{item.title}</Animated.Text>
                          : <Animated.Text style={{ color:  `rgba(255, 255, 255, 0.99)`, fontSize: animationText, fontWeight: 900 }}>{item.title}</Animated.Text>}
                    {check === 0 ? <Text style={{ color: `rgba(255, 255, 255,1)`, fontSize: 12 }}>{item.text}</Text>:<Animated.Text style={{ color: `rgba(255, 255, 255, 1)`, fontSize: animationTitle }}>{item.text}</Animated.Text>}
                </View>)}
                
                <View>
                    <View style={styles.button}>
                        {check === 0 ? <View style={{ width: 100 }}></View> : <Button
                            onPress={Back}
                            title="Back"
                            titleStyle={{ fontWeight: '700', fontSize: 12 }}
                            buttonStyle={{
                                backgroundColor: 'rgba(000, 000, 000, 0)',
                                borderColor: 'rgba(78, 116, 289, 1)',
                                borderWidth: 1,
                                borderRadius: 20,
                                paddingTop: 2,
                                paddingBottom: 2,
                            }}
                            containerStyle={{
                                width: 100,
                                height: 30,
                            }}
                        />}
                        <Button
                            onPress={Next }
            title={check===5 ?"Done":"Next"}
            titleStyle={{ fontWeight: '700',fontSize:12 }}
             buttonStyle={{
             backgroundColor: 'rgba(78, 116, 289, 1)',
                borderColor: 'rgba(78, 116, 289, 1)',
                borderWidth: 1,
                  borderRadius: 20,
                  paddingTop: 2,
                  paddingBottom:2
              }}
              containerStyle={{
                width: 100,
                height: 30,
              }}
            /></View>
                </View>
                </View>
            <Remote check={check} />
 </ImageBackground>  
    </View>);
    
}
const styles = StyleSheet.create({
    container: {
        width: 380,
        height: 300,
        overflow: "hidden"
    },
  background: {
      width: 380,
      height: 300,
      paddingLeft: 20,
      paddingRight: 20,
      flexDirection: 'row',
    },
    button: {
        paddingTop: 10,
        width: 220,
        flexDirection: 'row',
    justifyContent: 'space-between',
    },
    text: {
            flexDirection: 'column',
        justifyContent: 'end',
        width: 250,
        height: 100
    },
      text2: {
          paddingTop: 30,
            flexDirection: 'column',
        justifyContent: 'end',
        width: 250,
        height: 100
    }
  
  
});
export default Popup;


