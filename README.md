# openvidu-sample-basic-ng2

This repository contains a group videoconference sample application implemented using OpenVidu. This application is a SPA page implemented in [Angular 2](http://angular.io) and was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.17.

## Start OpenVidu Development Server

To develop a videoconference application with OpenVidu you first have to start an OpenVidu Development Server, that contains all needed services. OpenVidu Development Server is distributed in a single docker image. 

To execute OpenVidu Development Server in your local development computer, you need to have docker software installed. You can [install it on Windows, Mac or Linux](https://docs.docker.com/engine/installation/).

To start OpenVidu Development Server execute the following command (depending on your configuration it is is possible that you need to execute it with 'sudo'):

<pre>
docker run -p 8443:8443 --rm -e KMS_STUN_IP=193.147.51.12 -e KMS_STUN_PORT=3478 openvidu/openvidu-server-kms
</pre>

And then wait to a log trace similar to this:

<pre>
INFO: Started OpenViduServer in 5.372 seconds (JVM running for 6.07)
</pre>

If you have installed Docker Toolbox in Windows or Mac, you need to know the IP address of your docker machine excuting the following command:

<pre>
docker-machine ip default
</pre>

Then, open in your browser and visit URL `https://localhost:8443` (or if you are using Docker Toolbox in Windows or Mac visit `https://<IP>:8443`). Then, browser will complain about insecure certificate. Please accept the selfsigned certificate as valid.

Now you are ready to execute the sample application.

## Start app development server


## Generate build files

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.







## Executing sample application

In this repository you have a sample JavaScript application that use OpenVidu Development Server to allow videoconferences  between a group of users. Please clone it with the following command (you need git installed in your development machine):

<pre>
git clone https://github.com/OpenVidu/openvidu-sample-basic-ng2
</pre>

Then, install NPM dependencies with:

<pre>
cd openvidu-sample-basic-ng2
npm install
</pre>

If you obtain an error executing this command, be sure you have installed Node 4 or highe together with NPM 3 or higher.

Then, you execute the development Angular 2 server executing 

<pre>
ng serve
</pre>

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

If you are using Docker Toolbox for Windows or Mac, you need to modify the sample application code. You have to change the following line in the file `src/app/app.component.ts`:

<pre>
this.openVidu = new OpenVidu("wss://127.0.0.1:8443/");
</pre>

You have to change `127.0.0.1` with the IP of the OpenVidu Development Server obtained in the previous step.

Then you can go to `http://127.0.0.1:8080` to execute the sample application. 

As you can see, the user name and session is filled automatically in the form to make easier testing the app. 

If you open `http://127.0.0.1:8080` in two tabs, you can simulate two users talking together. You can open as tabs as you want, but you need a very powerful development machine to test 3 or more users.

For now, it is not possible use the sample application from a different computer.
