# Installation

## Kyber

### Downloads

[Frosty Mod Manager](https://github.com/CadeEvs/FrostyToolsuite/releases/latest/download/FrostyModManager.zip){ .md-button }
[Battlefront Plus - Kyber](https://www.nexusmods.com/starwarsbattlefront22017/mods/7592?tab=files){ .md-button target="_blank" }
[KyberBrowser](https://github.com/Dyvinia/KyberBrowser/releases/latest){ .md-button target="_blank" }

### Install

#### Installing Mods in Frosty

1. Extract all files from the downloaded `FrostyModManager.zip` file into a new folder.

2. Launch the `FrostyModManager.exe` application. **Most users will need to run it as administrator**.

3. Select STAR WARS Battlefront II. 
    (If you do not see it, click the "Scan for games" button on the bottom left corner of the window, or click "New" and manually locate Battlefront II’s main exe file)

4. In Frosty Mod Manager, click `Add Mod(s)` in the upper left corner and select the downloaded Battlefront Plus `.zip` file.[^1]

5. **Battlefront Plus** now appears in the left-hand column of Frosty. Add them to your load order in the right-hand column by clicking `Apply Mod(s)`.

6. Setup your modlist with other mods if you choose, and then click `Launch` to generate the final ModData. This process takes a few minutes and can be very CPU intensive for your device.

    a. *Remember the name of the Pack that you have selected*[^2].

#### Setting up KyberBrowser & the Invisibility Fix

The invisibility fix can either be applied using `KyberBrowser` or through a [Plugin](#betterinitfs).

1. Launch the `KyberBrowser` application.

2. Click on the settings wheel[^3] in the lower right corner.

3. In the dropdown in the lower right corner, select the pack you generated earlier, press `Install InitfsFix`, and click on `OK`.

    a. If you own a Battlefront copy from Epic Games, also select `Datapath Fix` as the Launch Fix. 

4. Close the Settings window.


#### Using KyberBrowser

##### To Join a Server:

- Click on a server, select the correct pack in the dropdown, and press `PLAY`

##### To Create & Host a Server:

- Click on the `+` button[^4] in the lower right corner, fill in the information, select the correct pack in the dropdown, and press `PLAY`

## Instant Action

### Downloads

[Frosty Mod Manager](https://github.com/CadeEvs/FrostyToolsuite/releases/latest/download/FrostyModManager.zip){ .md-button }
[Battlefront Plus - IAO XL](https://www.nexusmods.com/starwarsbattlefront22017/mods/7592?tab=files){ .md-button target="_blank" }
[BetterInitfs](https://www.nexusmods.com/starwarsbattlefront22017/mods/9775){ .md-button target="_blank" }

### Install

#### Installing Mods in Frosty

1. Extract all files from the downloaded `FrostyModManager.zip` file into a new folder.

2. Launch the `FrostyModManager.exe` application. **Most users will need to run it as administrator**.

3. Select STAR WARS Battlefront II.
    (If you do not see it, click the "Scan for games" button on the bottom left corner of the window, or click "New" and manually locate Battlefront II’s main exe file)

4. In Frosty Mod Manager, click `Add Mod(s)` in the upper left corner and select the downloaded Battlefront Plus and IAO XL `.zip` files. You do not need to unzip/open downloaded mods.

5. **Battlefront Plus** and **IAO XL** now appear in the left-hand column of Frosty. Add them to your load order in the right-hand column by clicking `Apply Mod(s)`.

6. **IAO XL** is placed in a way so that it has a lower priority[^5]

7. Now press `Launch` to start the game. The first time, and after every change to your load order, this process takes a few minutes and can be very CPU intensive for your device.

<div id="betterinitfs"></div>

#### Installing BetterInitfs / Invisibility Fix

1. Download the latest version of [BetterInitfs](https://www.nexusmods.com/starwarsbattlefront22017/mods/9775?tab=files){ target="_blank" }.

2. Unzip the downloaded `.zip` file and copy the `BetterInitfsPlugin.dll` file into the `Plugins` folder.

3. Launch Frosty Mod Manager.

4. Click on the `Tools` menu at the top and select `BetterInitfs`.

4. Select desired options and the ModData folder in the dropdown and click `Save`.

    - **InvisibilityFix** - Fixes invisibility issues with large modpacks, REQUIRED for Battlefront+

    - **Full Resolution Reflections** - Screen space reflections will now be rendered at full resolution instead of half resolution, improving visual quality. 

    - **Full Resolution Depth of Field** - Depth of Field effects (used for the background in No Holograms Remastered) will now be rendered at full resolution instead of half resolution, improving visual quality. 

    - **Disable HDR** - Prevents HDR from being enabled in your game as the ingame setting may not work for some people.

![BetterInitfsImage](https://staticdelivery.nexusmods.com/mods/2229/images/9775/9775-1697418506-48801927.png)


[^1]: You do not need to unzip/open downloaded mods

[^2]: Shown to the left of the `Launch` button

[^3]: Keyboard Shortcut: ++f12++

[^4]: Keyboard Shortcut: ++ctrl+n++

[^5]: With Frosty set to `List` *(default)* it is placed above Battlefront Plus, with `Priority` it is placed below.