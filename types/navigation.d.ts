import { DrawerScreenProps } from '@react-navigation/drawer';


export type RootDrawerParamList = {
  Welcome: undefined;
  User: undefined;
};

export type WelcomeScreenProp = DrawerScreenProps<RootDrawerParamList, 'Welcome'>;
export type UserScreenProp = DrawerScreenProps<RootDrawerParamList, 'User'>;