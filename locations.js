const locations = {
    "Jerusalem": {
        "type": "city",
        "description": "A major city in the Old World where Lehi and his family resided before their exodus.",
        "relationships": {
            "proximity": ["Land of Jerusalem", "Wilderness"],
            "direction": {"south": "Red Sea"}
        }
    },
    "Land of Jerusalem": {
        "type": "land",
        "description": "The broader region encompassing the city of Jerusalem.",
        "relationships": {
            "proximity": ["Jerusalem", "Wilderness"],
            "direction": {"south": "Red Sea"}
        }
    },
    "Wilderness": {
        "type": "geographical feature",
        "description": "A vast expanse of desolate terrain, often a setting for travel.",
        "relationships": {
            "proximity": ["Jerusalem", "Red Sea", "Valley of Lemuel"],
            "direction": {"south of": "Jerusalem"}
        }
    },
    "Red Sea": {
        "type": "sea",
        "description": "A large body of water near which Lehi’s family traveled.",
        "relationships": {
            "proximity": ["Wilderness", "Valley of Lemuel"],
            "direction": {"north of": "Valley of Lemuel"}
        }
    },
    "Valley of Lemuel": {
        "type": "valley",
        "description": "A valley named by Lehi after his son Lemuel.",
        "relationships": {
            "proximity": ["Red Sea", "River Laman"],
            "direction": {"near": "Red Sea"}
        }
    },
    "River Laman": {
        "type": "river",
        "description": "A river in the Valley of Lemuel named after Lehi’s son Laman.",
        "relationships": {
            "proximity": ["Valley of Lemuel", "Red Sea"],
            "direction": {"empties into": "Red Sea"}
        }
    },
    "Bountiful (Old World)": {
        "type": "land",
        "description": "A fertile coastal region where Nephi built a ship.",
        "relationships": {
            "proximity": ["Wilderness", "Irreantum"],
            "direction": {"south-east": "Wilderness"}
        }
    },
    "Irreantum": {
        "type": "sea",
        "description": "A sea crossed by Lehi’s family to reach the promised land.",
        "relationships": {
            "proximity": ["Bountiful (Old World)"],
            "direction": {}
        }
    },
    "Promised Land": {
        "type": "land",
        "description": "The New World destination promised by God to Lehi’s family.",
        "relationships": {
            "proximity": ["Bountiful (New World)", "Land of Nephi", "Land of Zarahemla"],
            "direction": {}
        }
    },
    "Land of Nephi": {
        "type": "land",
        "description": "The initial settlement of Nephi and his followers.",
        "relationships": {
            "proximity": ["Land of Zarahemla", "Wilderness"],
            "direction": {"south of": "Land of Zarahemla"}
        }
    },
    "Land of Zarahemla": {
        "type": "land",
        "description": "The central Nephite land discovered by Mosiah.",
        "relationships": {
            "proximity": ["Land of Nephi", "River Sidon", "Land of Bountiful"],
            "direction": {"north of": "Land of Nephi", "south of": "Land of Bountiful"}
        }
    },
    "Land of Shilom": {
        "type": "land",
        "description": "A land near the Land of Nephi settled by Zeniff’s people.",
        "relationships": {
            "proximity": ["Land of Nephi", "Land of Shemlon"],
            "direction": {"near": "Land of Nephi"}
        }
    },
    "Land of Shemlon": {
        "type": "land",
        "description": "A land adjacent to Shilom and Nephi, inhabited by Lamanites.",
        "relationships": {
            "proximity": ["Land of Shilom", "Land of Nephi"],
            "direction": {}
        }
    },
    "Land of Melek": {
        "type": "land",
        "description": "A Nephite land west of the River Sidon where Alma preached.",
        "relationships": {
            "proximity": ["River Sidon", "Land of Ammonihah"],
            "direction": {"west of": "River Sidon"}
        }
    },
    "Land of Ammonihah": {
        "type": "land",
        "description": "A Nephite city known for its wickedness.",
        "relationships": {
            "proximity": ["Land of Melek", "Land of Zarahemla"],
            "direction": {"northwest of": "Land of Zarahemla"}
        }
    },
    "Land of Noah": {
        "type": "land",
        "description": "A Nephite land near Ammonihah, fortified against Lamanite attacks.",
        "relationships": {
            "proximity": ["Land of Ammonihah"],
            "direction": {}
        }
    },
    "Land of Ishmael": {
        "type": "land",
        "description": "A Lamanite land where Ammon preached.",
        "relationships": {
            "proximity": ["Land of Nephi", "Land of Middoni"],
            "direction": {"within": "Land of Nephi"}
        }
    },
    "Land of Middoni": {
        "type": "land",
        "description": "A Lamanite land where Ammon’s brothers were imprisoned.",
        "relationships": {
            "proximity": ["Land of Ishmael", "Land of Nephi"],
            "direction": {"near": "Land of Ishmael"}
        }
    },
    "Land of Jershon": {
        "type": "land",
        "description": "A land given to the Anti-Nephi-Lehies as a refuge.",
        "relationships": {
            "proximity": ["Land of Zarahemla", "East Sea"],
            "direction": {"east of": "Land of Zarahemla", "south of": "Land of Bountiful"}
        }
    },
    "Land of Bountiful (New World)": {
        "type": "land",
        "description": "A fertile Nephite land north of Zarahemla.",
        "relationships": {
            "proximity": ["Land of Zarahemla", "Land of Desolation"],
            "direction": {"north of": "Land of Zarahemla", "south of": "Land of Desolation"}
        }
    },
    "Narrow Strip of Wilderness": {
        "type": "geographical feature",
        "description": "A narrow wilderness separating Nephi from Zarahemla.",
        "relationships": {
            "proximity": ["Land of Nephi", "Land of Zarahemla"],
            "direction": {"south of": "Land of Zarahemla", "north of": "Land of Nephi"}
        }
    },
    "East Sea": {
        "type": "sea",
        "description": "A sea on the eastern border of Nephite lands.",
        "relationships": {
            "proximity": ["Land of Bountiful", "Land of Jershon"],
            "direction": {"east of": "Land of Zarahemla"}
        }
    },
    "West Sea": {
        "type": "sea",
        "description": "A sea on the western border of Nephite lands.",
        "relationships": {
            "proximity": ["Land of Bountiful", "Land of Zarahemla"],
            "direction": {"west of": "Land of Zarahemla"}
        }
    },
    "Land of Nephihah": {
        "type": "land",
        "description": "A Nephite city near the East Sea.",
        "relationships": {
            "proximity": ["East Sea", "Land of Moroni"],
            "direction": {"near": "East Sea"}
        }
    },
    "Land of Moroni": {
        "type": "land",
        "description": "A Nephite city near the East Sea.",
        "relationships": {
            "proximity": ["Land of Nephihah", "East Sea"],
            "direction": {"near": "East Sea"}
        }
    },
    "Land of Lehi": {
        "type": "land",
        "description": "A Nephite land near the East Sea.",
        "relationships": {
            "proximity": ["Land of Morianton", "East Sea"],
            "direction": {"near": "East Sea"}
        }
    },
    "Land of Morianton": {
        "type": "land",
        "description": "A Nephite land near Lehi.",
        "relationships": {
            "proximity": ["Land of Lehi", "East Sea"],
            "direction": {"near": "Land of Lehi"}
        }
    },
    "Narrow Neck of Land": {
        "type": "geographical feature",
        "description": "A narrow isthmus connecting Bountiful to Desolation.",
        "relationships": {
            "proximity": ["Land of Bountiful", "Land of Desolation"],
            "direction": {"north of": "Land of Bountiful", "south of": "Land of Desolation"}
        }
    },
    "Land of Desolation": {
        "type": "land",
        "description": "A northern land once inhabited by Jaredites.",
        "relationships": {
            "proximity": ["Land of Bountiful", "Narrow Neck of Land"],
            "direction": {"north of": "Land of Bountiful"}
        }
    },
    "Hill Manti": {
        "type": "hill",
        "description": "A hill near Zarahemla where Nehor was executed.",
        "relationships": {
            "proximity": ["Land of Zarahemla"],
            "direction": {}
        }
    },
    "Land of Manti": {
        "type": "land",
        "description": "A southern Nephite land near the River Sidon.",
        "relationships": {
            "proximity": ["River Sidon", "Land of Zarahemla"],
            "direction": {"south of": "Land of Zarahemla"}
        }
    },
    "Hill Amnihu": {
        "type": "hill",
        "description": "A hill east of the River Sidon.",
        "relationships": {
            "proximity": ["River Sidon"],
            "direction": {"east of": "River Sidon"}
        }
    },
    "Land of Antionum": {
        "type": "land",
        "description": "A land inhabited by Zoramites.",
        "relationships": {
            "proximity": ["Land of Jershon", "Land of Zarahemla"],
            "direction": {"east of": "Land of Zarahemla"}
        }
    },
    "Hill Riplah": {
        "type": "hill",
        "description": "A hill near Manti where Moroni ambushed the Lamanites.",
        "relationships": {
            "proximity": ["Land of Manti", "River Sidon"],
            "direction": {}
        }
    },
    "Land of Antiparah": {
        "type": "land",
        "description": "A Nephite city captured by Lamanites.",
        "relationships": {
            "proximity": ["Land of Manti"],
            "direction": {"near": "Land of Manti"}
        }
    },
    "Land of Cumeni": {
        "type": "land",
        "description": "A Nephite city captured and retaken by Helaman’s forces.",
        "relationships": {
            "proximity": ["Land of Manti"],
            "direction": {"near": "Land of Manti"}
        }
    },
    "Land of Judea": {
        "type": "land",
        "description": "A southern Nephite land fortified by Helaman’s forces.",
        "relationships": {
            "proximity": ["Land of Manti"],
            "direction": {"near": "Land of Manti"}
        }
    },
    "City of Mulek": {
        "type": "city",
        "description": "A Nephite city near the East Sea.",
        "relationships": {
            "proximity": ["Land of Bountiful", "East Sea"],
            "direction": {"near": "East Sea"}
        }
    },
    "City of Gid": {
        "type": "city",
        "description": "A Nephite city near Bountiful.",
        "relationships": {
            "proximity": ["Land of Bountiful"],
            "direction": {}
        }
    },
    "Land of Joshua": {
        "type": "land",
        "description": "A western Nephite land where Mormon gathered his people.",
        "relationships": {
            "proximity": ["West Sea"],
            "direction": {"near": "West Sea"}
        }
    },
    "Land of David": {
        "type": "land",
        "description": "A Nephite land Mormon’s people retreated to.",
        "relationships": {
            "proximity": ["Land of Joshua"],
            "direction": {}
        }
    },
    "Hill Cumorah": {
        "type": "hill",
        "description": "The hill where the final Nephite battle occurred.",
        "relationships": {
            "proximity": ["Land of Cumorah"],
            "direction": {}
        }
    },
    "Land of Cumorah": {
        "type": "land",
        "description": "The region surrounding Hill Cumorah.",
        "relationships": {
            "proximity": ["Hill Cumorah"],
            "direction": {}
        }
    },
    "Waters of Sebus": {
        "type": "body of water",
        "description": "A water source in Ishmael where Ammon defended flocks.",
        "relationships": {
            "proximity": ["Land of Ishmael"],
            "direction": {}
        }
    },
    "Hill Shim": {
        "type": "hill",
        "description": "A hill where Nephite records were hidden.",
        "relationships": {
            "proximity": ["Land of Antum"],
            "direction": {}
        }
    },
    "Land of Antum": {
        "type": "land",
        "description": "A land containing Hill Shim.",
        "relationships": {
            "proximity": ["Hill Shim"],
            "direction": {}
        }
    },
    "Land of Angola": {
        "type": "land",
        "description": "A Nephite land where Mormon’s people retreated.",
        "relationships": {
            "proximity": ["Land of David"],
            "direction": {}
        }
    },
    "Land of Sherrizah": {
        "type": "land",
        "description": "A land where Lamanites took Nephite prisoners.",
        "relationships": {
            "proximity": [],
            "direction": {}
        }
    },
    "Land of Moriantum": {
        "type": "land",
        "description": "A Nephite land where atrocities occurred.",
        "relationships": {
            "proximity": [],
            "direction": {}
        }
    },
    "Tower of Sherrizah": {
        "type": "tower",
        "description": "A tower in Sherrizah from which Lamanites took prisoners.",
        "relationships": {
            "proximity": ["Land of Sherrizah"],
            "direction": {}
        }
    },
    "Waters of Ripliancum": {
        "type": "body of water",
        "description": "A large body of water where Coriantumr camped.",
        "relationships": {
            "proximity": ["Land of Ogath"],
            "direction": {}
        }
    },
    "Land of Ogath": {
        "type": "land",
        "description": "A land where Shiz’s army camped.",
        "relationships": {
            "proximity": ["Waters of Ripliancum", "Hill Ramah"],
            "direction": {"south of": "Hill Ramah"}
        }
    },
    "Hill Ramah": {
        "type": "hill",
        "description": "A hill where Coriantumr gathered his army.",
        "relationships": {
            "proximity": ["Land of Ogath"],
            "direction": {}
        }
    },
    "Valley of Corihor": {
        "type": "valley",
        "description": "A valley where Shiz pitched his tents.",
        "relationships": {
            "proximity": ["Valley of Shurr", "Hill Comnor"],
            "direction": {}
        }
    },
    "Valley of Shurr": {
        "type": "valley",
        "description": "A valley near Hill Comnor where Coriantumr camped.",
        "relationships": {
            "proximity": ["Hill Comnor", "Valley of Corihor"],
            "direction": {"near": "Hill Comnor"}
        }
    },
    "Hill Comnor": {
        "type": "hill",
        "description": "A hill near the Valley of Shurr.",
        "relationships": {
            "proximity": ["Valley of Shurr", "Valley of Corihor"],
            "direction": {}
        }
    },
    "Land of Corihor": {
        "type": "land",
        "description": "A Jaredite land where early kings ruled.",
        "relationships": {
            "proximity": [],
            "direction": {}
        }
    },
    "Land of Nehor": {
        "type": "land",
        "description": "A Jaredite land where Shule defeated Corihor.",
        "relationships": {
            "proximity": ["Land of Corihor"],
            "direction": {}
        }
    },
    "Land of Heth": {
        "type": "land",
        "description": "A Jaredite land where Jared sought to overthrow his father.",
        "relationships": {
            "proximity": [],
            "direction": {}
        }
    },
    "Land of Moron": {
        "type": "land",
        "description": "A central Jaredite land near Desolation.",
        "relationships": {
            "proximity": ["Land of Desolation"],
            "direction": {"near": "Land of Desolation"}
        }
    },
    "Land of Ablom": {
        "type": "land",
        "description": "A Jaredite land near the East Sea where Omer fled.",
        "relationships": {
            "proximity": ["East Sea"],
            "direction": {"near": "East Sea"}
        }
    },
    "Land of Akish": {
        "type": "land",
        "description": "A Jaredite land named after Akish.",
        "relationships": {
            "proximity": [],
            "direction": {}
        }
    }
};
