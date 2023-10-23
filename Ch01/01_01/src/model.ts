let displayName: string = "Jess's standing desk";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD123455";
let createDate: Date = new Date();
let originalCost = 425 as any; // avoid type "any" - use as a last resort only!
originalCost = "a lot of money";

enum InventoryItemType {
    SparePart = "part",
    SpareComponent = "component",
}

interface InventoryItem {
    displayName: string;
    // inventoryType: InventoryItemType;
    inventoryType: "part" | "component";
    trackingNumber: string;
    createDate: Date;
    originalCost?: number;

    addNote?: (note: string) => string;
}

function getInventoryItem(trackingNumber: string): InventoryItem {
    return null;
}

function saveInventoryItem(item: InventoryItem) {}

let inventoryItem = getInventoryItem(trackingNumber);

let updateInventoryItem = inventoryItem;

inventoryItem.createDate = new Date();

saveInventoryItem({
    displayName: "Wheel Main",
    // inventoryType: InventoryItemType.SparePart,
    inventoryType: "part",
    trackingNumber: "BST32-574-25",
    createDate: new Date(),
    originalCost: 9790,
});
