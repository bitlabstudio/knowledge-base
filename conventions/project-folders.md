# Conventions > Project Folders

We all work on many projects and we often copy and paste snippets between
ourselves on Slack. It is beneficial for our internal communication when we
all have similar project structures on our machines.

When you work on our own projects, create a folder in `~/Projects` with that
project name, i.e. `~/Projects/bitlabstudio/`

Then clone the project into a `src` folder inside your project folder, i.e.
`~/Projects/bitlabstudio/src/`

This is mainly due to the way we handle our Django projects. In the very rare
case when you want to run `./manage.py collectstatic`, you need a folder
_outside_ your git-root where Django can copy the static and media files. We
like to "go one folder up", so that's why we need to have the git repo inside
another parent fodler and not just inside `~/Projects`.
