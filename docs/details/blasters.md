# Blasters

Join the fray with a selection of over a hundred new abilities available to the Assault, Heavy, Officer, and Specialist. Each class has greatly expanded its arsenal of blasters and Star Cards, along with the addition of a sidearm menu to select your secondary weapon, as well as a Ping button to mark points of interest for your team.

<h2 id="assault" style="margin-bottom: -0.25em;">
    <img class="blaster-class" class="no-lb" src="../../assets/classes/Class_Troopers_Assault_01.svg">
    Assault
</h2>

<h4>
    Primary
    <img src="../../assets/search.svg" class="search-box-button" class="no-lb" id="assault-primary-search-toggle" onclick="toggleSearch(this.id)"></img>
    <input class="search-box" type="text" id="assault-primary-search" onkeyup="search(this.id)" placeholder="Search...">
</h4>

<div id="assault-primary" class="container"></div>

<h4>
    Secondary
    <img src="../../assets/search.svg" class="search-box-button" class="no-lb" id="assault-secondary-search-toggle" onclick="toggleSearch(this.id)"></img>
    <input class="search-box" type="text" id="assault-secondary-search" onkeyup="search(this.id)" placeholder="Search...">
</h4>

<div id="assault-secondary" class="container"></div>

<h2 id="heavy" style="margin-bottom: -0.25em;">
    <img class="blaster-class" class="no-lb" src="../../assets/classes/Class_Troopers_Heavy_01.svg">
    Heavy
</h2>

<h4>
    Primary
    <img src="../../assets/search.svg" class="search-box-button" class="no-lb" id="heavy-primary-search-toggle" onclick="toggleSearch(this.id)"></img>
    <input class="search-box" type="text" id="heavy-primary-search" onkeyup="search(this.id)" placeholder="Search...">
</h4>

<div id="heavy-primary" class="container"></div>

<h4>
    Secondary
    <img src="../../assets/search.svg" class="search-box-button" class="no-lb" id="heavy-secondary-search-toggle" onclick="toggleSearch(this.id)"></img>
    <input class="search-box" type="text" id="heavy-secondary-search" onkeyup="search(this.id)" placeholder="Search...">
</h4>

<div id="heavy-secondary" class="container"></div>

<h2 id="officer" style="margin-bottom: -0.25em;">
    <img class="blaster-class" class="no-lb" src="../../assets/classes/Class_Troopers_Officer_01.svg">
    Officer
</h2>

<h4>
    Primary
    <img src="../../assets/search.svg" class="search-box-button" class="no-lb" id="officer-primary-search-toggle" onclick="toggleSearch(this.id)"></img>
    <input class="search-box" type="text" id="officer-primary-search" onkeyup="search(this.id)" placeholder="Search...">
</h4>

<div id="officer-primary" class="container"></div>

#### Secondary

<div class="container">
    <!-- Item Start -->
    <div class="item">
        <div class="trooper-blaster">
            <div>
                <h3>
                    Tactical Binoculars
                </h3>
                <img class="trooper-blaster-weapon" class="no-lb" style="margin-right: 0.1em; margin-left: 0; transform: translateY(-1px);" src="../../assets/blasters/officer-sidearms/Binocs_Electrobinoculars.svg">
            </div>
            <div class="blaster-trait">Equipped with dual-zoom capabilities and can quickly ping multiple locations for allies at a time. These macrobinoculars best serve officers communicating information to increase tactical awareness.</div>
        </div>
    </div>
    <!-- Item End -->
    <div class="item">
        <div class="trooper-blaster">
            <div>
                <h3>
                    Command Binoculars
                </h3>
                <img class="trooper-blaster-weapon" class="no-lb" style="margin-right: 0.1em; margin-left: 0; transform: translateY(-1px);" src="../../assets/blasters/officer-sidearms/Binocs_Clone.svg">
            </div>
            <div class="blaster-trait">Ping a location that will reduce incoming damage to allies in close proximity to the marker. These macrobinoculars belong to the officer who carefully directs their team to strategic points to get them through the battle.</div>
        </div>
    </div>
    <div class="item">
        <div class="trooper-blaster">
            <div>
                <h3>
                    Scrambler Binoculars
                </h3>
                <img class="trooper-blaster-weapon" class="no-lb" style="margin-right: 0.1em; margin-left: 0; transform: translateY(-1px);" src="../../assets/blasters/officer-sidearms/Binocs_DroidBinocs.svg">
            </div>
            <div class="blaster-trait">Ping a location that will scramble radars and negate the effects of Gonk Droids and Medical Droids in close proximity to the marker. These macrobinoculars pair well with an officer seeking to throw off the enemy.</div>
        </div>
    </div>
</div>

<h2 id="specialist" style="margin-bottom: -0.25em;">
    <img class="blaster-class" class="no-lb" src="../../assets/classes/Class_Troopers_Specialist_01.svg">
    Specialist
</h2>

<h4>
    Primary
    <img src="../../assets/search.svg" class="search-box-button" class="no-lb" id="specialist-primary-search-toggle" onclick="toggleSearch(this.id)"></img>
    <input class="search-box" type="text" id="specialist-primary-search" onkeyup="search(this.id)" placeholder="Search...">
</h4>

<div id="specialist-primary" class="container"></div>

<h4>
    Secondary
    <img src="../../assets/search.svg" class="search-box-button" class="no-lb" id="specialist-secondary-search-toggle" onclick="toggleSearch(this.id)"></img>
    <input class="search-box" type="text" id="specialist-secondary-search" onkeyup="search(this.id)" placeholder="Search...">
</h4>

<div id="specialist-secondary" class="container"></div>

<script src="../blasters.js"></script>

## Attachments
<p id="berserker"><strong>Berserker:</strong> <span style="opacity: 0.69;">Increases damage while hip-firing, but decreases damage while aiming.</span></p>
<p id="burstmode"><strong>Burst Mode:</strong> <span style="opacity: 0.69;">Enables a burst mode with each pull of the trigger.</span></p>
<p id="chargehack"><strong>Charge Hack:</strong> <span style="opacity: 0.69;">Alters weapon charge-up at the cost of lower potential.</span></p>
<p id="dualzoom"><strong>Dual Zoom:</strong> <span style="opacity: 0.69;">Macroscope that can toggle between two magnification levels while zooming.</span></p>
<p id="eliteblaster"><strong>Elite Blaster:</strong> <span style="opacity: 0.69;">Increases damage and reconfigures the weapon to fire in bursts, with distinct purple blaster bolts.</span></p>
<p id="escapeartist"><strong>Escape Artist:</strong> <span style="opacity: 0.69;">Increases movement speed, but reduces zoom magnification.</span></p>
<p id="explosive"><strong>Explosive Shot:</strong> <span style="opacity: 0.69;">Unstable plasma that explodes on impact, dispersing the bolt damage across a small area. Due to its volatile nature, the blaster builds heat significantly faster.</span></p>
<p id="flashlight"><strong>Flashlight:</strong> <span style="opacity: 0.69;">Barrel mounted light source that reveals enemies while zooming.</span></p>
<p id="focusedfire"><strong>Focused Fire:</strong> <span style="opacity: 0.69;">Improves recoil at the cost of worse sprint time recovery.</span></p>
<p id="gunslinger"><strong>Gunslinger:</strong> <span style="opacity: 0.69;">Improves sprint time recovery, but increases recoil.</span></p>
<p id="heavyhanded"><strong>Heavy Handed:</strong> <span style="opacity: 0.69;">Improves heat drop delay and rate, but reduces movement speed.</span></p>
<p id="ionshot"><strong>Ion Shot:</strong> <span style="opacity: 0.69;">Ionized bolts that increase damage against turrets, vehicles, and shields, but reduced damage against infantry, special units, and heroes.</span></p>
<p id="lightshot"><strong>Light Shot:</strong> <span style="opacity: 0.69;">Improves cooling at the cost of damage.</span></p>
<p id="multishot"><strong>Multi-Shot Configuration:</strong> <span style="opacity: 0.69;">While firing from the hip, the blaster is configured to fire multiple projectiles at once with reduced damage. Reduces zoom magnification.</span></p>
<p id="nightvision"><strong>Night Vision:</strong> <span style="opacity: 0.69;">Digital scope capable of revealing enemy troops even in the darkest of environments.</span></p>
<p id="precisionblaster"><strong>Precision Blaster:</strong> <span style="opacity: 0.69;">Increases range and projectile speed, with distinct purple trails, but disables active cooldown.</span></p>
<p id="altfire"><strong>Secondary Fire:</strong> <span style="opacity: 0.69;">Enable a secondary fire that charges up a powerful shot while aiming.</span></p>
<p id="scope"><strong>Improved Zoom:</strong> <span style="opacity: 0.69;">Scope with increased magnification.</span></p>
<p id="seeker"><strong>Seeker Tactics:</strong> <span style="opacity: 0.69;">Increases movement speed while aiming, but reduces blaster bolt speed.</span></p>
<p id="sharpshooter"><strong>Sharpshooter:</strong> <span style="opacity: 0.69;">Increases damage while aiming, but decreases damage while hip-firing.</span></p>
<p id="phasmashot"><strong>Stabilizer:</strong> <span style="opacity: 0.69;">The blaster has terrible accuracy when first fired, but quickly settles into a tight firing pattern.</span></p>

### Unique Attachments

<p id="ca87-crouchcontrol"><strong>Crouch Control:</strong> <span style="opacity: 0.69;">Modifies the CA-87 to condense all its blaster bolts while crouched, but decreases its rate of fire.</span></p>
<p id="dc15s-powercell"><strong>Power Cell:</strong> <span style="opacity: 0.69;">Reduces the blaster's cooling speed to upgrade its damage.</span></p>
<p id="dp23-choke"><strong>Choke:</strong> <span style="opacity: 0.69;">Tightens the shock blaster's spread, but worsens recoil.</span></p>
<p id="dt29-cooling"><strong>Cooling Cell:</strong> <span style="opacity: 0.69;">Enables supercooling of the blaster at the cost of heat build-up.</span></p>
<p id="ee3-sugi"><strong>Sugi:</strong> <span style="opacity: 0.69;">Outfits the EE-3 with similar settings used by the bounty hunter Sugi, making it semi-automatic with blue blaster bolts.</span></p>
<p id="firepuncher-longlife"><strong>Extended Life:</strong> <span style="opacity: 0.69;">Increases the live time of the Firepuncher's projectile, but reduces its speed.</span></p>
<p id="firepuncher-fuze"><strong>Fuze:</strong> <span style="opacity: 0.69;">Creates an explosion when the Firepuncher projectile's life ends, but reduces its active time.</span></p>
<p id="hf94-vanthrefrigeration"><strong>Second Chance:</strong> <span style="opacity: 0.69;">Trades some of the HF-94's power and range for the ability to fire a second shot without overheating.</span></p>
<p id="sonic-fast"><strong>Accelerated Sphere:</strong> <span style="opacity: 0.69;">Expends a portion of the sonic sphere's blast damage to increase its travel speed.</span></p>
<p id="t12-oneshot"><strong>Both Barrels:</strong> <span style="opacity: 0.69;">Fire from both barrels simultaneously.</span></p>
<p id="t12-slug"><strong>Slug:</strong> <span style="opacity: 0.69;">Fire a single slug for improved accuracy and range. Additionally enables the scope and increases zoom.</span></p>
<p id="t39p-invertrange"><strong>Ranger Conversion:</strong> <span style="opacity: 0.69;">Converted blaster pack inverts blaster damage drop-off and reduces rate of fire.</span></p>
<p id="v6d-coldwar"><strong>Pulse Barrage:</strong> <span style="opacity: 0.69;">Charges up a rapid burst that fires all projectiles.</span></p>
<p id="valken-apex"><strong>Triple Take:</strong> <span style="opacity: 0.69;">Further modifies the Valken-38x to fire a third blaster bolt, but reduces its cooling power.</span></p>
<p id="valken-verticalshot"><strong>Reconfiguration Scope:</strong> <span style="opacity: 0.69;">While aiming down sights, the Valken-38x will reconfigure to fire its blaster bolts vertically parallel. Additionally, the scope magnification is increased.</span></p>

### Sidearm Replacers
<p id="a180-pistol"><strong>A180 Pistol:</strong> <span style="opacity: 0.69;">Pistol configuration of the A180 suited for close range.</span></p>
<p id="a180-rifle"><strong>A180 Rifle:</strong> <span style="opacity: 0.69;">Rifle configuration of the A180 suited for medium range.</span></p>
<p id="e5-rocket"><strong>Bulldog RLR:</strong> <span style="opacity: 0.69;">Anti-personnel rocket launcher utilizing the frame assembly of the E-5 blaster rifle.</span></p>
<p id="relbyv10-grenade"><strong>Microgrenades:</strong> <span style="opacity: 0.69;">Equips the Relby V-10 with a microgrenade launcher.</span></p>