// ==UserScript==
// @name         Cookie Clicker Scripts
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  scripts for cookie clicker
// @author       You
// @match        http://orteil.dashnet.org/cookieclicker/
// @match        https://orteil.dashnet.org/cookieclicker/
// @grant        none
// ==/UserScript==

(function ccs() {
    'use strict';

    const CURSOR = 'Cursor';
    const GRANDMA = 'Grandma';
    const FARM = 'Farm';
    const MINE = 'Mine';
    const FACTORY = 'Factory';
    const BANK = 'Bank';
    const TEMPLE = 'Temple';
    const WIZARD = 'Wizard tower';
    const SHIPMENT = 'Shipment';
    const ALCHEMY = 'Alchemy lab';
    const PORTAL = 'Portal';
    const TIME = 'Time machine';
    const ANTI = 'Antimatter condenser';
    const PRISM = 'Prism';
    const CHANCE = 'Chancemaker';

    const UPGRADES = {
        cookies: {
            f_calculate: calculateCookieUpgradeCps,
        },
        double: {
            f_calculate: calculateDoubleUpgradeCps,
            'Reinforced index finger' : CURSOR,
            'Carpal tunnel prevention cream' : CURSOR,
            'Ambidextrous' : CURSOR,

            'Forwards from grandma' : GRANDMA,
            'Steel-plated rolling pins' : GRANDMA,
            'Lubricated dentures' : GRANDMA,
            'Prune juice' : GRANDMA,
            'Double-thick glasses' : GRANDMA,
            'Aging agents' : GRANDMA,
            'Xtreme walkers' : GRANDMA,
            'The unbridling' : GRANDMA,
            'Reverse dementia' : GRANDMA,
            'Ritual rolling pins' : GRANDMA,
            'Naughty list' : GRANDMA,

            'Cheap hoes' : FARM,
            'Fertilizer' : FARM,
            'Cookie trees' : FARM,
            'Genetically-modified cookies' : FARM,
            'Gingerbread scarecrows' : FARM,
            'Pulsar sprinklers' : FARM,
            'Fudge fungus' : FARM,
            'Wheat triffids' : FARM,
            'Humane pesticides' : FARM,

            'Sugar gas' : MINE,
            'Megadrill' : MINE,
            'Ultradrill' : MINE,
            'Ultimadrill' : MINE,
            'H-bomb mining' : MINE,
            'Coreforge' : MINE,
            'Planetsplitters' : MINE,
            'Canola oil wells' : MINE,
            'Mole people' : MINE,

            'Sturdier conveyor belts' : FACTORY,
            'Child labor' : FACTORY,
            'Sweatshop' : FACTORY,
            'Radium reactors' : FACTORY,
            'Recombobulators' : FACTORY,
            'Deep-bake process' : FACTORY,
            'Cyborg workforce' : FACTORY,
            '78-hour days' : FACTORY,
            'Machine learning' : FACTORY,

            'Taller tellers' : BANK,
            'Scissor-resistant credit cards' : BANK,
            'Acid-proof vaults' : BANK,
            'Chocolate coins' : BANK,
            'Exponential interest rates' : BANK,
            'Financial zen' : BANK,
            'Way of the wallet' : BANK,
            'The stuff rationale' : BANK,
            'Edible money' : BANK,

            'Golden idols' : TEMPLE,
            'Sacrifices' : TEMPLE,
            'Delicious blessing' : TEMPLE,
            'Sun festival' : TEMPLE,
            'Enlarged pantheon' : TEMPLE,
            'Great Baker in the sky' : TEMPLE,
            'Creation myth' : TEMPLE,
            'Theocracy' : TEMPLE,
            'Sick rap prayers' : TEMPLE,

            'Pointier hats' : WIZARD,
            'Beardlier beards' : WIZARD,
            'Ancient grimoires' : WIZARD,
            'Kitchen curses' : WIZARD,
            'School of sorcery' : WIZARD,
            'Dark formulas' : WIZARD,
            'Cookiemancy' : WIZARD,
            'Rabbit trick' : WIZARD,
            'Deluxe tailored wands' : WIZARD,

            'Vanilla nebulae' : SHIPMENT,
            'Wormholes' : SHIPMENT,
            'Frequent flyer' : SHIPMENT,
            'Warp drive' : SHIPMENT,
            'Chocolate monoliths' : SHIPMENT,
            'Generation ship' : SHIPMENT,
            'Dyson sphere' : SHIPMENT,
            'The final frontier' : SHIPMENT,
            'Autopilot' : SHIPMENT,

            'Antimony' : ALCHEMY,
            'Essence of dough' : ALCHEMY,
            'True chocolate' : ALCHEMY,
            'Ambrosia' : ALCHEMY,
            'Aqua crustulae' : ALCHEMY,
            'Origin crucible' : ALCHEMY,
            'Theory of atomic fluidity' : ALCHEMY,
            'Beige goo' : ALCHEMY,
            'The advent of chemistry' : ALCHEMY,

            'Ancient tablet' : PORTAL,
            'Insane oatling workers' : PORTAL,
            'Soul bond' : PORTAL,
            'Sanity dance' : PORTAL,
            'Brane transplant' : PORTAL,
            'Deity-sized portals' : PORTAL,
            'End of times back-up plan' : PORTAL,
            'Maddening chants' : PORTAL,
            'The real world' : PORTAL,

            'Flux capacitors' : TIME,
            'Time paradox resolver' : TIME,
            'Quantum conundrum' : TIME,
            'Causality enforcer' : TIME,
            'Yestermorrow comparators' : TIME,
            'Far future enactment' : TIME,
            'Great loop hypothesis' : TIME,
            'Cookietopian moments of maybe' : TIME,
            'Second seconds' : TIME,

            'Sugar bosons' : ANTI,
            'String theory' : ANTI,
            'Large macaron collider' : ANTI,
            'Big bang bake' : ANTI,
            'Reverse cyclotrons' : ANTI,
            'Nanocosmics' : ANTI,
            'The Pulse' : ANTI,
            'Some other super-tiny fundamental particle? Probably?' : ANTI,
            'Quantum comb' : ANTI,

            'Gem polish' : PRISM,
            '9th color' : PRISM,
            'Chocolate light' : PRISM,
            'Grainbow' : PRISM,
            'Pure cosmic light' : PRISM,
            'Glow-in-the-dark' : PRISM,
            'Lux sanctorum' : PRISM,
            'Reverse shadows' : PRISM,
            'Crystal mirrors' : PRISM,

            'Your lucky cookie' : CHANCE,
            '"All Bets Are Off" magic coin' : CHANCE,
            'Winning lottery ticket' : CHANCE,
            'Four-leaf clover field' : CHANCE,
            'A recipe book about books' : CHANCE,
            'Leprechaun village' : CHANCE,
            'Improbability drive' : CHANCE,
            'Antisuperstistronics' : CHANCE,
            'Bunnypedes' : CHANCE
        },
        multiplier: {
            f_calculate: calculateMultiplierCps,
            'Bingo center/Research facility': {
                base : GRANDMA,
                multiplier : 4
            },
        },
        heavenly: {
            f_calculate: calculateHeavenlyUpgradeCps,
            'Heavenly chip secret' : 0.05,
            'Heavenly cookie stand' : 0.2,
            'Heavenly bakery' : 0.25,
            'Heavenly confectionery' : 0.25,
            'Heavenly key' : 0.25,
        },
        cursor: {
            f_calculate: calculateCursorUpgradeCps,
            'Thousand fingers' : 0.1,
            'Million fingers' : 0.5,
            'Billion fingers' : 5,
            'Trillion fingers' : 50,
            'Quadrillion fingers' : 500,
            'Quintillion fingers' : 5000,
            'Sextillion fingers' : 50000,
            'Septillion fingers' : 500000,
            'Octillion fingers' : 5000000,
        },
        grandma: {
            f_calculate: calculateGrandmaUpgradeCps,
            'Farmer grandmas' : {
                gma_count: 1,
                building: FARM
            },
            'Miner grandmas' : {
                gma_count: 2,
                building: MINE
            },
            'Worker grandmas' : {
                gma_count: 3,
                building: FACTORY
            },
            'Banker grandmas' : {
                gma_count: 4,
                building: BANK
            },
            'Priestess grandmas' : {
                gma_count: 5,
                building: TEMPLE
            },
            'Witch grandmas' : {
                gma_count: 6,
                building: WIZARD
            },
            'Cosmic grandmas' : {
                gma_count: 7,
                building: SHIPMENT
            },
            'Transmuted grandmas' : {
                gma_count: 8,
                building: ALCHEMY
            },
            'Altered grandmas' : {
                gma_count: 9,
                building: PORTAL
            },
            'Grandmas\' grandmas' : {
                gma_count: 10,
                building: TIME
            },
            'Antigrandmas' : {
                gma_count: 11,
                building: ANTI
            },
            'Rainbow grandmas' : {
                gma_count: 12,
                building: PRISM
            },
            'Lucky grandmas' : {
                gma_count: 13,
                building: CHANCE
            },
        },
        kitten: {
            f_calculate: calculateKittenUpgradeCps,
            'Kitten helpers' : 0.1,
            'Kitten workers' : 0.125,
            'Kitten engineers' : 0.15,
            'Kitten overseers' : 0.175,
            'Kitten managers' : 0.2,
            'Kitten accountants' : 0.2,
            'Kitten specialists' : 0.2,
            'Kitten experts' : 0.2,
            'Kitten consultants' : 0.2,
            'Kitten assistants to the regional manager' : 0.2,
        },
        production: {
            f_calculate: calculateProductionUpgradeCps,
            'Specialized chocolate chips' : 0.01,
            'Designer cocoa beans' : 0.02,
            'Underworld ovens' : 0.03,
            'Exotic nuts' : 0.04,
            // EASTER EGGS
            'Chicken egg' : 0.01,
            'Duck egg' : 0.01,
            'Turkey egg' : 0.01,
            'Quail egg' : 0.01,
            'Robin egg' : 0.01,
            'Ostrich egg' : 0.01,
            'Cassowary egg' : 0.01,
            'Salmon roe' : 0.01,
            'Frogspawn' : 0.01,
            'Shark egg' : 0.01,
            'Turtle egg' : 0.01,
            'Ant larva' : 0.01,
        },
        synergy: {
            f_calculate: calculateSynergyUpgradeCps,
            'Future almanacs' : {
                base : FARM,
                synergy : TIME
            },
            'Rain prayer' : {
                base : FARM,
                synergy : TEMPLE
            },
            'Seismic magic' : {
                base : MINE,
                synergy : WIZARD
            },
            'Asteroid mining' : {
                base : MINE,
                synergy : SHIPMENT
            },
            'Quantum electronics' : {
                base : FACTORY,
                synergy : ANTI
            },
            'Temporal overclocking' : {
                base : FACTORY,
                synergy : TIME
            },
            'Contracts from beyond' : {
                base : BANK,
                synergy : PORTAL
            },
            'Printing presses' : {
                base : BANK,
                synergy : FACTORY
            },
            'Paganism' : {
                base : TEMPLE,
                synergy : PORTAL
            },
            'God particle' : {
                base : TEMPLE,
                synergy : ANTI
            },
            'Arcane knowledge' : {
                base : WIZARD,
                synergy : ALCHEMY
            },
            'Magical botany' : {
                base : FARM,
                synergy : WIZARD
            },
            'Fossil fuels' : {
                base : MINE,
                synergy : SHIPMENT
            },
            'Primordial ores' : {
                base : MINE,
                synergy : ALCHEMY
            },
            'Gold fund' : {
                base : BANK,
                synergy : ALCHEMY
            },
            'Infernal crops' : {
                base : FARM,
                synergy : PORTAL
            },
            'Abysmal glimmer' : {
                base : PORTAL,
                synergy : PRISM
            },
            'Relativistic parsec-skipping' : {
                base : SHIPMENT,
                synergy : TIME
            },
            'Primeval glow' : {
                base : TIME,
                synergy : PRISM
            },
            'Extra physics funding' : {
                base : BANK,
                synergy : ANTI
            },
            'Chemical proficiency' : {
                base : ALCHEMY,
                synergy : ANTI
            },
            'Light magic' : {
                base : WIZARD,
                synergy : PRISM
            },
            'Mystical energies' : {
                base : TEMPLE,
                synergy : PRISM
            },
            'Shipyards' : {
                base : FACTORY,
                synergy : SHIPMENT
            },
            'Gemmed talismans' : {
                base : MINE,
                synergy : CHANCE
            },
            'Charm quarks' : {
                base : ANTI,
                synergy : CHANCE
            },
        },
        constant: {
            f_calculate: calculateConstantCps,
            'Milk selector': 0,
            'Communal brainsweep': 0,
            'Ghostly biscuit': 0,
            'Festive biscuit': 0,
            'Lovesick biscuit': 0,
            'Fool\'s biscuit': 0,
            'Bunny biscuit': 0,
            'Chocolate egg': 0,
            'Cookie egg': 0,
            'Golden switch [off]': 0,
            'Golden switch [on]': 0,
            'Golden cookie sound selector': 0,
            'Background selector': 0,

            'Golden goose egg': Infinity,
            'Faberge egg': Infinity,
            'Wrinklerspawn': Infinity,
            'Omelette': Infinity,
            'Century egg': Infinity,
        },
    }

    function getSynergyBonus( buildingName ) {
        let synergyBonus = 0;

        for( const synergy in UPGRADES.synergy ) {
            if( typeof UPGRADES.synergy[synergy] === "function" ) continue;
            if( Game.Upgrades[synergy].bought === 1 ) {
                if( UPGRADES.synergy[synergy].base === buildingName ) {
                    const building = Game.Objects[UPGRADES.synergy[synergy].synergy];
                    const other = Game.Objects[UPGRADES.synergy[synergy].base];
                    synergyBonus += cpsForAllOfBuilding(building) / (1 + 0.001 * other.amount) * 0.001;
                } else if( UPGRADES.synergy[synergy].synergy === buildingName ) {
                    const building = Game.Objects[UPGRADES.synergy[synergy].base];
                    const other = Game.Objects[UPGRADES.synergy[synergy].synergy];
                    synergyBonus += cpsForAllOfBuilding(building) / (1 +  0.05 * other.amount) * 0.05;
                }
            }
        }
        return synergyBonus;
    }

    function getCursorBonus() {
        let upgradeBonus = 0;

        for( const cursorUpgrade in UPGRADES.cursor ) {
            if( typeof UPGRADES.cursor[cursorUpgrade] === "function" ) continue;
            if( Game.Upgrades[cursorUpgrade].bought === 1 ) {
                upgradeBonus += UPGRADES.cursor[cursorUpgrade];
            }
        }

        return Game.Objects[CURSOR].amount * upgradeBonus;
    }

    function cpsForBuilding( building ) {
        return building.cps( building ) * Game.globalCpsMult;
    }

    function cpsForAllOfBuilding( building ) {
        return cpsForBuilding( building ) * building.amount;
    }

    function insertAfter( e, r ) {
        r.parentNode.insertBefore( e, r.nextSibling );
    }

    function sortBuildings() {
        const storeBulk = document.getElementById( "storeBulk" );
        const buildingsDom = document.getElementsByClassName( "product" );
        const buildingsArr = [];

        for( let i = 0; i < buildingsDom.length; i++ ) {
            buildingsArr.push( buildingsDom[i] );
        }

        buildingsArr.sort( function( a, b ) {
            const aIndex = parseFloat( a.getAttribute("data-time-index") );
            const bIndex = parseFloat( b.getAttribute("data-time-index") );

            return bIndex - aIndex;
        });

        buildingsArr.forEach(function(e) {
            insertAfter( e, storeBulk );
        });
    }

    function calculateCookieUpgradeCps( upgrade ) {
        return upgrade.power * Game.cookiesPs / 100;
    }

    function calculateHeavenlyUpgradeCps( upgrade ) {
        return Game.cookiesPs * ( Game.prestige / 100 ) * UPGRADES.heavenly[upgrade.name];
    }

    function calculateDoubleUpgradeCps( upgrade ) {
        const buildingName = UPGRADES.double[upgrade.name];
        return 2 * cpsForAllOfBuilding( Game.Objects[buildingName] );
    }

    function calculateMultiplierCps( upgrade ) {
        const m = UPGRADES.multiplier[upgrade.name]
        return cpsForAllOfBuilding( Game.Objects[m.base] ) * m.multiplier
    }

    function calculateCursorUpgradeCps( upgrade ) {
        let count = 0;
        for( const building in Game.Objects ) {
            if( building !== CURSOR ) {
                count += Game.Objects[building].amount;
            }
        }

        return Game.Objects[CURSOR].amount * count * UPGRADES.cursor[upgrade.name];
    }

    function calculateGrandmaUpgradeCps( upgrade ) {
        const gma = UPGRADES.grandma[upgrade.name];
        const modifier = Math.pow( 0.01, Game.Objects[GRANDMA].amount / gma.gma_count );
        const gma_cps = cpsForAllOfBuilding( Game.Objects[GRANDMA] );
        const other_cps = cpsForAllOfBuilding( Game.Objects[gma.building] );

        return  other_cps * modifier + gma_cps * 2;
    }

    function calculateKittenUpgradeCps( upgrade ) {
        return (1 + Game.milkProgress * UPGRADES.kitten[upgrade.name]) * Game.cookiesPs;
    }

    function calculateProductionUpgradeCps( upgrade ) {
        return (1 + UPGRADES.production[upgrade.name]) * Game.cookiesPs;
    }

    function calculateSynergyUpgradeCps( upgrade ) {
        const synergy = UPGRADES.synergy[upgrade.name];
        return ( 0.05 * Game.Objects[synergy.synergy].amount) * cpsForAllOfBuilding( Game.Objects[synergy.base] ) +
               (0.001 * Game.Objects[synergy.base].amount) * cpsForAllOfBuilding( Game.Objects[synergy.synergy] );
    }

    function calculateConstantCps( upgrade ) {
        return UPGRADES.constant[upgrade.name]
    }

    function calculateUpgradeCps() {
        const gameCps = Game.cookiesPs;
        let arr = [];

        for ( const upgradeName in Game.Upgrades ) {

            const upgrade = Game.Upgrades[upgradeName];

            if ( upgrade.unlocked === 1 && upgrade.bought === 0 ) {
                let cps = NaN;
                let found = false;

                for ( const upgradeMetaProperty in UPGRADES ) {
                    const upgradeMeta = UPGRADES[upgradeMetaProperty]
                    if ( upgradeMeta.hasOwnProperty(upgradeName) ) {
                        cps = upgradeMeta.f_calculate( upgrade );
                        found = true;
                        break;
                    }
                }

                let cost = upgrade.getPrice();
                if(
                    UPGRADES.constant.hasOwnProperty(upgradeName) &&
                    UPGRADES.constant[upgradeName] === 0 &&
                    cost <= 0
                ) {
                    cost = 1;
                }
                const costDiff = cost - Game.cookies;
                const timeToPurchasable = Math.max( 0, costDiff / gameCps );
                const timeIndex = cost / cps + timeToPurchasable;

                arr.push({
                    name: upgradeName,
                    type: 'Upgrade',
                    id: upgrade.id,
                    cost: cost,
                    cps: cps,
                    ttp: timeToPurchasable,
                    ti : timeIndex,
                    synBonus : 0
                });
            }
        }

        return arr;
    }

    function calculateBuildingCps() {
        let arr = [];

        const gameCps = Game.cookiesPs;

        for( const building in Game.Objects ) {
            const buildingId = Game.Objects[building].id;

            let cps = cpsForBuilding( Game.Objects[building] );
            if( CURSOR !== building ) {
                cps += getCursorBonus();
            }
            const synBonus = getSynergyBonus( building );
            cps += synBonus;

            const cost = Game.Objects[building].getPrice();
            const costDiff = cost - Game.cookies;
            const timeToPurchasable = Math.max( 0, costDiff / gameCps );

            const timeIndex = cost / cps + timeToPurchasable;

            const buildingDomElement = document.getElementById( "product" + buildingId );
            buildingDomElement.setAttribute( "data-time-index", timeIndex );

            arr.push({
                name: building,
                type: 'Building',
                id: buildingId,
                cost: cost,
                cps: cps,
                ttp: timeToPurchasable,
                ti : timeIndex,
                synBonus : synBonus
            });
        }

        return arr;
    }

    function calculateMiscCps() {
        const chipsOwned=Math.floor(Game.HowMuchPrestige(Game.cookiesReset));
        const ascendNowToOwn = Math.floor( Game.HowMuchPrestige( Game.cookiesReset + Game.cookiesEarned ) );
        const chips = ascendNowToOwn - chipsOwned;

        const cost = Game.cookiesEarned;
        const cps = Math.max( ( Game.cookiesPs * (chips / 100.0 ) / ( chipsOwned / 100) ) -  Game.cookiesPs, 0 );

        const date = new Date();
        date.setTime(Date.now()-Game.startDate);
        const timeToPurchasable = date.getTime() / 1000;
        const timeIndex = cost / cps;

        return [{
            name: 'Go to cookie Heaven',
            type: 'Ascend',
            id: 0,
            cost: cost,
            cps: cps,
            ttp: timeToPurchasable,
            ti : timeIndex,
            synBonus : 0
        }];
    }

    window.prettyPrintTime = function prettyPrintTime( time ) {
        if( isNaN( time ) ) return 'NaN';
        if( Infinity === time ) return 'Infinite';

        let outTime = "";

        // DAYS
        if( time > 86400 )
            outTime += Math.floor( time / 86400 ) + 'd ';
        // HOURS
        if( time > 3600 && 0 !== Math.floor( time / 3600 ) % 24 )
            outTime += Math.floor( time / 3600 ) % 24 + 'h ';
        // MINUTES
        if( time > 60 && 0 !== Math.floor( time / 60 ) % 60 )
            outTime += Math.floor( time / 60 ) % 60 + 'm ';
        // SECONDS
        if( time < 60 || 0 !== Math.floor( time ) % 60 )
            outTime += Math.floor( time ) % 60 + 's';

        return outTime;
    };

    function calculateAllCps() {
        var arr = calculateBuildingCps();
        arr = arr.concat( calculateUpgradeCps() );
        arr = arr.concat( calculateMiscCps() );

        arr.sort( function( a, b ) {
            if( isNaN( a.ti ) && isNaN( b.ti ) ) return 0;
            if( isNaN( a.ti ) ) return -1;
            if( isNaN( b.ti ) ) return 1;
            return a.ti - b.ti;
        });

        let html = '<table><tr><th>Name</th><th>Type</th><th>ID</th><th>cost</th><th>syn bonus</th><th>cps</th><th>TTP</th><th>Time Index</th></tr>';

        arr.forEach(function(t) {
            html += '<tr><td>' + t.name + '</td><td>' +
                t.type + '</td><td>' +
                t.id + '</td><td>' +
                Beautify( t.cost ) + '</td><td>' +
                Beautify( t.synBonus ) + '</td><td>' +
                Beautify( t.cps ) + '</td><td>' +
                prettyPrintTime( t.ttp ) + '</td><td>' +
                prettyPrintTime( t.ti ) + '</td></tr>';
        });

        html += '</table><style> td { padding: 0 5px; }</style>';

        document.getElementById( 'planning' ).innerHTML = html;
    }

    let ready = false;
    let cookieUpgradesInit = false;

    function drawTable() {
        const element = document.getElementById( 'game' );
        element.style.bottom = '300px';

        const table = document.createElement('div');
        table.setAttribute("id", "planning");

        insertAfter( table, element );

        table.style.position = 'absolute';
        table.style.bottom = '0px';
        table.style.left = '0px';
        table.style.right = '0px';
        table.style['overflow-y'] = 'auto';
        table.style['overflow-x'] = 'hidden';
        table.style['min-height'] = '300px';
        table.style['max-height'] = '300px';

        ready = true;
    }

    function tick() {
        if( ready ) {
            if (!cookieUpgradesInit) {
                for (const u in Game.Upgrades) {
                    const upgrade = Game.Upgrades[u]
                    if (upgrade.pool === 'cookie') {
                        UPGRADES.cookies[u] = 0
                    }
                }
                cookieUpgradesInit = true
            }

            calculateAllCps();
            sortBuildings();

            // Pop golden cookies
            Game.shimmers.forEach(function(shimmer){shimmer.pop();});
        } else if( undefined !== Game && 1 === Game.ready ) {
            drawTable();
        }
    }

    setInterval( tick, 1000 );
})();
