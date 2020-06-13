# SIPnCompound

To create ionic application using VS code:

1. To setup environment: npm install -g cordova ionic

2. To create project: ionic start DemoApp tabs

3. To run the project: ionic serve OR ionic lab 

4. To create an apk: ionic cordova build android
or try:

ionic cordova build --release android

	a. Install java sdk
	
	b. Download the SDK direct from Google by clicking here. Scroll down a bit and find the section marked "Get just the command line tools" and save it somewhere easy to get to, like your desktop. We'll be extracting it to a better location in the next step. Open the bin folder in the extracted download and find the sdkmanager executable file. It may look like a terminal or shell command but it will open a GUI as long as you have Java installed correctly.
	
set ANDROID_HOME=C:\ installation location \android-sdk

set PATH=%PATH%;%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools

5. download gradle zip https://gradle.org/next-steps/?version=5.4.1&format=bin-

Click 'New' under system variables and add as below

Variable Name GRADLE_HOME Variable Value C:\Gradle\gradle-4.0.1

Then choose PATH variable from system variable list append the gradle path to variable value like this C:\Gradle\gradle-4.0.1\bin

Icon size"
<!--
            ldpi    : 36x36 px
            mdpi    : 48x48 px
            hdpi    : 72x72 px
            xhdpi   : 96x96 px
            xxhdpi  : 144x144 px
            xxxhdpi : 192x192 px
        -->

While installing there woukd be "Play Protect" warning.  Choose "Install anyway"

