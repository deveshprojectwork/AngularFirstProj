Angular Install the Environment
• visual studio code : Text editor (or any other that you prefer)
• Node.js + npm: dependence management (npm~= gradle/maven in java world)
• Angular CLI: Command Line Interfaces for angular
• TypeScript: The language of angular 2


• After install npm, install typescript and angular cli. using the npm of node.js
• sudo npm intall –g typescript
• sudo npm intall –g @angular/cli

Checking 
$ ng -v

Create new project - $ ng new "myfirstproject"
Run the project -    $ ng serve
Create Component -   $ ng g c "componen-name"                             //this contain html, css and ts files
Create Services -    $ ng g s "service-name"
Create Build fr test $ ng build --env=test
Install bootstrap -  $ npm install bootstrap@3 jquery --save              //***This installs Bootstrap and jQuery ***                                 
                                                                            into   the node_modules folder within the project directory
                        index.html --<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        or .angular-cli.json file should have bootstrap and js files
            "styles": [
                        "../nodemodule/bootstrap/dise/css/bootstrapmin.css"
                    ],
            "scripts": [
                "..nodemodule/jqery/dis/jquery.min.js",
                 "..nodemodule/bootstrap/dis/js/bootstrap.min.js",
            ]

//Go to home componet and use boot strap class like continer
//asset folder is used for static file, image and tempaltes


Directives in Angular is a js class, which is declared as @directive. We have 3 directives in Angular. The directives are listed below −

1. Component Directives :These form the main class having details of how the component should be processed, instantiated and used at runtime.

2. Structural Directives : Change the DOM's structure,
typically by adding, removing, or manipulating elements.It have a * sign before the directive. For ex, *ngIf and *ngFor.
    isavailable = false; //variable is set to true
    <span *ngIf = "isavailable; then condition1 else condition2">this condition is true</span>
     <ng-template #condition1>Condition is VALID</ng-template>
     <ng-template #condition2>Condition is INVALID</ng-template>

      
    months = ["January", "Feburary", "March", "April", "May", 
        "June", "July", "August", "September",
        "October", "November", "December"];
     <select (change)="changeMonth($event)">
       <option *ngFor="let i of months">{{i}}</option>
    </select>

3. Attribute Directives : Attribute directives deal with changing the look and behavior of the dom element. 
