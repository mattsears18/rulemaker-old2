# Initialization scripts

All files in `./init_scripts` get mounted to `/docker-entrypoint-initdb.d/` in the docker db. All `.SQL` and `.SH` scripts in this folder are run automatically when the postgres database is first created.

@see
https://hub.docker.com/_/postgres => Initialization scripts

**Warning:** scripts in `/docker-entrypoint-initdb.d` are only run if you start the container with a data directory that is empty; any pre-existing database will be left untouched on container startup.
