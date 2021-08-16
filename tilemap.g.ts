// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile17 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile15 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [], -Infinity);
            case "level3":
            case "level3":return tiles.createTilemap(hex`0a000800010404040404040404080205070505050507050902050705050505050509020505050707050507090205050507070505050902050705050505050509020507050505070705090306060606060606060a`, img`
2 2 2 2 2 2 2 2 2 2 
2 . 2 . . . . 2 . 2 
2 . 2 . . . . . . 2 
2 . . . 2 2 . . 2 2 
2 . . . 2 2 . . . 2 
2 . 2 . . . . . . 2 
2 . 2 . . . 2 2 . 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.collectibleInsignia,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouthEast0], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`0a00080001040b0e0e0e0e01040b020510040b0104130d0c0205070511120505050c02050505050505051409080f050a15150f05110b0205050505050505050c020d050514060618050c03060606090e0e030609`, img`
2 2 2 2 2 2 2 2 2 2 
2 . 2 2 2 2 2 2 . 2 
2 . 2 . 2 2 . . . 2 
2 . . . . . . . 2 2 
2 2 . 2 2 2 2 . 2 2 
2 . . . . . . . . 2 
2 . . . 2 2 2 2 . 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.darkGroundSouth,myTiles.tile3,sprites.dungeon.darkGroundNorth,myTiles.tile6,myTiles.tile8,sprites.dungeon.darkGroundSouthEast1,myTiles.tile11,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.darkGroundWest,myTiles.tile2,sprites.dungeon.darkGroundCenter,myTiles.tile7,myTiles.tile9,myTiles.tile13,myTiles.tile14,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundNorthWest0,myTiles.tile15,myTiles.tile16,myTiles.tile17,sprites.dungeon.darkGroundNorthEast0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "tile4":return tile4;
            case "tile5":return tile5;
            case "tile6":return tile6;
            case "tile9":return tile9;
            case "tile10":return tile10;
            case "tile11":return tile11;
            case "tile12":return tile12;
            case "tile3":return tile3;
            case "tile16":return tile16;
            case "tile17":return tile17;
            case "tile13":return tile13;
            case "tile14":return tile14;
            case "tile15":return tile15;
            case "tile7":return tile7;
            case "tile8":return tile8;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
