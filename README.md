# README - DaiHoiXI

### SYSTEM REQUIREMENTS
    * NodeJS 10.14.1 (version >= 8)
    * Android Studio (for android build & emulator)
    * Xcode (for iOS build & simulator)

### SETUP
    #### React Native CLI
        * MACOS requires: Yarn, Node, Watchman, Jdk, Cocoapods
            $ brew install yarn
            $ brew install node 
            $ brew install watchman
            $ brew cask install adoptopenjdk/openjdk/adoptopenjdk8
            $ sudo gem install cocoapods

    #### ANDROID_HOME, ANDROID_NDK: Install Sdk, Ndk(Using Android studio) before run command line
        * MACOS:
            $ vi ~/.bash_profile
            * Update .bash_profile with content then save:
                export ANDROID_HOME=$HOME/Library/Android/sdk
                export ANDROID_NDK=$HOME/Library/Android/sdk/ndk-bundle
                export PATH=$PATH:$ANDROID_HOME/emulator
                export PATH=$PATH:$ANDROID_HOME/tools
                export PATH=$PATH:$ANDROID_HOME/tools/bin
                export PATH=$PATH:$ANDROID_HOME/platform-tools
                export PATH=$PATH:$ANDROID_NDK
            $ source ~/.bash_profile

    #### Install node modules
        $ yarn install

    #### Setup environment
        * Development: yarn run env:set dev
        * Production: yarn run env:set prod

### RUN
    #### Setup emulator
        * Create emulator (skip this step if you use real devices). 
        * You can use AVD in Android Studio or Genymotion to create emulator
        * You have to enable USB debugging for Android device before using

    #### Run on Android
        $ react-native run-android
        $ without CLI: npx react-native run-android
        
    #### Run on Ios
        $ cd ios & pod install (If have new package)
        $ react-native run-ios
        $ without CLI: npx react-native run-ios

    ### Clean builds:
        $ cd ios && xcodebuild clean
        $ chmod 755 android/gradlew
        $ cd android && ./gradlew clean

### UNIT TEST
    $ yarn test

### VALIDATE CODE
    $ yarn global add tslint@5.18.0

### REFERENCES
    React Native CLI: https://reactnative.dev/docs/getting-started
    Setup Environment: https://reactnative.dev/docs/environment-setup
