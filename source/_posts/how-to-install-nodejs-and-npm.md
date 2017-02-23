---
title: How to install Node.js and npm
author: Tommy Nguyen
features:
  tabs: false
  hide_date: false
  license: creative-commons
toc: true
markdown:
  gfm: false
date: 2017-02-22 15:29:28
#description: Installing Node.js and npm (the default package manager for Node.js) is super simple.
description: Installing Node.js and npm (the default package manager for Node.js) is super simple. npm automatically gets installed. At the time of this writing, the latest LTS version is v6.10..0 which includes npm 3.10.10.
thumbnail: /images/logos/node.png
categories:
  - dev
tags:
  - npm
  - node
  - linux
  - mac
  - windows
---

---

### Linux 

**For distros such as [Fedora](https://getfedora.org/), [Red Hat](https://www.redhat.com/en), and [CentOS](https://www.centos.org/), run:**

<button class="right floated mini ui icon button copy btn" data-clipboard-target="#fedora"><i class="fa fa-clipboard"></i></button>

<div id="fedora">
{% codeblock lang:bash %}
curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -
sudo yum -y install nodejs
{% endcodeblock %}
</div>

It won't hurt to install build tools also: 

<button class="right floated mini ui icon button copy btn" data-clipboard-target="#build-fedora"><i class="fa fa-clipboard"></i></button>

<div id="build-fedora">
{% codeblock lang:bash %}
sudo yum install gcc-c++ make
{% endcodeblock %}
</div>

**For distros such as [Debian](https://www.centos.org/), [Ubuntu](https://www.ubuntu.com/), and [Kali Linux](https://www.kali.org/), run:**

<button class="right floated mini ui icon button copy btn" data-clipboard-target="#debian"><i class="fa fa-clipboard"></i></button>

<div id="debian">
{% codeblock lang:bash %}
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
{% endcodeblock %}
</div>

It won't hurt to install build tools also: 

<button class="right floated mini ui icon button copy btn" data-clipboard-target="#build-debian"><i class="fa fa-clipboard"></i></button>

<div id="build-debian">
{% codeblock lang:bash %}
sudo apt-get install -y build-essential
{% endcodeblock %}
</div>

**For [Arch Linux](https://www.archlinux.org/), run:**

<button class="right floated mini ui icon button copy btn" data-clipboard-target="#arch"><i class="fa fa-clipboard"></i></button>

<div id="arch">
{% codeblock lang:bash %}
sudo pacman -S nodejs npm
{% endcodeblock %}
</div>

--- 

### Mac OS X and macOS

1. Go to the official the [Node.js website](https://nodejs.org/en/download/). 
2. Download the "Macintosh Installer". A `pkg` file will download.
3. Go through installation steps. 
4. Awesome.

---

### Windows

1. Go to the official the [Node.js website](https://nodejs.org/en/download/). 
2. Download the "Windows Installer". An `msi` file will download.
3. Go through installation steps. 
4. Awesome.

---

### Check how it went

Open a terminal or command prompt. 

Run `node --version` to check the installed Node.js version. Run `npm --version` to check the installed npm version. 

Example output:

```bash
$ node --version
v6.10.0

$ npm --version
3.10.10
```

More info: [nodejs.org](https://nodejs.org/en/download/)

Enjoy our Node adventures!