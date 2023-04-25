# Gamecube Leanlack Launcher

## Introduction:
As a big fan of Gamecube, UI design and coding this was a side project of mine to combine areas of enjoyment all into one.  

## Requirements:
- python installed on your system
- npm installed on your system
- basic knowledge of shell/command line
- Dolphin installed on your computer
- physical copies of any games you plan on playing

## Windows Exception
- Download Dolphin and extract all file contents into the gamecube_leanback_launcer_main folder
- If the Dolphin.exe and .dll files are not in this directory it will not work

## To start the application:
- npm install
- place your backup game files to the backup_games folder
- npm start
- open your browser and go to localhost:3210

## How to:
- the interface navigates with the left, down, right, up and enter key.  If you want to utilize a controller you will need to use an app like Enjoyable for the controller to emulate key strokes

## Limitations:
-  when adding new backup games you need to close the instance (CMD + C) and afterward do npm start

## Tasks still to do:
- expand the gamelist.json - Currently only 222 games are indexed to render boxart, logos and gameplay (referenced in data/gameslist.json)


# *This repository is not intended in any way to endorse the use of unauthorized ROMS.  It's sole intent is for those who have backed up their physical media and wish to have an alternative user experience when loading these files 