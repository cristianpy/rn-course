----------------EMULATOR-----------------------
//ENVIRONMENTS FOR ANDROID ON LINUX
export ANDROID_HOME=$HOME/Android/Sdk
-- export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/emulator

// LIST EMULATOR ANDROID
emulator -list-avds

//RUN EMULATOR ANDROID TERMINAL
emulator -avd NAME

//REFERENCE
https://facebook.github.io/react-native/docs/getting-started.html

----------------OTHER---------------------------