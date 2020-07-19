// import React from 'react';
// import {
//   Text,
//   ScrollView,
//   View,
// } from 'react-native';
// import {
//   ThemedComponentProps,
//   ThemeType,
//   withStyles,
// } from '@kitten/theme';
// import {
//   List,
//   ListItem,
//   Modal,
//   Card,
//   Button,
// } from '@kitten/ui';
// import { FunctionModel } from '@src/core/models/function/function.model';
// import { pxToPercentage } from '@src/core/utils/utils';
// import { textStyle } from '@src/components';
// import { AlternativeFunctionEnum } from '@src/core/utils/constants';
// import { isTablet } from 'react-native-device-info';
// import { ProfileInfoV2 } from '@src/components/profileInfo/profileinfoV2.component';
// import { UserDetail } from '@src/core/models/user/userDetail.model';

// interface ComponentProps {
//   userDetail: UserDetail;
//   functions: FunctionModel[];
//   onAlternativeFunctionPress: (type: number) => void;
//   onPressBackIcon: () => void;
// }

// export type FunctionProps = ThemedComponentProps & ComponentProps;

// const FunctionComponent: React.FunctionComponent<FunctionProps> = (props) => {
//   const [visible, setVisible] = React.useState(false);

//   const onFunctionItemPress = (): void => {
//     setVisible(true);
//   };

//   const onAlternativeFunctionPress = (type: number): void => {
//     onHideModal();
//     props.onAlternativeFunctionPress(type);
//   };

//   const onHideModal = (): void => {
//     setVisible(false);
//   };

//   const { themedStyle } = props;

//   return (
//     <View style={themedStyle.container}>
//       <ScrollView
//         showsVerticalScrollIndicator={false}>
//         {/* <HeaderFunction
//           onPressBackIcon={props.onPressBackIcon}
//         /> */}
//         <ProfileInfoV2 userDetail={props.userDetail} />
//         <List
//           scrollEnabled={false}
//           data={props.functions}
//           numColumns={4}
//           extraData={props.functions}
//           style={themedStyle.viewList}
//           contentContainerStyle={themedStyle.contentContainer}
//           keyExtractor={(item, index) => index.toString()}
//           renderItem={({ item, index }) => {
//             return (
//               <ListItem
//                 activeOpacity={0.75}
//                 onPress={onFunctionItemPress}
//                 style={themedStyle.btnItem}>
//                 {item.icon(themedStyle.icon)}
//                 <Text style={themedStyle.txtTitle}>
//                   {item.title}
//                 </Text>
//               </ListItem>
//             );
//           }}
//         />
//       </ScrollView>
//       <Footer />
//       <Modal
//         visible={visible}
//         backdropStyle={themedStyle.backdrop}
//         onBackdropPress={onHideModal}>
//         <Card
//           disabled={true}
//           style={themedStyle.viewCard}>
//           <Button
//             size={isTablet() ? 'giant' : 'large'}
//             onPress={() => onAlternativeFunctionPress(AlternativeFunctionEnum.Program)}>
//             {'Chương trình'}
//           </Button>
//           <Button
//             size={isTablet() ? 'giant' : 'large'}
//             style={themedStyle.btnAlternative}
//             onPress={() => onAlternativeFunctionPress(AlternativeFunctionEnum.Notification)}>
//             {'Thông báo'}
//           </Button>
//           <Button
//             size={isTablet() ? 'giant' : 'large'}
//             style={themedStyle.btnAlternative}
//             onPress={() => onAlternativeFunctionPress(AlternativeFunctionEnum.PressRelease)}>
//             {'Thông cáo báo chí'}
//           </Button>
//           <Button
//             size={isTablet() ? 'giant' : 'large'}
//             style={themedStyle.btnAlternative}
//             onPress={() => onAlternativeFunctionPress(AlternativeFunctionEnum.groupDelegateList)}>
//             {'Danh sách tổ'}
//           </Button>
//         </Card>
//       </Modal>
//     </View>
//   );
// };

// export const FunctionTablet = withStyles(FunctionComponent, (theme: ThemeType) => ({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   viewList: {
//     backgroundColor: theme['color-primary-12'],
//   },
//   contentContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: pxToPercentage(12),
//   },
//   backdrop: {
//     backgroundColor: theme['color-custom-800'],
//   },
//   btnItem: {
//     width: pxToPercentage(420), // w 186
//     height: pxToPercentage(245), // h 174
//     flexDirection: 'column',
//     justifyContent: 'center',
//     borderRadius: pxToPercentage(25),
//     borderWidth: pxToPercentage(2),
//     borderColor: theme['color-primary-3'],
//     marginRight: pxToPercentage(40),
//     marginTop: pxToPercentage(30),
//     marginBottom: pxToPercentage(28),
//     backgroundColor: theme['color-primary-2'],
//   },
//   btnAlternative: {
//     marginTop: pxToPercentage(10),
//   },
//   txtTitle: {
//     textAlign: 'center',
//     fontSize: pxToPercentage(36),
//     marginTop: pxToPercentage(4),
//     paddingVertical: pxToPercentage(2),
//     color: theme['color-primary-3'],
//     ...textStyle.regular,
//   },
//   icon: {
//     width: pxToPercentage(88),
//     height: pxToPercentage(88),
//     tintColor: theme['color-primary-3'],
//     resizeMode: 'contain',
//   },
// }));
