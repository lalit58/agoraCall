// import React, {useRef, useState, useEffect} from 'react';
// import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
// import {PermissionsAndroid, Platform} from 'react-native';
// import {
//   ClientRoleType,
//   createAgoraRtcEngine,
//   IRtcEngine,
//   ChannelProfileType,
// } from 'react-native-agora';

// const appId = '9f5c8bb425b648fd8575faf5b914ae63';
// const channelName = 'lalit_98';
// const token = '007eJxTYKgv8Yubw8m0sf3A5pTUlVFTu5ikeDykOVWORzwziYkTU1NgsEwzTbZISjIxMk0yM7FIS7EwNTdNS0wzTbI0NElMNTM+eUQlrSGQkcE+bjMjIwMEgvgcDDmJOZkl8ZYWDAwAokgdCA==';
// const uid = 0;

// const App = () => {
//   const agoraEngineRef = useRef<IRtcEngine>(); // Agora engine instance
//   const [isJoined, setIsJoined] = useState(false); // Indicates if the local user has joined the channel
//   const [remoteUid, setRemoteUid] = useState(0); // Uid of the remote user
//   const [message, setMessage] = useState(''); // Message to the user

//   function showMessage(msg: string) {
//     setMessage(msg);
//   }

//   const getPermission = async () => {
//     if (Platform.OS === 'android') {
//       await PermissionsAndroid.requestMultiple([
//         PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
//       ]);
//     }
//   };

//   useEffect(() => {
//     // Initialize Agora engine when the app starts
//     setupVoiceSDKEngine();
//   }, []);

//   const setupVoiceSDKEngine = async () => {
//     try {
//       // use the helper function to get permissions
//       if (Platform.OS === 'android') {
//         await getPermission();
//       }
//       agoraEngineRef.current = createAgoraRtcEngine();
//       const agoraEngine = agoraEngineRef.current;
//       agoraEngine.registerEventHandler({
//         onJoinChannelSuccess: () => {
//           showMessage('Successfully joined the channel ' + channelName);
//           setIsJoined(true);
//         },
//         onUserJoined: (_connection, Uid) => {
//           showMessage('Remote user joined with uid ' + Uid);
//           setRemoteUid(Uid);
//         },
//         onUserOffline: (_connection, Uid) => {
//           showMessage('Remote user left the channel. uid: ' + Uid);
//           setRemoteUid(0);
//         },
//       });
//       agoraEngine.initialize({
//         appId: appId,
//       });
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   // ... rest of the code
//   const join = async () => {
//     if (isJoined) {
//         return;
//     }
//     try {
//         agoraEngineRef.current?.setChannelProfile(
//             ChannelProfileType.ChannelProfileCommunication,
//         );
//         agoraEngineRef.current?.joinChannel(token, channelName, uid, {
//             clientRoleType: ClientRoleType.ClientRoleBroadcaster,
//         });
//     } catch (e) {
//         console.log(e);
//     }
//   };
  
//   const leave = () => {
//     try {
//         agoraEngineRef.current?.leaveChannel();
//         setRemoteUid(0);
//         setIsJoined(false);
//         showMessage('You left the channel');
//     } catch (e) {
//         console.log(e);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.main}>
//       <Text style={styles.head}>Agora Video Calling Quickstart</Text>
//       <View style={styles.btnContainer}>
//         <Text onPress={join} style={styles.button}>
//           Join
//         </Text>
//         <Text onPress={leave} style={styles.button}>
//           Leave
//         </Text>
//       </View>
//       <ScrollView
//         style={styles.scroll}
//         contentContainerStyle={styles.scrollContainer}>
//         {isJoined ? (
//           <Text>Local user uid: {uid}</Text>
//         ) : (
//           <Text>Join a channel</Text>
//         )}
//         {isJoined && remoteUid !== 0 ? (
//           <Text>Remote user uid: {remoteUid}</Text>
//         ) : (
//           <Text>Waiting for a remote user to join</Text>
//         )}
//         <Text>{message}</Text>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     paddingHorizontal: 25,
//     paddingVertical: 4,
//     fontWeight: 'bold',
//     color: '#ffffff',
//     backgroundColor: '#0055cc',
//     margin: 5,
//   },
//   main: {flex: 1, alignItems: 'center'},
//   scroll: {flex: 1, backgroundColor: '#ddeeff', width: '100%'},
//   scrollContainer: {alignItems: 'center'},
//   videoView: {width: '90%', height: 200},
//   btnContainer: {flexDirection: 'row', justifyContent: 'center'},
//   head: {fontSize: 20},
// });

// export default App;

import React, {useRef, useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {PermissionsAndroid, Platform} from 'react-native';
import {
  ClientRoleType,
  createAgoraRtcEngine,
  IRtcEngine,
  ChannelProfileType,
} from 'react-native-agora';


// const appId = '';
// let channelName = ''; // Channel name input by the other user
// let token = ''; // Authentication token input by the other user
// const uid = 0;
let appId = '9f5c8bb425b648fd8575faf5b914ae639';
let channelName = 'lalit_98';
let token = '007eJxTYKgv8Yubw8m0sf3A5pTUlVFTu5ikeDykOVWORzwziYkTU1NgsEwzTbZISjIxMk0yM7FIS7EwNTdNS0wzTbI0NElMNTM+eUQlrSGQkcE+bjMjIwMEgvgcDDmJOZkl8ZYWDAwAokgdCA==9';
const uid = 0;
const App = () => {
  const agoraEngineRef = useRef<IRtcEngine>(); // Agora engine instance
  const [isJoined, setIsJoined] = useState(false); // Indicates if the local user has joined the channel
  const [remoteUid, setRemoteUid] = useState(0); // Uid of the remote user
  const [message, setMessage] = useState(''); // Message to the user

  function showMessage(msg: string) {
    setMessage(msg);
  }

  const getPermission = async () => {
    if (Platform.OS === 'android') {
      await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      ]);
    }
  };

  useEffect(() => {
    // Initialize Agora engine when the app starts
    setupVoiceSDKEngine();
  }, []);

  const setupVoiceSDKEngine = async () => {
    
    try {
      // use the helper function to get permissions
      if (Platform.OS === 'android') {
        await getPermission();
      }

      agoraEngineRef.current = createAgoraRtcEngine();

      const agoraEngine = agoraEngineRef.current;
      agoraEngine.registerEventHandler({
        onJoinChannelSuccess: () => {
          showMessage('Successfully joined the channel ' + channelName);
          setIsJoined(true);
        },

        onUserJoined: (_connection, Uid) => {
          showMessage('Remote user joined with uid ' + Uid);
          setRemoteUid(Uid);
        },
        onUserOffline: (_connection, Uid) => {
          showMessage('Remote user left the channel. uid: ' + Uid);
          setRemoteUid(0);
        },
      });

      agoraEngine.initialize({
        appId: "9f5c8bb425b648fd8575faf5b914ae63",
      });

      agoraEngine.joinChannel(token, channelName, uid, {
        
        clientRoleType: ClientRoleType.ClientRoleBroadcaster,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const joinChannel = () => {
    
    channelName = 'lalit_98'; // Get the channel name input by the other user
    token = '007eJxTYKgv8Yubw8m0sf3A5pTUlVFTu5ikeDykOVWORzwziYkTU1NgsEwzTbZISjIxMk0yM7FIS7EwNTdNS0wzTbI0NElMNTM+eUQlrSGQkcE+bjMjIwMEgvgcDDmJOZkl8ZYWDAwAokgdCA=='; // Get the authentication token input by the other user
    setupVoiceSDKEngine();
  };

  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.head}>Agora Video Calling Quickstart</Text>
      <TextInput
    value={channelName}

        style={styles.input}
        placeholder="Enter Channel Name"
        onChangeText={(text) => (channelName = text)}
      />
      <TextInput
    value={token}
        style={styles.input}
        placeholder="Enter Authentication Token"
        onChangeText={(text) => (token = text)}
      />
      <Button title="Join Channel" onPress={joinChannel} />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContainer}>
        {isJoined ? (
          <Text>Local user uid: {uid}</Text>
        ) : (
          <Text>Join a channel</Text>
        )}
        {isJoined && remoteUid !== 0 ? (
          <Text>Remote user uid: {remoteUid}</Text>
        ) : (
          <Text>Waiting for a remote user to join</Text>
        )}
        <Text>{message}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 5,
  },
  main: {flex: 1, alignItems: 'center'},
  scroll: {flex: 1, backgroundColor: '#ddeeff', width: '100%'},
  scrollContainer: {alignItems: 'center'},
  videoView: {width: '90%', height: 200},
  btnContainer: {flexDirection: 'row', justifyContent: 'center'},
  head: {fontSize: 20},
});

export default App;