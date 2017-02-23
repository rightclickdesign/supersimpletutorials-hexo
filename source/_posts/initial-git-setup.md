---
title: Initial git setup
date: 2017-02-20 22:44:02
author: Tommy Nguyen
description: Set up your git environment and editor using git config
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

If you haven't done so, learn {% post_link how-to-install-git how to install git %}. Once installed, let's customize our git environment.

### Run these commands to set your identity

<button class="right floated mini ui icon button copy btn" data-clipboard-target="#git-config-user"><i class="fa fa-clipboard"></i></button>

<div id="git-config-user">
{% codeblock lang:bash %}
# Replace "Jack Jones" with your first and last name
git config --global user.name "Jack Jones"

# Replace jack@cat.com with your email
git config --global user.name jack@cat.com
{% endcodeblock %}
</div>

Now when you do a `git commit`, git will know who you are. Awesome.

### Run one of these commands to set your editor

<button class="right floated mini ui icon button copy btn" data-clipboard-target="#git-config-editor"><i class="fa fa-clipboard"></i></button>

<div id="git-config-editor">
{% codeblock lang:bash %}
# To use vim
git config --global core.editor vim

# To use emacs
git config --global core.editor emacs

# To use Notepad++ (on Windows)
git config --global core.editor "'C:/Program Files (x86)/Notepad++/notepad++.exe' -multiInst -nosession"
{% endcodeblock %}
</div>

The editor comes into play when you do a `git commit`.

More info: [git-scm.com](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)