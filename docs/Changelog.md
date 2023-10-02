# Changelog

## Battlefront+ v9
Delaying majority of new content to V10, pushing this forward with massive QOL changes.  

- Moving to require Frosty Mod Manager 1.0.6.3.
    - Significantly faster moddata generation.
    - Enables the use of duped blueprint bundles.

- Removed ship phase from Supremacy.
- Fixed crashing on Ewok Hunt.
- Duped blueprint bundles for all custom characters and appearances wherever possible.
- Increased the BufferSize values in the StreamPool sets in the AudioSystem file.
    - Restores character preview sounds at the frontend.

#### Balance & QOL

- Fixed character preview sounds at the frontend menu by increasing certain resource limitations.

- **Troopers**
    - Added toggleable “Alert Carry” feature.
        - Open the abilities preview menu while holding two-handed weapons to enter a ‘gun down’ animation. All actions except moving, sprinting, jumping, or crouching/standing will take the player out of “Alert Carry.”
    - 773-Firepuncher
        - Improved effects.
    - Sonic Blaster
        - Increased blast damage.
    - Acid Launcher and Barrage
        - Added zoom-in.
    - Ping
        - Sound effect plays as a UX sound instead of in-world.

- **Reinforcements**
    - Clone Engineer
        - Decreased max health.
        - Reduced delay before health regeneration.
        - New DETPACK replaces DETONITE CHARGE.
            - A powerful explosive charge, from days of old, which can be manually detonated at any time.

    - Clone Flametrooper
        - Increased bonus health granted by PYROTECHNICS.

    - Clone Sharpshooter
        - Improved 773-FIREPUNCHER effects.

    - Death Trooper
        - MARKSMAN RUSH
            - Increased damage.

    - Guavian Security
        - JND-41
            - Increased damage.
        - SUPPLY
            - Improved recharge time.

    - Gungan Warrior
        - GUNGAN STAFF now correctly displays name and icon at the character selection menu.
        - Reworked ability/blueprint setup for the GUNGAN STAFF: functions and plays significantly better.
        - New and improved GUNGAN STAFF swing effects, now only play while attacking.
        - Added autoplayers to Naboo.

    - Honor Guard
        - Fixed several errors in the ability descriptions and tooltips.
        - In the abilities menu, the Honor Guard’s SENTINEL CLASS boost will now display.
        - Added UI tooltip for when the Honor Guard’s Sentinel boost is active, with a 60-second cooldown to prevent spam.
        - A280-CFE
            - Stats are equal to the standard A280-CFE with Ion Shot.
            - Swapped the crosshair.
        - HONORABLE DISCHARGE
            - Radius increases if friendly heroes are nearby.

    - MagnaGuard Protector
        - Increased max health.
        - New and improved ELECTROSTAFF swing effects, now only play while attacking.
        - New sounds for DROID RAGE and COMBAT ACCELERATION.
        - Fixed broken skin selection.
        - In the abilities menu, the SUPERIOR PROGRAMMING ability will now display.

    - Nikto Smuggler
        - DUAL DT-29S
            - Reduced base accuracy and increased recoil per shot.
            - Changed to semi-automatic fire mode.
        - New DUAL SHOT ability replaces POWER SHOT.
            - Temporarily fire both blasters at once, drastically increasing potential damage per second, at the cost of recoil and accuracy.

    - Rebel Pilot
        - Improved R5-D4 ability icon.

    - Shock Trooper
        - Fixed several errors in the ability descriptions and tooltips.
        - In the abilities menu, the Shock Trooper’s SENTINEL CLASS boost will now display.
        - Added UI tooltip for when the Shock Trooper’s Sentinel boost is active, with a 60-second cooldown to prevent spam.
        - SHOCK LAUNCHER
            - Added zoom-in.
        - DISRUPTION
            - Grants supercooling if friendly heroes are nearby.

    - Wookiee Warrior
        - Changed the melee animations and mobility state to Chewbacca’s.
        - SLAM
            - The radius of SLAM increases when taking damage, indicated by the “Wookiee Rage” meter. Using the ability will reset the meter’s progress.

- **Heroes**
    - Ahsoka
        - Fixed positioning of the left lightsaber.
        - Corrected the color of the Padawan skin’s left lightsaber blade to be green-yellow.

    - Cal Kestis
        - Increased max health.

    - Jango Fett
        - WRIST FLAMETHROWER
            - Reworked ability/blueprint setup for WRIST FLAMETHROWER, making it function significantly better.
            - New and improved WRIST FLAMETHROWER effects.
            - Autoplayers can now use WRIST FLAMETHROWER.
            - Increased recharge time.
        - SABERDART
            - Fixed an issue wherein firing the SABERDART generated heat for the DUAL WESTAR-34S.

#### New Blasters
- Assault
    - Zersium Rifle: *Alternates randomly between 3 stat presets whenever the trigger is pulled.*
        - Attachments: Gunslinger & Escape Artist

- Officer 
    - BG-38: *Basic, medium power blaster pistol. Statistically identical to the A180 Pistol sidearm.*
        - Attachments: Light Shot & Focused Fire

#### New Appearances
- Cal Kestis
    - Purple Lightsaber: Scrapper appearance with purple-bladed sabers.

- Count Dooku
    - Duelist: Default appearance without cape.

- Luke Skywalker
    - Duel: 2015 appearance.

- Jango Fett
    - Z-6 Jetpack: First appearance in AOTC.

## Battlefront+ v8.6
- Stat adjustments to the Baragwin Repeater, M-45, and SE-14r (Explosive Shot)
- Adjusted the position of the Sidearm button and fixed the frontend weapons menu
- Added a TIE Pilot appearance for the Imperial Officer
- Incorporated Chucky's "Improved Scarif Rebels" to give the Heavy and Specialist Pathfinders a more distinctive appearance from the Assault
- The collection for use with IAO (XL) now correctly displays the red "Modded" rarity for custom skins

## Battlefront+ v8
- Re-divided into dedicated PM and IA versions, greatly increasing stability when used with Instant Action Overhaul XL
- Added 7 new blasters:
    - Assault: DH-17R, T-12
    - Heavy: Baragwin Repeater
    - Officer: DT-12, HF-94, SE-14r
    - Specialist: DC-17m Sniper
- Added location ping button to the troopers
- Added new sidearm menu, allowing the Assault, Heavy, and Specialist to choose from a selection of pistols available to them.
- Added various "Support Binoculars" under the sidearm menu to the Officer
- Moved secondary weapons off the pickup category, fixing a longstanding issue with GA objective weapons removing the sidearm until the player died
- Updated keybindings menu to reflect new options for Ping and Sidearm
- Unrestricted gender and alien options for Rebels and Resistance
- Added female Imperial Officer options for Field and Naval appearances
- Added 91st Recon Corps (P2), 13th Battalion, 187th Battalion, 332nd Company, Clone Cadet, Lightning Squadron, Pilot (P1), Pilot (P2), Desert Special Ops, Stealth Special Ops for Galactic Republic
- Added Dressellian and Ishi Tib head options for Rebels and Resistance
- Added Star Tours for Imperial Jumptrooper
- Added Elite Trooper, Tech Trooper, and Executioner Trooper for First Order
- New swing FX for Gungan Warrior, Magnaguard Protector, and Riot Control Trooper, courtesy of Dyvinia
- Removed PM IA Boba Fett Revamp, restoring Boba Fett to his vanilla gameplay