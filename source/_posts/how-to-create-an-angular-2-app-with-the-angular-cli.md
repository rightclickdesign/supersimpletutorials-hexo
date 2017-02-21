---
title: How to create an Angular 2 app with the angular-cli
date: 2017/02/09 12:00
author: Tommy Nguyen
description: How to create an Angular 2 app with the angular-cli
categories:
  - dev
tags:
  - Angular 2
features:
  license: creative-commons
markdown:
  gfm: false
---
## How to create an Angular 2 app with the [angular-cli](https://cli.angular.io/)

### Run these commands

<button class="right floated mini ui icon button copy btn" data-clipboard-target="#ng-install"><i class="fa fa-clipboard"></i></button>

<div id="ng-install">
{% codeblock lang:bash %}
npm install -g @angular/cli
ng new my-awesome-app
cd my-awesome-app
{% endcodeblock %}
</div>

### Run server

<button class="right floated mini ui icon button copy btn" data-clipboard-target="#ng-serve"><i class="fa fa-clipboard"></i></button>

<div id="ng-serve">
{% codeblock lang:bash %}
ng serve
{% endcodeblock %}
</div>

The `ng serve` command launches the server, watches your files, and rebuilds the app as you make changes to those files.

Open a browser on `http://localhost:4200/` to see your work.

### Build for production

<button class="right floated mini ui icon button copy btn" data-clipboard-target="#ng-build"><i class="fa fa-clipboard"></i></button>

<div id="ng-build">
{% codeblock lang:bash %}
ng build --prod
{% endcodeblock %}
</div>

More info: [angular-cli](https://cli.angular.io/) and [CLI Quickstart](https://angular.io/docs/ts/latest/cli-quickstart.html)

Enjoy!