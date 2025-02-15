import { PlayerType } from "../../enums/collections/subTypes";

declare global {
  const Encyclopedia: EncyclopediaInterface | undefined;

  /** @noSelf */
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

    AddItem(itemTab: {
      ActiveCharge?: number;
      Class?: string;
      CloseFunc?: (vars: EncyclopediaItemVars) => void;
      Desc?: string;
      Hide?: boolean;
      ID: number;
      ModName?: string;
      Name?: string;
      Pools?: EncyclopediaItemPoolType[];
      Sprite?: Sprite;
      StatusFunc?: (vars: EncyclopediaItemVars) => EncyclopediaItemVars;
      UnlockFunc?: (vars: EncyclopediaItemVars) => EncyclopediaItemVars;
      WikiDesc?: EncyclopediaWikiDescription;
    }): void;

    AddItemPoolSprite(id: number, sprite: Sprite): void;

    AddPocketItem(
      itemTab: {
        Class?: string;
        Desc?: string;
        Hide?: boolean;
        ID: number;
        ModName?: string;
        Name?: string;
        Sprite?: Sprite;
        StatusClose?: (vars: EncyclopediaItemVars) => void;
        StatusFunc?: (vars: EncyclopediaItemVars) => EncyclopediaItemVars;
        UnlockFunc?: (
          vars: EncyclopediaItemVars,
        ) => EncyclopediaItemVars | void;
        WikiDesc?: EncyclopediaWikiDescription;
      },
      eType: string,
    ): void;

    AddRune(itemTab: {
      Class?: string;
      Desc?: string;
      ID: number;
      ModName?: string;
      Name?: string;
      RuneType?: number;
      Sprite?: Sprite;
      StatusClose?: (vars: EncyclopediaItemVars) => void;
      StatusFunc?: (vars: EncyclopediaItemVars) => EncyclopediaItemVars;
      UnlockFunc?: (vars: EncyclopediaItemVars) => EncyclopediaItemVars | void;
      WikiDesc?: EncyclopediaWikiDescription;
    }): void;

    AddTrinket(itemTab: {
      Class?: string;
      Desc?: string;
      Hide?: boolean;
      ID: number;
      ModName?: string;
      Name?: string;
      Sprite?: Sprite;
      StatusClose?: (vars: EncyclopediaItemVars) => void;
      StatusFunc?: (vars: EncyclopediaItemVars) => EncyclopediaItemVars;
      UnlockFunc?: (vars: EncyclopediaItemVars) => EncyclopediaItemVars | void;
      WikiDesc?: EncyclopediaWikiDescription;
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
    clr?: number;
    fsize?: number;
    halign?: number;
    str: string;
  };

  type EncyclopediaWikiDescription = EncyclopediaWikiDescriptionLine[][];

  /** Encyclopedia's "General Item Variables" object. Used to store data about an item. */
  interface EncyclopediaItemVars {
    CloseFunc(vars: EncyclopediaItemVars): void;
    StatusFunc(vars: EncyclopediaItemVars): EncyclopediaItemVars;

    AllIndex?: number;
    AllIntIndex: number;
    Class: string;
    Desc?: string;
    Index?: number;
    ItemID: number;
    Name?: string;
    Pools?: EncyclopediaItemPools;
    Spr: Sprite;
    Title?: string;
    WikiDesc?: EncyclopediaWikiDescription;
    typeString: string;
  }
}
