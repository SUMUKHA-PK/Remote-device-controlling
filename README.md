# Remote-device-controlling

Goal : <br/>

* To make a cross platform application that enables remote device control. <br/>
* This includes file extraction, making music play from the local hard drives or opening certain webpages. <br/>
* This will be done while ensuring secure consent from both ends of the devices. <br/>
* Extra functionality addition that will make the complicated nature of devices easier. <br/>

Working : <br/>

* All the devices will be connected to central server (CDN) later, which will register the device. Each device will be given a certain id and each session will have a token.
* Each set of devices can be connected to each other by creating a room.
* Application from any device will be able to trigger any other device on the same network (room) to perform any of the tasks supported.
* Conflict resolution will be based on protocols that will be defined later based on convenience.

Frameworks and languages used: <br/>

* The server will be using a Node.js (scale up to GO if required) and express (scale up to rectify if required).
* The mobile apps will be written using react-native.
* Computer (Desktop versions) will be using Web Applications.
* The Web Application cannot have remote controlling features as JavaScript is a scripting language.Thus, it will be eventually made as a social network.

Future Additions :

* AI (voice control) to run the commands. (Google APIs / Self developed)
* Application can be run from anywhere and not only the working directory.
* Web applicaton as a social network for file sharing and other simple tasks.


Contributions and Stylings :
* Proper javascript / typescript stylings
* Use **TABS** of length 4 spaces and not spaces for indentation
* Create your own branch for each issue and merge the branch
