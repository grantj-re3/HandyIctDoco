Basic git documentation
=======================

Git web site
- http://git-scm.com/

Book: Pro Git, Scott Chacon (July 2009).
Topics include basics, branching, workflows, servers and other areas.
- http://git-scm.com/book

GitHub
- https://github.com/
- https://help.github.com/
- https://guides.github.com/features/mastering-markdown/
- https://guides.github.com/activities/hello-world/
- https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting
  * https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-a-permanent-link-to-a-code-snippet
  * https://docs.github.com/en/repositories/working-with-files/using-files/getting-permanent-links-to-files


GitHub search
- https://www.freecodecamp.org/news/github-search-tips/
- https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics
  * https://github.com/topics/
- https://github.com/features/code-search

References to other books and doco
- http://git-scm.com/documentation/external-links
- http://gitready.com/ (eg. http://gitready.com/beginner/2009/01/25/branching-and-merging.html)
- http://ftp.newartisans.com/pub/git.from.bottom.up.pdf
- https://yangsu.github.io/pull-request-tutorial/

Git commit messages (best practice)
- https://github.com/git/git/commit/c2c349a15c0430a2ef9f858d69d095a00693379c says:
  * begin the commit message with a single short (no more than 50 characters) line
    summarizing the change, followed by a blank line and then a more thorough description
- https://git-scm.com/docs/git-commit says:
  * The text up to the first blank line in a commit message is treated as the commit title,
    and that title is used throughout Git. For example, git-format-patch...
  * we encourage that the commit log messages are encoded in UTF-8...
- https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html re the
  "50/72 Formatting Style" says:
  * Write your commit message in the imperative: "Fix bug" and not "Fixed bug" or "Fixes bug"
  * Further paragraphs come after blank lines... Bullet points are okay...
- https://stackoverflow.com/questions/2290016/git-commit-messages-50-72-formatting says:
  * [This opinion may not be a widely held view.] For the message itself newlines indicate
    something meaningful in the data. A single newline indicates a start/break in a list
    [e.g. bullet points] and a double newline indicates a new thought/idea [e.g. a paragraph]
- https://gist.github.com/robertpainsi/b632364184e70900af4ab688decf6f53 suggests:
  * Rules for a great git commit message style
  * Information in commit messages


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
git diff --staged|--cached [FILENAME]
git diff [FILENAME]
git diff COMMIT1 COMMIT2 [FILENAME]
git diff HEAD FILENAME
git diff --name-only
```

## git status
```
git status
```

## git commit
```
git commit		# Commit files in your staged area
git commit -v		# Include diff output within editor (as a reminder of changes)
git commit -a		# Automatically add/rm indexed files then commit
git commit --amend	# Change your last commit with a new message and/or staged files
```

See *Git commit messages (best practice)* information in the opening section above.


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
=========================

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

# Delete the "newfeature" branch from your remote repo "origin"
git push origin :newfeature	# Scary because it doesn't look like a delete!

```

## Undoing a successful, non-FF, non-pushed merge

```
# Backup repo
cd parent_of_myrepo; tar cvzf myrepo.tgz myrepo; cd myrepo

git reflog
git reset --hard HEAD@{1}
# or
git reset --hard HEAD^
```

## Workflows

- See Pro Git book (above), http://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows
- http://nvie.com/posts/a-successful-git-branching-model/


Rewriting git history
=====================

1. [GitHub Docs | Changing a commit message](https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/changing-a-commit-message)
   - If you run the *git rebase ...* command and choose *reword*
     or *squash* (and probably other commands) you will be given
     the opportunity to edit your previous commit message(s)
     **including any multi-line messages** because a new text editor
     will automatically open for each new commit

1. [Scott Chacon and Ben Straub | Pro Git 2nd Ed | Git Tools - Rewriting History | 2014](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History)
   - Changing the Last Commit
   - Changing Multiple Commit Messages
   - Reordering Commits
   - Squashing Commits
   - Splitting a Commit
   - Deleting a commit
   - The Nuclear Option: filter-branch  [Don't use this, use [*git-filter-repo*](https://github.com/newren/git-filter-repo) instead]

1. [CloudBees - Pedro Barbosa | Git Squash: How to Condense Your Commit History | 2021](https://www.cloudbees.com/blog/git-squash-how-to-condense-your-commit-history)
   - git rebase -i HEAD~N   # Interactively review the last N commits
   - Your configured text editor will open
   - All commits are organized from *older to newer, top-down*
   - Keep in mind that you need at least one commit to be picked before
     the one you want to squash in order to be able to do so, which
     means *you can’t choose to squash the first one*
   - I strongly advise against drops and deleting lines... and
     changing the order of the commits. Save the file and quit
     the text editor.
   - A new text editor will appear. In this one, you’ll need to
     write the messages for the new commits.

## Deleting a git commit

This section describes how to undo (or delete or remove) your last git
commit so it is no longer visible in your local or remote git-history.

This is generally regarded as bad practice (and unfriendly) if your
remote repo is public and it is possible that someone has downloaded
it since your unwanted commit (hence may have made changes based on
the info you are removing).  Hence it should only be carried out in
extreme/rare circumstances (eg. the commit contains sensitive info).

For similar reasons, it is also best carried out before (or very soon
after) the commit is pushed to a public repo.
 
### Assumptions

This example assumes:
- The second-last commit contains sensitive info
- The last commit fixes the issue (ie. removes or replaces the sensitive info)

Hence you are happy to "merge" (ie. squash) the last and second-last
commits (thereby hiding the second-last commit).
 
### Procedure

- Backup your local repo
```
tar cvzf myrepo.tgz myrepo
```

- Interactively update your local repo
```
git rebase -i HEAD~2	# Allow editing of the last 2 commits
```

- Note that commits will be listed with the newest at the bottom (as
  opposed to the "git log" command which lists the newest at the top).
  You should replace:
```
  pick COMMIT-i Older and unwanted commit
  pick COMMIT-j Newer and wanted commit
```
with:
```
  pick COMMIT-i Older and unwanted commit
  squash COMMIT-j Newer and wanted commit
  [Exit editor]
  Enter new commit message
  [Exit editor]
```

- Check COMMIT-i is now missing from your local repo
```
git status
git log		# Or: git prettylog
```

- If required, update your remote repo (which is undesirable/unfriendly
  for a public repo)
```
git push --force origin master
```

- Check COMMIT-i is now missing from your local repo and your remote repo
  is synchronised with it (ie. no longer stores a fork/branch of the local
  repo)
```
git status
git log		# Or: git prettylog
```


Converting a Git repository sub-folder into a new git repository 
================================================================

- [GitHub | Splitting a subfolder out into a new repository](https://docs.github.com/en/get-started/using-git/splitting-a-subfolder-out-into-a-new-repository?platform=linux)
  * Preserves commit history
  * Uses the [git-filter-repo](https://github.com/newren/git-filter-repo) tool;
    see the [manual](https://htmlpreview.github.io/?https://github.com/newren/git-filter-repo/blob/docs/html/git-filter-repo.html)
- Do ***not*** use the [git-filter-branch](https://git-scm.com/docs/git-filter-branch) tool

## Variations

Keep the folder FOLDER-NAME (as per the link above)
```
$ git filter-repo --path FOLDER-NAME/
```

Keep several files and folders
```
$ git filter-repo --path README.md --path FOLDER-NAME/ --path OTHER-FOLDER/SUB-FOLDER/
```

Keep the folder FOLDER-NAME and make it the toplevel folder
```
# Shortcut
$ git filter-repo --subdirectory-filter FOLDER-NAME/

# Alternative equivalent
$ git filter-repo --path FOLDER-NAME/ --path-rename FOLDER-NAME/:
```

### Gotcha

If you rename a folder in the *old* git repository, then later convert the new
folder name into a *new* git repository using the command below, it appears you
will lose any history associated with folder content *before* the folder was renamed.
```
$ git filter-repo --subdirectory-filter PREVIOUSLY-RENAMED-FOLDER/
```


Git servers
===========
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

GitLab Community Edition - ruby based solution with ACLs
- https://gitlab.com/gitlab-org/gitlab-ce
- https://about.gitlab.com/installation/ce-or-ee/
- https://en.wikipedia.org/wiki/GitLab

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

