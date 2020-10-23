POM based Hybrid TDD Automation Framework

## Assumptions
You have Android Studio installed and an emulator device configured within android studio. Prefered name of android device = "android_device" with min sdk version 16(i have tested it on sdk 30).
if you want to use any other name you need to change the name also in "config.properties" file located in root directory.


## Explanation of your selections, configurations and environment
POM(page object model) - To ensure it's more readable, maintainable, and reusable. where each class holds funcionality of a single page. If something breaks in future we know where in Automation script to fix it.
TestNG - Unit Testing Framework for making clean independent Test classes/cases. Also, comes with powerfull features like Annotations, Listeners, Reporting, Parallel Execution etc.
Maven - To make compilation, distribution, dependency management easy.
Appium - For automating cross platform mobile native, mobile web, and hybrid written in any language.

configurations
There is "config.properties" file

## How to set up and execute test locally
1. Install Java and set Java_Home env variable.
2. Install Android Studio and set Android_Home env variable. 
3. Setup an emulator with min sdk version 16.
4. Install Maven v3.6.2 or later.
5. Install Nodejs v6.9.0 or later.
6. Install appium server v1.18.3 using "npm install -g appium".
7. Start emulator by going to "C:\Users\${user_name}\AppData\Local\Android\Sdk\platform-tools" in cmd and type command "emulator -avd ${your_device_name}".
8. Now run appium server by going to cmd and type "npm appium".
9. Unzip the source code provided, import as maven project into any IDE(eclipe etc) and run as maven project.
or Alrernativery simply go to the projecct root directory where pom.xml exists from command line and type "mvn test"
10. Test will run on emulator device, you can see logs generated at runtime on console and once tests are completed TestNG report can be found under folder "target\surefire-reports\index.html".
