# Troubleshooting

## FAQ

#### I'm stuck in an infinite loading screen.
- Make sure the Custom Initfs / Invisibility Fix is installed properly, in both Data and ModData.
- Check for and remove any mods that might be broken.
- Delete ModData from the BF2 game folder (in Frosty, click `Tools > Manage ModData` and click `x` on the pack name), verify the game works fine without mods loaded, then try with mods enabled again.
- Ensure you do not have the in-game video setting `DirectX 12` on.

#### I can’t see any portraits in the main menu and the characters are invisible in matches.
- Make sure the Custom Initfs / Invisibility Fix is installed properly, in both Data and ModData.

#### None of the modded characters, weapons and abilities have names or descriptions.
- That’s due to your game language not being English. Unfortunately, the only way to change it is by reinstalling Battlefront entirely.

#### I only see a black screen when starting the game.
- You will need to unload / reorganize these mod(s). It is not recommended to load extra mods alongside Battlefront Plus.

#### My game isn't starting after Frosty minimizes.
1. Shut down everything related to BF2 and Modding BF2 (Mod Manager, Frosty Fix, Epic, EA Desktop, etc.).
2. Delete your ModData folder from your BF2 game folder.
3. Verify the game launches with no modding programs at all, just the vanilla game.
4. Verify the game launches through Frosty Mod Manager with no mods applied.
5. Verify the game launches with [only this mod](https://www.nexusmods.com/starwarsbattlefront22017/mods/9156?tab=files&file_id=26378) (regardless if it shows or not)

- If step 3 fails, jump to the section "My game isn't opening at all".
- If step 4 or 5 fail, delete your frosty installation, ModData from the game folder, and reinstall Frosty.
- If you reach and complete step 5 without issues, then the issue is not with your game or Frosty Mod Manager. Check any extra programs you are using and ensure they are set up properly.

#### My game isn't opening at all.
- If using the DatapathFix Plugin
  1. Delete the Datapathfix Plugin components from your Frosty `plugins` folder.
  2. In your BF2 game folder, if you have a file called `starwarsbattlefrontii.orig.exe`, delete the edited `starwarsbattlefrontii.exe` and rename `starwarsbattlefrontii.orig.exe` to `starwarsbattlefrontii.exe`.
     Also delete the file called `tmp`.
  3. Once EA Desktop finishes the file validation, try to start the game normally.

- If using Frosty Fix
  1. Open Frosty Fix and click `Disable Mods`.
  2. Type `Environment Variables` in the Windows Search, open the first thing, click on `Environment Variables` in the bottom
      It should look [like this](https://media.discordapp.net/attachments/926914331323543552/926916788711751720/Environment_Variables_1_1_2022_1_16_13_PM.png).
      If you see an entry called `GAME_DATA_DIR`, delete it, then restart your PC. If you don't see it, move on to the next step.

- As a last resort, [repair your game files](https://answers.ea.com/t5/EA-Services-General-Questions/Repair-Game/m-p/5560037#:~:text=1.,that%20opens%20and%2C%20choose%20repair.).


## Error Messages

#### Object reference is not set to an instance of an Object
- Your Frosty setup is incorrect or outdated. Ensure you are following this guide correctly on how to set up Frosty.
**DO NOT OVERWRITE ANY PLUGINS THAT THE FROSTY INSTALL PROVIDES.**

- Remove any mods that are not related to Battlefront Plus. It is not recommended to load extra mods alongside Battlefront Plus.

- Set your system language to English. (Those with the Turkish language, specifically.)

#### Archive contains no installable mods
- Verify that you're actually installing a Frosty Mod Manager mod and not a plugin / some other file.
- Ensure you are using the [latest version of Frosty](https://github.com/CadeEvs/FrostyToolsuite/releases/latest/download/FrostyModManager.zip).
- Install the zip/rar/7z file itself, **not** the contents within it.
- Set your system language to English. (Those with the Turkish language, specifically.)
- [Repair Battlefront II's files](https://answers.ea.com/t5/EA-Services-General-Questions/Repair-Game/m-p/5560037#:~:text=1.,that%20opens%20and%2C%20choose%20repair.).

#### One or more symbolic links could not be created, please restart tool as Administrator.
- In Frosty, go to `Tools > Manage ModData` and delete the pack(s) listed. Then close and re-launch Frosty as Administrator.
- Right-click on FrostyModManager.exe or FrostyEditor.exe. Select Properties. Go to Compatibility. Check Run as Administrator box. Click Apply, then Ok.
- Ensure that the file path to the Battlefront 2 game folder does not have any special characters in it. `( ) @ # $ % ^ & * ! ?` and so on.
- The game must be on an [NTFS or UDF formatted drive](https://www.sony.com/electronics/support/articles/00015779). You cannot mod Battlefront II if the game is on a Hard Drive formatted to FAT32 or exFAT. Either move the game to a Hard Drive that is formatted to NTFS, or reformat a hard drive to NTFS (***NOTE: THIS WILL ERASE EVERYTHING ON THAT DRIVE. TAKE NECESSARY BACKUPS.***).
- Make sure you have [full ownership of the game folder AND Frosty's folder](https://winaero.com/blog/how-to-take-ownership-and-get-full-access-to-files-and-folders-in-windows-10).
- Move Frosty and Battlefront 2 to a different directory or drive (NTFS)
    Make sure Frosty and Battlefront 2 aren't in a location that requires higher privileges such as Program Files/Program Files (x86).

#### Access to the path '`file_path`' is denied. / The requested operation requires elevation / The requested operation requires increased privileges.
- Run Frosty as administrator.
- Right-click on FrostyModManager.exe or FrostyEditor.exe. Select Properties. Go to Compatibility. Check Run as Administrator box. Click Apply, then Ok.

#### An item with the same key has already been added. / The given key was not present in the dictionary.
- Press the Windows Key and R together. Type `AppData` and press Enter. From there, navigate to `Local\Frosty` and delete `manager_config.json`.
- Delete the `Cache` folder from your Frosty folder.
- [Repair Battlefront II's files](https://answers.ea.com/t5/EA-Services-General-Questions/Repair-Game/m-p/5560037#:~:text=1.,that%20opens%20and%2C%20choose%20repair.).

#### Index was out of range. Must be non-negative and less than the size of the collection.
- Repair your Battlefront II game files.
- Delete the ModData folder from within the Battlefront II game folder.
- Delete the entirety of Frosty Mod Manager, including the manager_config.json file in AppData\Local\Frosty.
- Reinstall Frosty Mod Manager and the mods.

#### Could not load file or assembly '`file_name`' or one of its dependencies. The system cannot find the file specified. / Unable to load DLL 'ThirdParty/`file_name`.dll': The specified module could not be found.
- Check that you extracted EVERYTHING from the Frosty download zip file.
    ESPECIALLY the ThirdParty folder!

#### Empty path name is not legal
- Delete your ModData folder from your game directory.
- In your Battlefront folder, go to Data, delete `layout.toc` and then [Repair Battlefront II's files](https://answers.ea.com/t5/EA-Services-General-Questions/Repair-Game/m-p/5560037#:~:text=1.,that%20opens%20and%2C%20choose%20repair.).

## Incompatible Mods
- Battlefront 2022[^1]
- Battlefront Expanded[^1]
- Ortho's Clones
- Rebel Alliance Overhaul

[^1]: Large content modpacks are not compatible with each other.
