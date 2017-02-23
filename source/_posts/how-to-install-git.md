---
title: How to install git
date: 2017-02-20 20:46:48
author: Tommy Nguyen
description: How to install git on Linux, macOS, and Windows
categories:
  - dev
tags:
  - git
  - tools
thumbnail: /images/logos/git.png
features:
  tabs: false
  hide_date: false
  license: creative-commons
markdown:
  gfm: false
---

### Linux

For distros such as [Fedora](https://getfedora.org/), [Red Hat](https://www.redhat.com/en), and [CentOS](https://www.centos.org/), run:

<button class="right floated mini ui icon button copy btn" data-clipboard-target="#linux"><i class="fa fa-clipboard"></i></button>

<div id="linux">
{% codeblock lang:bash %}
sudo yum install git-all
{% endcodeblock %}
</div>

For distros such as [Debian](https://www.centos.org/), [Ubuntu](https://www.ubuntu.com/), and [Kali Linux](https://www.kali.org/), run:

<button class="right floated mini ui icon button copy btn" data-clipboard-target="#debian"><i class="fa fa-clipboard"></i></button>

<div id="debian">
{% codeblock lang:bash %}
sudo apt-get install git-all
{% endcodeblock %}
</div>

For [Arch Linux](https://www.archlinux.org/), run:

<button class="right floated mini ui icon button copy btn" data-clipboard-target="#arch"><i class="fa fa-clipboard"></i></button>

<div id="arch">
{% codeblock lang:bash %}
sudo pacman -S git
{% endcodeblock %}
</div>

--- 

### Mac OS X and macOS 

* **Option 1**: On OS X Mavericks (10.9) and later, simply run `git` from Terminal. You'll be prompted to install `git` if it's not already installed.
* **Option 2**: Install `git` via binary installer found at [https://git-scm.com/download/mac](https://git-scm.com/download/mac). Download the installer and go through installation process.
* **Option 3**: Install `git` via the GitHub for Mac package found at [https://mac.github.com](https://mac.github.com). Download the installer and go through installation process.

---

### Windows

Simply go to [https://git-scm.com/download/win](https://git-scm.com/download/win). Download `.exe` file and go through installation process. Git BASH and Git GUI will be installed.

More info: [git-scm.com](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

---

Awesome. Now go do the {% post_link initial-git-setup initial git setup %}.  