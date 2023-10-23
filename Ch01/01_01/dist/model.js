var displayName = "Jess's standing desk";
var inventoryType = "furniture";
var trackingNumber = "FD123455";
var createDate = new Date();
var originalCost = 425; // avoid type "any" - use as a last resort only!
originalCost = "a lot of money";
var InventoryItemType;
(function (InventoryItemType) {
    InventoryItemType["SparePart"] = "part";
    InventoryItemType["SpareComponent"] = "component";
})(InventoryItemType || (InventoryItemType = {}));
function getInventoryItem(trackingNumber) {
    return null;
}
function saveInventoryItem(item) { }
var inventoryItem = getInventoryItem(trackingNumber);
var updateInventoryItem = inventoryItem;
inventoryItem.createDate = new Date();
saveInventoryItem({
    displayName: "Wheel Main",
    // inventoryType: InventoryItemType.SparePart,
    inventoryType: "part",
    trackingNumber: "BST32-574-25",
    createDate: new Date(),
    originalCost: 9790,
});
