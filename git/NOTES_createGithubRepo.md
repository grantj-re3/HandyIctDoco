Git documentation
=================

# Web site
http://git-scm.com/

# Pro Git, Scott Chacon. July 29, 2009
http://git-scm.com/book

# Books
http://git-scm.com/documentation/external-links

# GitHub
https://github.com/

Creating a Git repository at GitHub
===================================

Github project name: myrepo

Sign up for GitHub at https://github.com/

SET UP GIT
https://help.github.com/articles/set-up-git

### At linux prompt

# user.name & user.email simply allow attribution of commits.
# --global results in updates to user config at ~/.gitconfig
git config --global user.name "GITHUB_USER"
git config --global user.email "GITHUB_USER@github.fake"

# Git version is 1.7.1 on RHEL6.4, hence cannot cache github username/password.

git config --global core.editor vi
git config --global merge.tool vimdiff

# View the config
git config --list

CREATE A REPO
https://help.github.com/articles/create-a-repo

### At web browser

  Repo name: GITHUB_USER / myrepo
  Added short description
  Do not add any files (eg. README.md) unless you:
  - are happy for your REAL email address to be exposed and
  - are happy to perform a "git pull ..." to merge with local commits.
  Note that the Github repository *description* is not stored in a repo
  file (ie. not visible via 'git ls-files') hence CAN be modified
  without revealing your REAL email address.

  Email addresses:
  - Keep real/valid email address hidden.
  - Add a (fake) email which matches "git config --global user.email": GITHUB_USER@github.fake
  After clicking "Create repository" I got page including:
    We recommend every repository include a README, LICENSE, and .gitignore. 
	...
    git remote add origin https://github.com/GITHUB_USER/myrepo.git
    git push -u origin master

### At linux prompt

cd
mkdir -p github/myrepo
cd github/myrepo
git init

# Copy dirs/files 

# - Delete any dirs/files which we do not want in the repo
# - Remove/update any sensitive config info (eg. usernames, passwords, private DNS names/IPs).
#   In this case, update PARENT_IN_URL_CSV

# Stage the files (ie. add files to appear in the repo)
git add INSTALL LICENSE README bin/magic_script.sh
git ls-files
git commit

# Use the label "origin" instead of this long URL
### IMPORTANT TO SPECIFY https://GITHUB_USER@... in order to be prompted for password
# (Later on you can switch to a method which requires no password or
# a password at less frequent intervals if you wish.)
git remote add origin https://GITHUB_USER@github.com/GITHUB_USER/myrepo.git

[ git pull origin master		# Prompts for password; merge with README.md etc created at website ]
git push -u origin master	# Prompts for password; success

# Alternatively use:
git push -u https://GITHUB_USER@github.com/GITHUB_USER/myrepo.git master

---

# After updating some files
git diff --name-only
git diff FILENAME

# git diff with diagram at
# http://stackoverflow.com/questions/8452820/how-to-compare-the-working-tree-with-a-commit
git diff --cached FILENAME
git diff FILENAME
git diff HEAD FILENAME

git commit -a
git push -u origin master

---

# Refresh from repo AND OVERWRITE ANY LOCAL CHANGES
git pull	# No warning given when overwriting

# Create a lightweight or annotated tag
git tag
git log --pretty=oneline
git tag TAG_NAME [COMMIT_CHECKSUM]		# Light weight tag
git tag -a TAG_NAME [-m TAG_MSG] [COMMIT_CHECKSUM]	# Annotated tag (allows an associated message)

# Delete a tag from the local repo
# (not advisable if you have already pushed the
# tag to your repo)
git tag -d tagname
# Delte a tag from the remote repo (eg. github)
git push --delete origin tagname

# Push specified tag or all tags
git push origin [TAG_NAME]
git push origin --tags

