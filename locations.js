const locations = {
    "Jerusalem": {
        "type": "city",
        "description": "A major city in the Old World where Lehi and his family resided before their exodus.",
        "events": ["Lehi receives a vision and prophesies", "Nephi obtains the brass plates"],
        "journeys": ["Lehi’s family departs to the Wilderness"],
        "narrativeLinks": ["1 Nephi 1-5"],
        "relationships": {
            "proximity": ["Land of Jerusalem", "Wilderness"],
            "direction": {"south": "Red Sea"}
        }
    },
    "Land of Jerusalem": {
        "type": "land",
        "description": "The broader region encompassing the city of Jerusalem, including Lehi’s inheritance.",
        "events": ["Lehi’s family gathers provisions"],
        "journeys": [],
        "narrativeLinks": ["1 Nephi 2-3"],
        "relationships": {
            "proximity": ["Jerusalem", "Wilderness"],
            "direction": {"south": "Red Sea"}
        }
    },
    "Wilderness": {
        "type": "geographical feature",
        "description": "A vast, often unnamed expanse of desolate terrain, a setting for travel and trials.",
        "events": ["Lehi’s family camps and faces trials", "Ishmael’s family joins"],
        "journeys": ["Lehi’s family travels from Jerusalem to Valley of Lemuel", "Nephi’s brothers return to Jerusalem for Ishmael"],
        "narrativeLinks": ["1 Nephi 2-7"],
        "relationships": {
            "proximity": ["Jerusalem", "Red Sea", "Valley of Lemuel", "Bountiful (Old World)"],
            "direction": {"south of": "Jerusalem"}
        }
    },
    "Red Sea": {
        "type": "sea",
        "description": "A large body of water near which Lehi’s family traveled in the Old World.",
        "events": [],
        "journeys": ["Lehi’s family travels along its borders"],
        "narrativeLinks": ["1 Nephi 2"],
        "relationships": {
            "proximity": ["Wilderness", "Valley of Lemuel", "River Laman"],
            "direction": {"north of": "Valley of Lemuel"}
        }
    },
    "Valley of Lemuel": {
        "type": "valley",
        "description": "A valley named by Lehi after his son Lemuel, near the Red Sea.",
        "events": ["Lehi names the valley", "Nephi rebukes his brothers"],
        "journeys": ["Lehi’s family arrives from Wilderness"],
        "narrativeLinks": ["1 Nephi 2, 9"],
        "relationships": {
            "proximity": ["Red Sea", "River Laman", "Wilderness"],
            "direction": {"near": "Red Sea"}
        }
    },
    "River Laman": {
        "type": "river",
        "description": "A river in the Valley of Lemuel, named after Lehi’s son Laman, flowing into the Red Sea.",
        "events": ["Lehi names the river"],
        "journeys": [],
        "narrativeLinks": ["1 Nephi 2"],
        "relationships": {
            "proximity": ["Valley of Lemuel", "Red Sea"],
            "direction": {"empties into": "Red Sea"}
        }
    },
    "Bountiful (Old World)": {
        "type": "land",
        "description": "A fertile coastal region in the Old World where Nephi built a ship.",
        "events": ["Nephi builds a ship", "Lehi’s family prepares to depart"],
        "journeys": ["Lehi’s family arrives from Wilderness", "Departs to Promised Land via Irreantum"],
        "narrativeLinks": ["1 Nephi 17-18"],
        "relationships": {
            "proximity": ["Wilderness", "Irreantum"],
            "direction": {"south-east": "Wilderness"}
        }
    },
    "Irreantum": {
        "type": "sea",
        "description": "A sea, interpreted as 'many waters,' crossed by Lehi’s family to reach the promised land.",
        "events": ["Lehi’s family crosses to Promised Land"],
        "journeys": ["Lehi’s family sails from Bountiful (Old World)"],
        "narrativeLinks": ["1 Nephi 18"],
        "relationships": {
            "proximity": ["Bountiful (Old World)"],
            "direction": {}
        }
    },
    "Promised Land": {
        "type": "land",
        "description": "The New World destination promised by God to Lehi’s family and the Jaredites.",
        "events": ["Lehi’s family arrives", "Jaredites settle"],
        "journeys": ["Lehi’s family arrives from Irreantum", "Jaredites arrive from the Great Tower"],
        "narrativeLinks": ["1 Nephi 18", "Ether 6"],
        "relationships": {
            "proximity": ["Land of Nephi", "Land of Zarahemla", "Land of Bountiful (New World)", "Land of Desolation"],
            "direction": {}
        }
    },
    "Land of Nephi": {
        "type": "land",
        "description": "The initial settlement of Nephi and his followers, later a Lamanite stronghold.",
        "events": ["Nephi establishes the city", "Zeniff’s people settle", "Lamanite occupation"],
        "journeys": ["Nephi flees from brothers to here", "Mosiah leads Nephites to Zarahemla", "Alma flees to Waters of Mormon"],
        "narrativeLinks": ["2 Nephi 5", "Omni 1", "Mosiah 9-22"],
        "relationships": {
            "proximity": ["Land of Zarahemla", "Wilderness", "Land of Shilom", "Land of Helam"],
            "direction": {"south of": "Land of Zarahemla"}
        }
    },
    "Land of Zarahemla": {
        "type": "land",
        "description": "The central Nephite land discovered by Mosiah, their political and spiritual capital.",
        "events": ["Mosiah discovers Zarahemla", "Alma establishes the church", "Christ appears"],
        "journeys": ["Mosiah arrives from Land of Nephi", "Alma’s people return from Helam"],
        "narrativeLinks": ["Omni 1", "Mosiah 25", "3 Nephi 11"],
        "relationships": {
            "proximity": ["Land of Nephi", "River Sidon", "Land of Bountiful (New World)", "Narrow Strip of Wilderness"],
            "direction": {"north of": "Land of Nephi", "south of": "Land of Bountiful (New World)"}
        }
    },
    "Land of Shilom": {
        "type": "land",
        "description": "A land near the Land of Nephi, settled by Zeniff’s people and later controlled by Lamanites.",
        "events": ["Zeniff’s people settle", "Lamanite attacks"],
        "journeys": ["Zeniff travels from Zarahemla"],
        "narrativeLinks": ["Mosiah 9-10"],
        "relationships": {
            "proximity": ["Land of Nephi", "Land of Shemlon"],
            "direction": {"near": "Land of Nephi"}
        }
    },
    "Land of Shemlon": {
        "type": "land",
        "description": "A land adjacent to Shilom and Nephi, inhabited by Lamanites.",
        "events": ["Lamanites spy on Zeniff’s people"],
        "journeys": [],
        "narrativeLinks": ["Mosiah 10"],
        "relationships": {
            "proximity": ["Land of Shilom", "Land of Nephi"],
            "direction": {}
        }
    },
    "Waters of Mormon": {
        "type": "body of water",
        "description": "A body of water near the Land of Nephi where Alma baptized converts.",
        "events": ["Alma baptizes converts", "Church organized"],
        "journeys": ["Alma flees from Noah to here", "Alma’s people depart to Valley of Alma"],
        "narrativeLinks": ["Mosiah 18"],
        "relationships": {
            "proximity": ["Land of Nephi", "Forest of Mormon"],
            "direction": {}
        }
    },
    "Forest of Mormon": {
        "type": "geographical feature",
        "description": "A forest near the Waters of Mormon, providing cover for Alma’s group.",
        "events": ["Alma hides from Noah’s priests"],
        "journeys": [],
        "narrativeLinks": ["Mosiah 18"],
        "relationships": {
            "proximity": ["Waters of Mormon", "Land of Nephi"],
            "direction": {}
        }
    },
    "Valley of Alma": {
        "type": "valley",
        "description": "A valley where Alma’s people camped during their escape from Lamanite bondage.",
        "events": ["Alma’s people rest after fleeing"],
        "journeys": ["Alma’s people travel from Waters of Mormon", "Depart to Land of Helam"],
        "narrativeLinks": ["Mosiah 24"],
        "relationships": {
            "proximity": ["Land of Nephi", "Land of Helam"],
            "direction": {"between": "Land of Nephi and Zarahemla"}
        }
    },
    "Land of Helam": {
        "type": "land",
        "description": "A land settled by Alma’s people after fleeing Noah, later occupied by Lamanites.",
        "events": ["Alma’s people settle", "Lamanite occupation", "Deliverance by God"],
        "journeys": ["Alma’s people arrive from Valley of Alma", "Depart to Zarahemla"],
        "narrativeLinks": ["Mosiah 23-24"],
        "relationships": {
            "proximity": ["Land of Nephi", "Valley of Alma"],
            "direction": {"between": "Land of Nephi and Zarahemla"}
        }
    },
    "River Sidon": {
        "type": "river",
        "description": "A major river flowing through Nephite lands, a strategic site.",
        "events": ["Amlicite battle", "Numerous military engagements"],
        "journeys": [],
        "narrativeLinks": ["Alma 2-3"],
        "relationships": {
            "proximity": ["Land of Zarahemla", "Land of Gideon", "Valley of Gideon"],
            "direction": {"east of": "Land of Zarahemla"}
        }
    },
    "Valley of Gideon": {
        "type": "valley",
        "description": "A valley east of the River Sidon, named after Gideon.",
        "events": [],
        "journeys": [],
        "narrativeLinks": ["Alma 6"],
        "relationships": {
            "proximity": ["River Sidon", "Land of Gideon"],
            "direction": {"east of": "River Sidon"}
        }
    },
    "Land of Gideon": {
        "type": "land",
        "description": "A Nephite land east of Zarahemla, named after Gideon.",
        "events": ["Alma preaches here"],
        "journeys": [],
        "narrativeLinks": ["Alma 6-7"],
        "relationships": {
            "proximity": ["River Sidon", "Valley of Gideon"],
            "direction": {"east of": "River Sidon"}
        }
    },
    "Land of Melek": {
        "type": "land",
        "description": "A Nephite land west of the River Sidon where Alma preached.",
        "events": ["Alma establishes church order"],
        "journeys": [],
        "narrativeLinks": ["Alma 8"],
        "relationships": {
            "proximity": ["River Sidon", "Land of Ammonihah"],
            "direction": {"west of": "River Sidon"}
        }
    },
    "Land of Ammonihah": {
        "type": "land",
        "description": "A Nephite city known for its wickedness, later destroyed by Lamanites.",
        "events": ["Alma and Amulek preach", "City destroyed"],
        "journeys": ["Alma travels from Zarahemla"],
        "narrativeLinks": ["Alma 8-16"],
        "relationships": {
            "proximity": ["Land of Melek", "Land of Zarahemla"],
            "direction": {"northwest of": "Land of Zarahemla"}
        }
    },
    "Land of Noah": {
        "type": "land",
        "description": "A Nephite land near Ammonihah, fortified against Lamanite attacks.",
        "events": ["Lamanite attack repelled"],
        "journeys": [],
        "narrativeLinks": ["Alma 16"],
        "relationships": {
            "proximity": ["Land of Ammonihah"],
            "direction": {}
        }
    },
    "Land of Ishmael": {
        "type": "land",
        "description": "A Lamanite land where Ammon preached and converted many.",
        "events": ["Ammon defends flocks", "King Lamoni converted"],
        "journeys": ["Ammon travels from Zarahemla"],
        "narrativeLinks": ["Alma 17-20"],
        "relationships": {
            "proximity": ["Land of Nephi", "Land of Middoni"],
            "direction": {"within": "Land of Nephi"}
        }
    },
    "Land of Middoni": {
        "type": "land",
        "description": "A Lamanite land where Ammon’s brothers were imprisoned and freed.",
        "events": ["Ammon frees his brothers"],
        "journeys": ["Ammon travels from Ishmael"],
        "narrativeLinks": ["Alma 20"],
        "relationships": {
            "proximity": ["Land of Ishmael", "Land of Nephi"],
            "direction": {"near": "Land of Ishmael"}
        }
    },
    "Land of Jershon": {
        "type": "land",
        "description": "A land given to the Anti-Nephi-Lehies as a refuge.",
        "events": ["Anti-Nephi-Lehies settle", "Protected by Nephites"],
        "journeys": ["Anti-Nephi-Lehies flee from Land of Nephi"],
        "narrativeLinks": ["Alma 27-28"],
        "relationships": {
            "proximity": ["Land of Zarahemla", "East Sea"],
            "direction": {"east of": "Land of Zarahemla", "south of": "Land of Bountiful (New World)"}
        }
    },
    "Land of Bountiful (New World)": {
        "type": "land",
        "description": "A fertile Nephite land north of Zarahemla, site of Christ’s appearance.",
        "events": ["Christ appears to the Nephites", "Final battles with Lamanites"],
        "journeys": [],
        "narrativeLinks": ["3 Nephi 11", "Alma 63"],
        "relationships": {
            "proximity": ["Land of Zarahemla", "Land of Desolation", "Narrow Neck of Land", "East Sea"],
            "direction": {"north of": "Land of Zarahemla", "south of": "Land of Desolation"}
        }
    },
    "Narrow Strip of Wilderness": {
        "type": "geographical feature",
        "description": "A narrow wilderness separating the Land of Nephi from Zarahemla.",
        "events": [],
        "journeys": ["Zeniff crosses to Nephi", "Mosiah crosses to Zarahemla"],
        "narrativeLinks": ["Mosiah 7-9"],
        "relationships": {
            "proximity": ["Land of Nephi", "Land of Zarahemla"],
            "direction": {"south of": "Land of Zarahemla", "north of": "Land of Nephi"}
        }
    },
    "East Sea": {
        "type": "sea",
        "description": "A sea on the eastern border of Nephite lands.",
        "events": [],
        "journeys": [],
        "narrativeLinks": ["Alma 22"],
        "relationships": {
            "proximity": ["Land of Bountiful (New World)", "Land of Jershon", "Land of Nephihah"],
            "direction": {"east of": "Land of Zarahemla"}
        }
    },
    "West Sea": {
        "type": "sea",
        "description": "A sea on the western border of Nephite lands, near the narrow neck.",
        "events": [],
        "journeys": [],
        "narrativeLinks": ["Alma 22"],
        "relationships": {
            "proximity": ["Land of Bountiful (New World)", "Land of Zarahemla"],
            "direction": {"west of": "Land of Zarahemla"}
        }
    },
    "Land of Nephihah": {
        "type": "land",
        "description": "A Nephite city near the East Sea, built by Moroni.",
        "events": ["Moroni fortifies the city", "Lamanite siege"],
        "journeys": [],
        "narrativeLinks": ["Alma 50-51"],
        "relationships": {
            "proximity": ["East Sea", "Land of Moroni"],
            "direction": {"near": "East Sea"}
        }
    },
    "Land of Moroni": {
        "type": "land",
        "description": "A Nephite city near the East Sea, established by Moroni.",
        "events": ["Moroni founds the city"],
        "journeys": [],
        "narrativeLinks": ["Alma 50"],
        "relationships": {
            "proximity": ["Land of Nephihah", "East Sea"],
            "direction": {"near": "East Sea"}
        }
    },
    "Land of Lehi": {
        "type": "land",
        "description": "A Nephite land near the East Sea, involved in wars.",
        "events": ["Lamanite wars"],
        "journeys": [],
        "narrativeLinks": ["Alma 50"],
        "relationships": {
            "proximity": ["Land of Morianton", "East Sea"],
            "direction": {"near": "East Sea"}
        }
    },
    "Land of Morianton": {
        "type": "land",
        "description": "A Nephite land near Lehi, site of a rebellion.",
        "events": ["Morianton’s rebellion"],
        "journeys": [],
        "narrativeLinks": ["Alma 50"],
        "relationships": {
            "proximity": ["Land of Lehi", "East Sea"],
            "direction": {"near": "Land of Lehi"}
        }
    },
    "Narrow Neck of Land": {
        "type": "geographical feature",
        "description": "A narrow isthmus connecting Bountiful to Desolation.",
        "events": ["Hagoth builds ships"],
        "journeys": ["Hagoth’s voyages north"],
        "narrativeLinks": ["Alma 63"],
        "relationships": {
            "proximity": ["Land of Bountiful (New World)", "Land of Desolation", "West Sea"],
            "direction": {"north of": "Land of Bountiful (New World)", "south of": "Land of Desolation"}
        }
    },
    "Land of Desolation": {
        "type": "land",
        "description": "A northern land, once inhabited by Jaredites, later settled by Nephites.",
        "events": ["Jaredite destruction", "Nephite exploration"],
        "journeys": [],
        "narrativeLinks": ["Ether 7", "Alma 22"],
        "relationships": {
            "proximity": ["Land of Bountiful (New World)", "Narrow Neck of Land"],
            "direction": {"north of": "Land of Bountiful (New World)"}
        }
    },
    "Hill Manti": {
        "type": "hill",
        "description": "A hill near Zarahemla where Nehor was executed.",
        "events": ["Execution of Nehor"],
        "journeys": [],
        "narrativeLinks": ["Alma 1"],
        "relationships": {
            "proximity": ["Land of Zarahemla"],
            "direction": {}
        }
    },
    "Land of Manti": {
        "type": "land",
        "description": "A southern Nephite land near the head of the River Sidon, a frequent battleground.",
        "events": ["Numerous Lamanite battles", "Moroni’s campaigns"],
        "journeys": [],
        "narrativeLinks": ["Alma 43-59"],
        "relationships": {
            "proximity": ["River Sidon", "Land of Zarahemla"],
            "direction": {"south of": "Land of Zarahemla"}
        }
    },
    "Hill Amnihu": {
        "type": "hill",
        "description": "A hill east of the River Sidon where Amlicites were defeated.",
        "events": ["Battle with Amlicites"],
        "journeys": [],
        "narrativeLinks": ["Alma 2"],
        "relationships": {
            "proximity": ["River Sidon"],
            "direction": {"east of": "River Sidon"}
        }
    },
    "Land of Antionum": {
        "type": "land",
        "description": "A land inhabited by Zoramites, near Jershon.",
        "events": ["Alma preaches to Zoramites"],
        "journeys": [],
        "narrativeLinks": ["Alma 31-35"],
        "relationships": {
            "proximity": ["Land of Jershon", "Land of Zarahemla"],
            "direction": {"east of": "Land of Zarahemla"}
        }
    },
    "Hill Riplah": {
        "type": "hill",
        "description": "A hill near Manti where Moroni ambushed the Lamanites.",
        "events": ["Moroni’s ambush"],
        "journeys": [],
        "narrativeLinks": ["Alma 43"],
        "relationships": {
            "proximity": ["Land of Manti", "River Sidon"],
            "direction": {}
        }
    },
    "Land of Antiparah": {
        "type": "land",
        "description": "A Nephite city captured by Lamanites, later abandoned.",
        "events": ["Lamanite capture", "Helaman’s stratagem"],
        "journeys": [],
        "narrativeLinks": ["Alma 57"],
        "relationships": {
            "proximity": ["Land of Manti"],
            "direction": {"near": "Land of Manti"}
        }
    },
    "Land of Cumeni": {
        "type": "land",
        "description": "A Nephite city captured and retaken by Helaman’s forces.",
        "events": ["Helaman retakes city"],
        "journeys": [],
        "narrativeLinks": ["Alma 57"],
        "relationships": {
            "proximity": ["Land of Manti"],
            "direction": {"near": "Land of Manti"}
        }
    },
    "Land of Judea": {
        "type": "land",
        "description": "A southern Nephite land fortified by Helaman’s forces.",
        "events": ["Helaman’s defense"],
        "journeys": [],
        "narrativeLinks": ["Alma 56"],
        "relationships": {
            "proximity": ["Land of Manti"],
            "direction": {"near": "Land of Manti"}
        }
    },
    "City of Mulek": {
        "type": "city",
        "description": "A Nephite city near the East Sea, captured and retaken in wars.",
        "events": ["Moroni retakes city"],
        "journeys": [],
        "narrativeLinks": ["Alma 51-52"],
        "relationships": {
            "proximity": ["Land of Bountiful (New World)", "East Sea"],
            "direction": {"near": "East Sea"}
        }
    },
    "City of Gid": {
        "type": "city",
        "description": "A Nephite city near Bountiful, freed by Moroni’s stratagem.",
        "events": ["Moroni frees prisoners"],
        "journeys": [],
        "narrativeLinks": ["Alma 55"],
        "relationships": {
            "proximity": ["Land of Bountiful (New World)"],
            "direction": {}
        }
    },
    "Land of Joshua": {
        "type": "land",
        "description": "A western Nephite land where Mormon gathered his people.",
        "events": ["Mormon gathers Nephites"],
        "journeys": [],
        "narrativeLinks": ["Mormon 1"],
        "relationships": {
            "proximity": ["West Sea"],
            "direction": {"near": "West Sea"}
        }
    },
    "Land of David": {
        "type": "land",
        "description": "A Nephite land Mormon’s people retreated to during wars.",
        "events": ["Nephite retreat"],
        "journeys": [],
        "narrativeLinks": ["Mormon 2"],
        "relationships": {
            "proximity": ["Land of Joshua"],
            "direction": {}
        }
    },
    "Hill Cumorah": {
        "type": "hill",
        "description": "The hill where the final Nephite battle occurred and records were hidden.",
        "events": ["Final Nephite battle", "Moroni hides records"],
        "journeys": [],
        "narrativeLinks": ["Mormon 6", "Moroni 10"],
        "relationships": {
            "proximity": ["Land of Cumorah"],
            "direction": {}
        }
    },
    "Land of Cumorah": {
        "type": "land",
        "description": "The region surrounding Hill Cumorah, site of the Nephites’ last stand.",
        "events": ["Nephite destruction"],
        "journeys": [],
        "narrativeLinks": ["Mormon 6"],
        "relationships": {
            "proximity": ["Hill Cumorah"],
            "direction": {}
        }
    },
    "Waters of Sebus": {
        "type": "body of water",
        "description": "A water source in Ishmael where Ammon defended the king’s flocks.",
        "events": ["Ammon defends flocks"],
        "journeys": [],
        "narrativeLinks": ["Alma 17-19"],
        "relationships": {
            "proximity": ["Land of Ishmael"],
            "direction": {}
        }
    },
    "Hill Shim": {
        "type": "hill",
        "description": "A hill where Nephite records were hidden, later accessed by Mormon.",
        "events": ["Records hidden", "Mormon retrieves records"],
        "journeys": [],
        "narrativeLinks": ["Mormon 1, 4"],
        "relationships": {
            "proximity": ["Land of Antum"],
            "direction": {}
        }
    },
    "Land of Antum": {
        "type": "land",
        "description": "A land containing Hill Shim, where Nephite records were stored.",
        "events": [],
        "journeys": [],
        "narrativeLinks": ["Mormon 1"],
        "relationships": {
            "proximity": ["Hill Shim"],
            "direction": {}
        }
    },
    "Land of Angola": {
        "type": "land",
        "description": "A Nephite land where Mormon’s people retreated.",
        "events": ["Nephite retreat"],
        "journeys": [],
        "narrativeLinks": ["Mormon 2"],
        "relationships": {
            "proximity": ["Land of David"],
            "direction": {}
        }
    },
    "Land of Sherrizah": {
        "type": "land",
        "description": "A land where Lamanites took Nephite prisoners during the final wars.",
        "events": ["Lamanite atrocities"],
        "journeys": [],
        "narrativeLinks": ["Moroni 9"],
        "relationships": {
            "proximity": [],
            "direction": {}
        }
    },
    "Land of Moriantum": {
        "type": "land",
        "description": "A Nephite land where atrocities occurred during the final wars.",
        "events": ["Lamanite atrocities"],
        "journeys": [],
        "narrativeLinks": ["Moroni 9"],
        "relationships": {
            "proximity": [],
            "direction": {}
        }
    },
    "Tower of Sherrizah": {
        "type": "tower",
        "description": "A tower in Sherrizah from which Lamanites took prisoners.",
        "events": ["Lamanite prisoner-taking"],
        "journeys": [],
        "narrativeLinks": ["Moroni 9"],
        "relationships": {
            "proximity": ["Land of Sherrizah"],
            "direction": {}
        }
    },
    "Waters of Ripliancum": {
        "type": "body of water",
        "description": "A large body of water where Coriantumr camped during the Jaredite wars.",
        "events": ["Coriantumr camps"],
        "journeys": [],
        "narrativeLinks": ["Ether 15"],
        "relationships": {
            "proximity": ["Land of Ogath"],
            "direction": {}
        }
    },
    "Land of Ogath": {
        "type": "land",
        "description": "A land where Shiz’s army camped during the final Jaredite wars.",
        "events": ["Shiz camps"],
        "journeys": [],
        "narrativeLinks": ["Ether 15"],
        "relationships": {
            "proximity": ["Waters of Ripliancum", "Hill Ramah"],
            "direction": {"south of": "Hill Ramah"}
        }
    },
    "Hill Ramah": {
        "type": "hill",
        "description": "A hill where Coriantumr gathered his army, identified as Hill Cumorah.",
        "events": ["Final Jaredite battle"],
        "journeys": [],
        "narrativeLinks": ["Ether 15"],
        "relationships": {
            "proximity": ["Land of Ogath"],
            "direction": {}
        }
    },
    "Valley of Corihor": {
        "type": "valley",
        "description": "A valley where Shiz pitched his tents during the Jaredite wars.",
        "events": ["Shiz camps"],
        "journeys": [],
        "narrativeLinks": ["Ether 14"],
        "relationships": {
            "proximity": ["Valley of Shurr", "Hill Comnor"],
            "direction": {}
        }
    },
    "Valley of Shurr": {
        "type": "valley",
        "description": "A valley near Hill Comnor where Coriantumr camped.",
        "events": ["Coriantumr camps"],
        "journeys": [],
        "narrativeLinks": ["Ether 14"],
        "relationships": {
            "proximity": ["Hill Comnor", "Valley of Corihor"],
            "direction": {"near": "Hill Comnor"}
        }
    },
    "Hill Comnor": {
        "type": "hill",
        "description": "A hill near the Valley of Shurr where Coriantumr rallied his forces.",
        "events": ["Coriantumr rallies forces"],
        "journeys": [],
        "narrativeLinks": ["Ether 14"],
        "relationships": {
            "proximity": ["Valley of Shurr", "Valley of Corihor"],
            "direction": {}
        }
    },
    "Land of Corihor": {
        "type": "land",
        "description": "A Jaredite land where early kings ruled and battles occurred.",
        "events": ["Shule battles Corihor"],
        "journeys": [],
        "narrativeLinks": ["Ether 7"],
        "relationships": {
            "proximity": [],
            "direction": {}
        }
    },
    "Land of Nehor": {
        "type": "land",
        "description": "A Jaredite land where Shule defeated Corihor.",
        "events": ["Shule defeats Corihor"],
        "journeys": [],
        "narrativeLinks": ["Ether 7"],
        "relationships": {
            "proximity": ["Land of Corihor"],
            "direction": {}
        }
    },
    "Land of Heth": {
        "type": "land",
        "description": "A Jaredite land where Jared sought to overthrow his father.",
        "events": ["Jared’s rebellion"],
        "journeys": [],
        "narrativeLinks": ["Ether 8"],
        "relationships": {
            "proximity": [],
            "direction": {}
        }
    },
    "Land of Moron": {
        "type": "land",
        "description": "A central Jaredite land near Desolation, a seat of kingship.",
        "events": ["Jaredite kings rule", "Civil wars"],
        "journeys": [],
        "narrativeLinks": ["Ether 7-11"],
        "relationships": {
            "proximity": ["Land of Desolation"],
            "direction": {"near": "Land of Desolation"}
        }
    },
    "Land of Ablom": {
        "type": "land",
        "description": "A Jaredite land near the East Sea where Omer fled.",
        "events": ["Omer flees Akish"],
        "journeys": ["Omer travels from Moron"],
        "narrativeLinks": ["Ether 9"],
        "relationships": {
            "proximity": ["East Sea"],
            "direction": {"near": "East Sea"}
        }
    },
    "Land of Akish": {
        "type": "land",
        "description": "A Jaredite land named after Akish, involved in civil wars.",
        "events": ["Akish’s rebellion"],
        "journeys": [],
        "narrativeLinks": ["Ether 9"],
        "relationships": {
            "proximity": [],
            "direction": {}
        }
    }
};
