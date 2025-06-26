import { AssetManager } from "../../assetForward";
import { Tools } from "@mod-utils/Tools";
import { takeLayerNames } from "../../utils";

// /** @type {TopLeft.Definition} */
// const baseTop = {
//     [PoseType.DEFAULT]: 800,
//     Kneel: 550,
//     KneelingSpread: 550,
// };

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "驷马拘束器",
    ParentGroup: {},
    Random: false,
    Left: 0,
    Top: 0,
    DefaultColor: [],
    PoseMapping: {},
    AllowLock: true,
    Time: 30,
    RemoveTimer: 20,
    SetPose: ["Hogtied"],
    Effect: [E.Freeze, E.Block, E.BlockWardrobe],
    // Hide: ["ClothAccessory", "Necklace", "Socks"],
    AllowActivePose: ["Hogtied"],
    Block: [
        "ItemArms",
        "ItemFeet",
    ],
    Difficulty: 12,
    Layer: [
        { Name: "底座", ColorGroup: "底座", Priority: 1 },
        { Name: "手铐", ColorGroup: "手铐", Priority: 56 },
        { Name: "束带", ColorGroup: "束带", Priority: 56, AllowTypes: { s: [1] } },
        { Name: "束带2", ColorGroup: "束带", Priority: 1, AllowTypes: { s: [1] } },
    ],
};

/** @type {Translation.Dialog} */
const layerNames = {
    CN: {
        ...takeLayerNames(asset),
    },
    EN: {
        底座: "Base",
        手铐: "Handcuffs",
        束带: "Straps",
    },
};

/** @type {ModularItemConfig} */
const extended = {
    Archetype: ExtendedArchetype.MODULAR,
    ChatTags: Tools.CommonChatTags(),
    ChangeWhenLocked: false,
    Modules: [
        {
            Name: "束带",
            Key: "s",
            DrawImages: false,
            Options: [
                {}, // 无
                {  Difficulty: 16 },
            ],
        },
        {
            Name: "下体道具",
            Key: "v",
            DrawImages: false,
            Options: [
                {}, // 无
                { 
                    Difficulty: 16,
                    Prerequisite: ["VulvaEmpty"],
                    Property: {
                        Block: ["ItemVulva"],
                        Intensity: 2,
                        Effect: ["Egged"],
                    },
                },
                { 
                    Difficulty: 16,
                    Prerequisite: ["VulvaEmpty"],
                    Property: {
                        Block: ["ItemVulva"],
                        Intensity: 3,
                        Effect: ["Egged", "Vibrating"],
                    },
                },
            ],
        },
    ],
};

/** @type {Translation.Entry} */
const translation = {
    CN: "驷马拘束器",
    EN: "Buret Stand",
};

/** @type {Translation.Dialog} */
const assetDialogs = {
    CN: {
        SelectBase: "选择驷马拘束器设置",
        Module束带: "束带",
        Module下体道具: "下体道具",

        Select束带: "选择驷马拘束器束带样式",
        Options0: "无",
        Options1: "有",

        Sets0: "SourceCharacter将DestinationCharacterAssetName的束带全部解开了。",
        Sets1: "SourceCharacter将DestinationCharacterAssetName的束带全部收到了最紧。",

        Select下体道具: "选择驷马拘束器下体道具",
        Optionv0: "无",
        Optionv1: "金属棒状物",
        Optionv2: "震动假阳具",
        Setv0: "SourceCharacter解开DestinationCharacterAssetName上的横枷，解放了DestinationCharacter双手。",
        Setv1: "SourceCharacter将DestinationCharacterAssetName的横枷锁上，让DestinationCharacter双手失去自由。",
    },
    EN: {
        
    },
};

export default function () {
    AssetManager.addAssetWithConfig("ItemDevices", asset, {
        extended,
        layerNames,
        translation,
        assetDialogs,
    });
}
