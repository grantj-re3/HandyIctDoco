Basic git documentation
=======================

Git web site
- http://git-scm.com/

GitHub
- https://github.com/
- https://help.github.com/

Book: Pro Git, Scott Chacon (July 2009).
Topics include basics, branching, workflows, servers and other areas.
- http://git-scm.com/book

Other books
- http://git-scm.com/documentation/external-links

Creating a Git repository at GitHub
===================================

Sign up for GitHub at https://github.com/

## Setup git

https://help.github.com/articles/set-up-git

### At linux prompt

- I chose to keep my real email address hidden (see
  https://help.github.com/articles/keeping-your-email-address-private) 
- user.name and user.email simply allow attribution of commits... the
  email address does not have to be real/valid
- the --global option results in updates to the user config at ~/.gitconfig
```
git config --global user.name "GITHUB_USER"
git config --global user.email "GITHUB_USER@github.fake"

git config --global core.editor vi
git config --global merge.tool vimdiff
```

View the config
```
git config --list
```

## Create a repo
- https://help.github.com/articles/create-a-repo

### At web browser

- Repo name: GITHUB_USER / myrepo
- Add a short description
- Do not add any files (eg. README.md) unless you:
  - are happy for your REAL email address to be exposed and
  - are happy to perform a "git pull ..." to merge with local commits.
- Note that the Github repository *description* is not stored in a repo
  file (ie. not visible via 'git ls-files') hence *can* be modified
  without revealing your *real* email address.

- Email addresses:
  - Keep real/valid email address hidden.
  - Add a (fake) email which matches:
```
    git config --global user.email "GITHUB_USER@github.fake"
```
- After clicking "Create repository" you get page including:
```
    We recommend every repository include a README, LICENSE, and .gitignore. 
    ...
    git remote add origin https://github.com/GITHUB_USER/myrepo.git
    git push -u origin master
```

### At linux prompt
```
cd
mkdir -p github/myrepo
cd github/myrepo
git init
```

Copy dirs/files 

- Delete any dirs/files which we do not want in the repo
- Remove/update any sensitive config info (eg. usernames, passwords,
  private DNS names/IPs).

Stage the files (ie. add files to appear in the repo)
```
git add INSTALL LICENSE README bin/magic_script.sh
git ls-files
git commit
```

Use the label "origin" instead of this long URL
- I am using git version 1.7.1 on RHEL6.4, hence unable to cache the
  github username/password.
- Specify https://GITHUB_USER@... in order to be prompted for password
```
git remote add origin https://GITHUB_USER@github.com/GITHUB_USER/myrepo.git

[ git pull origin master   # Prompts for password; merge with files already at website repo ]
git push -u origin master  # Prompts for password

# Alternatively use:
git push -u https://GITHUB_USER@github.com/GITHUB_USER/myrepo.git master
```

Basic maintenance
=================

## git clone
```
git clone https://github.com/GITHUB_USER/myrepo.git
```

## git remote
For git version 1.7.1, if I clone one of my repos at Github then
later wish to perform a push from that cloned working tree, I
first need to change my https URL config to prompt for a password
as follows.
```
# View the current setting
$ git remote -v
  origin https://github.com/GITHUB_USER/myrepo.git (...)

$ git remote set-url origin https://GITHUB_USER@github.com/GITHUB_USER/myrepo.git
# View the new setting
$ git remote -v
  origin https://GITHUB_USER@github.com/GITHUB_USER/myrepo.git (...)
```

This is equivalent to:
```
$ git remote rm origin
$ git remote add origin https://GITHUB_USER@github.com/GITHUB_USER/myrepo.git
```


## git diff

git diff with diagram at
http://stackoverflow.com/questions/8452820/how-to-compare-the-working-tree-with-a-commit
```
git diff --cached FILENAME
git diff FILENAME
git diff HEAD FILENAME
git diff --name-only
```

## git status
```
git status
```

## git commit
```
git commit -a
```

## git push
```
git push -u origin master
```

## git pull
Synchronise/refresh from a remote repo **and overwrite any local changes**
(assuming you have only one local branch and are tracking one remote branch).
A git pull does a fetch then merge from a remote branch into your local branch.
Existing **untracked** files are not overwritten.
```
git pull	# No warning given when overwriting/merging
```

## git log
```
git log
git log --pretty=oneline
```

If you add an alias (in ~/.gitconfig) as given by the command below
(based on the entry by Palesz at
http://stackoverflow.com/questions/278192/view-the-change-history-of-a-file-using-git-versioning)
```
git config --global alias.prettylog "log --all --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%ci) %C(bold blue)<%an>%Creset' --abbrev-commit"
```
then using that alias (see below) will give you a nicely formatted log
with one line per event.
```
git prettylog
```

## git tag

Create a lightweight or annotated tag (eg. for a version number or release
candidate)
```
git tag
git log --pretty=oneline
git tag TAG_NAME [COMMIT_CHECKSUM]		# Light weight tag
git tag -a TAG_NAME [-m TAG_MSG] [COMMIT_CHECKSUM]	# Annotated tag (allows an associated message)
```

Push specified tag or all tags to remote repo
```
git push origin [TAG_NAME]
git push origin --tags
```

Delete a tag from the local repo
(not advisable if you have already pushed the tag to
your remote repo and others may have used it)
```
git tag -d tagname
```

Delete a tag from the remote repo (eg. GitHub)
```
git push --delete origin tagname
```

Git branching and merging
-------------------------

Assuming you are not on the master branch and have no outstanding work to commit
```
git checkout master
```

Create a new branch and switch to it
```
git checkout -b newfeature
...
git status
git commit [-a]
```

Merge the newfeature branch into the master branch
```
git checkout master
git merge newfeature

# If required: after manually resolving merge conflicts, complete the merge with:
git commit
```

Optionally delete the pointer to the newfeature branch after the successful merger
```
git branch -d newfeature
```

Useful local repo commands
```
git branch
git branch -v
git branch --merged
git branch --no-merged
```

Useful remote repo commands
```
# Save the "newfeature" branch to your remote repo "origin"
git push -u origin newfeature

# At a later time, the branch can be checked out...
git checkout -b newfeature origin/newfeature
# ... or merged
git merge origin/newfeature
```

Git servers
-----------
## Host your own
I imagine many of these solutions may work well for small teams within
an intranet, but for multiple teams or internet hosting solutions, you
may need one of the larger packages which include fine grain access
control (ACLs)
- See above book, Pro Git. http://git-scm.com/book/en/Git-on-the-Server

gitolite - perl based solution with ACLs
- http://gitolite.com/gitolite/index.html
- https://github.com/sitaramc/gitolite
- http://gitolite.com/gitolite/g2/nonroot.html
- https://sites.google.com/site/senawario/home/gitolite-tutorial

Interesting article "Running git-daemon under an unprivileged user"
- https://blog.flameeyes.eu/2008/09/running-git-daemon-under-an-unprivileged-user

## Hosting
Github - an excellent hosting service including free plans. (At the time
of writing (Feb 2014) I cannot spot any special plans for academic users
eg. including private repos.)
- https://github.com/
- https://github.com/pricing

Bitbucket - I have not used this hosting service. It includes free
plans. (It has an unlimited academic plan including private repos. 
Eg. may be useful for collaborating using LaTeX/TeX documents in
addition to conventional software collaboration.)
- https://bitbucket.org/plans
- https://www.atlassian.com/software/views/bitbucket-academic-license.jsp

