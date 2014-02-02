Git documentation
=================

Web site
- http://git-scm.com/

Pro Git, Scott Chacon. July 29, 2009
- http://git-scm.com/book

Books
- http://git-scm.com/documentation/external-links

GitHub
- https://github.com/

Creating a Git repository at GitHub
===================================

Sign up for GitHub at https://github.com/

## Setup git

https://help.github.com/articles/set-up-git

### At linux prompt

- user.name & user.email simply allow attribution of commits.
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
  - Add a (fake) email which matches "git config --global user.email": GITHUB_USER@github.fake
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
- Remove/update any sensitive config info (eg. usernames, passwords, private DNS names/IPs).

Stage the files (ie. add files to appear in the repo)
```
git add INSTALL LICENSE README bin/magic_script.sh
git ls-files
git commit
```

Use the label "origin" instead of this long URL
- I am using git version 1.7.1 on RHEL6.4, hence cannot cache github username/password.
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

## git diff

git diff with diagram at
http://stackoverflow.com/questions/8452820/how-to-compare-the-working-tree-with-a-commit
```
git diff --cached FILENAME
git diff FILENAME
git diff HEAD FILENAME
git diff --name-only
```

## git commit
```
git commit -a
```

## git push
```
git push -u origin master
```

---

## git pull
Refresh from repo AND OVERWRITE ANY LOCAL CHANGES
```
git pull	# No warning given when overwriting
```

## git tag

Create a lightweight or annotated tag (eg. for a version number or release candidate)
```
git tag
git log --pretty=oneline
git tag TAG_NAME [COMMIT_CHECKSUM]		# Light weight tag
git tag -a TAG_NAME [-m TAG_MSG] [COMMIT_CHECKSUM]	# Annotated tag (allows an associated message)
```

Delete a tag from the local repo
(not advisable if you have already pushed the tag to your repo)
```
git tag -d tagname
```

Delete a tag from the remote repo (eg. GitHub)
```
git push --delete origin tagname
```

Push specified tag or all tags
```
git push origin [TAG_NAME]
git push origin --tags
```

