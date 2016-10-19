# openvidu-sample-basic-ng2

This is a OpenVidu sample SPA web page implemented in [Angular 2](http://angular.io). 

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.17.

## Start OpenVidu service

To develop a OpenVidu app you have to start OpenVidu services. These services are included in a single docker image to make easy develop apps. To start the services be sure you have docker installed and execute:

<pre>
docker run -p 8443:8443 --rm openvidu/openvidu-server-kms
</pre>

## Start app development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Generate build files

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

