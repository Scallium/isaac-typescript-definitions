import { PlayerType } from "../../enums/collections/subTypes";

declare global {
  const Encyclopedia: EncyclopediaInterface | undefined;

  interface EncyclopediaInterface {
    AddCharacter(args: {
      CompletionTrackerFuncs: [() => EncyclopediaItemVars[]];
      ID: PlayerType;
      ModName: string;
      Name: string;
    }): void;

    AddCharacterTainted(args: {
      CompletionTrackerFuncs: [() => EncyclopediaItemVars[]];
      Description: string;
      ID: PlayerType;
      ModName: string;
      Name: string;
      UnlockFunc: (args: EncyclopediaItemVars) => EncyclopediaItemVars;
    }): void;

    /** @noSelf */
    AddItem(itemTab: {
      ActiveCharge: number | undefined;
      Class: string | undefined;
      CloseFunc: undefined | ((vars: EncyclopediaItemVars) => void);
      Desc: string | undefined;
      Hide: boolean | undefined;
      ID: number;
      ModName: string | undefined;
      Name: string | undefined;
      Pools: int[] | undefined;
      Sprite: Sprite | undefined;
      StatusFunc:
        | undefined
        | ((vars: EncyclopediaItemVars) => EncyclopediaItemVars);
      UnlockFunc:
        | undefined
        | ((vars: EncyclopediaItemVars) => EncyclopediaItemVars);
      WikiDesc: EncyclopediaWikiDescription | undefined;
    }): void;

    AddItemPoolSprite(id: number, sprite: Sprite): void;

    AddPocketItem(
      itemTab: {
        Class: string | undefined;
        Desc: string | undefined;
        Hide: boolean | undefined;
        ID: number;
        ModName: string | undefined;
        Name: string | undefined;
        Sprite: Sprite | undefined;
        StatusClose: ((vars: EncyclopediaItemVars) => void) | undefined;
        StatusFunc:
          | ((vars: EncyclopediaItemVars) => EncyclopediaItemVars)
          | undefined;
        UnlockFunc:
          | ((vars: EncyclopediaItemVars) => EncyclopediaItemVars | void)
          | undefined;
        WikiDesc: EncyclopediaWikiDescription | undefined;
      },
      eType: string,
    ): void;

    /** @noSelf */
    AddRune(itemTab: {
      Class: string;
      Desc: string | undefined;
      ID: number;
      ModName: string | undefined;
      Name: string | undefined;
      RuneType: number;
      Sprite: Sprite | undefined;
      StatusClose: (vars: EncyclopediaItemVars) => void;
      StatusFunc: (vars: EncyclopediaItemVars) => EncyclopediaItemVars;
      UnlockFunc:
        | ((vars: EncyclopediaItemVars) => EncyclopediaItemVars | void)
        | undefined;
      WikiDesc: EncyclopediaWikiDescription | undefined;
    }): void;

    AddTrinket(itemTab: {
      Class: string | undefined;
      Desc: string | undefined;
      Hide: boolean | undefined;
      ID: number;
      ModName: string | undefined;
      Name: string | undefined;
      Sprite: Sprite | undefined;
      StatusClose: ((vars: EncyclopediaItemVars) => void) | undefined;
      StatusFunc:
        | ((vars: EncyclopediaItemVars) => EncyclopediaItemVars)
        | undefined;
      UnlockFunc:
        | ((vars: EncyclopediaItemVars) => EncyclopediaItemVars | void)
        | undefined;
      WikiDesc: EncyclopediaWikiDescription | undefined;
    }): void;

    EIDtoWiki(desc: string, title?: string): void;

    GetItemPoolIdByName(name: string): number;

    RegisterSprite(
      gfxRoot: string,
      anmToPlay: string,
      anmFrame: number,
      newSprite: string,
      layer: number,
    ): Sprite;
    ItemPools: int;
  }

  /**
   * Contains Encyclopedia's custom item pool system. It uses custom item pools in order to allow
   * better compatibility with modded pools. The same as the ItemPoolType enum, but every pool is 1
   * value higher, "to handle table indices better".
   */
  type EncyclopediaItemPools = Record<string, number>;

  const enum EncyclopediaItemPoolType {
    POOL_TREASURE = 1,
    POOL_SHOP = 2,
    POOL_BOSS = 3,
    POOL_DEVIL = 4,
    POOL_ANGEL = 5,
    POOL_SECRET = 6,
    POOL_ENCYCLOPEDIARARY = 7,
    POOL_SHELL_GAME = 8, // unused (for now)
    POOL_GOLDEN_CHEST = 9,
    POOL_RED_CHEST = 10,
    POOL_BEGGAR = 11,
    POOL_DEMON_BEGGAR = 12,
    POOL_CURSE = 13,
    POOL_KEY_MASTER = 14,
    POOL_BATTERY_BUM = 15,
    POOL_MOMS_CHEST = 16,

    POOL_GREED_TREASURE = 17,
    POOL_GREED_BOSS = 18,
    POOL_GREED_SHOP = 19,
    POOL_GREED_DEVIL = 20,
    POOL_GREED_ANGEL = 21,
    POOL_GREED_CURSE = 22,
    POOL_GREED_SECRET = 23,

    POOL_CRANE_GAME = 24,
    POOL_ULTRA_SECRET = 25, // unused
    POOL_BOMB_BUM = 26,
    POOL_PLANETARIUM = 27,
    POOL_OLD_CHEST = 28,
    POOL_BABY_SHOP = 29,
    POOL_WOODEN_CHEST = 30,
    POOL_ROTTEN_BEGGAR = 31,

    NUM_ITEMPOOLS = 31,
  }

  /**
   * A description for an item. Each object in the array is a category, containing a header and as
   * many paragraphs as are needed.
   */

  type EncyclopediaWikiDescriptionLine = {
    clr: number | undefined;
    fsize: number | undefined;
    halign: number | undefined;
    str: string;
  };

  type EncyclopediaWikiDescription = EncyclopediaWikiDescriptionLine[][];

  /** Encyclopedia's "General Item Variables" object. Used to store data about an item. */
  interface EncyclopediaItemVars {
    CloseFunc(vars: EncyclopediaItemVars): void;
    StatusFunc(vars: EncyclopediaItemVars): EncyclopediaItemVars;

    AllIndex: number | undefined;
    AllIntIndex: number;
    Class: string;
    Desc: string | undefined;
    Index: number | undefined;
    ItemID: number;
    Name: string | undefined;
    Pools: int | undefined;
    Spr: Sprite;
    Title: string | undefined;
    WikiDesc: EncyclopediaWikiDescription | undefined;
    typeString: string;
  }
}
