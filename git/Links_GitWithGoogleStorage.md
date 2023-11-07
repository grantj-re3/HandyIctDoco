# Can we store a git repo on Google Drive?

Can we store a git repository or git remote on Google Drive or other Google infrastructure?

1. [Google Cloud | Adding a repository as a remote | 2023](https://cloud.google.com/source-repositories/docs/adding-repositories-as-remotes)
   - You can use Cloud Source Repositories to add a Google Cloud repository as a remote to a local Git repository
   - This appears to be the most reliable method. This appears to be from a reliable source.

1. [Stack Overflow | Is it dangerous to put a Git directory in a drive sync tool? | 2021](https://stackoverflow.com/questions/69056041/is-it-dangerous-to-put-a-git-directory-in-a-drive-sync-tool)
   - Yes, it is dangerous

1. [Stack Overflow | How to use git with google drive? | 2022](https://stackoverflow.com/questions/73886131/how-to-use-git-with-on-google-drive)
   - Interesting, but method does not appear to be authorised by either Git or Google
   - You may prefer to work with Google Drive, but it will almost certainly corrupt your repository eventually...
     The Git FAQ will be updated at some point to mention this explicitly
   - It is safe to store a bundle file (created with git bundle) or an archive of the repository (preferably tar, not zip)
     using a cloud syncing service if necessary

1. [Medium; techstreams; Laura Taylor | Git + Google Drive = Simple Git Host | 2017](https://techstreams.medium.com/git-google-drive-simple-git-host-3a84db4fc1fd)
   - Interesting, but method does not appear to be authorised by either Git or Google

