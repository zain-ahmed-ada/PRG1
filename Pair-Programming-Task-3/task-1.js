class ShoppingList {
	constructor() {
		this.shoppingList = [];
	}

	addItem(itemName) {
		this.shoppingList.push(itemName);
		return "Item added to list.";
	}

	getNumItems() {
		return `Number of items on list is: ${this.shoppingList.length}`;
	}

	getListOfItems() {
		for (const shopping of this.shoppingList) {
			console.log(shopping.itemName);
		}
	}

	removeItem(itemName) {
		for (let i = 0; i < this.shoppingList.length; i++) {
			if (itemName === this.shoppingList[i].itemName) {
				let temp = this.shoppingList[i].itemName;
				this.shoppingList.splice(i, 1);
				i--;
				return `${temp} removed from list.`;
			}
		}
	}
}

class ShoppingItem extends ShoppingList {
	#itemName;
	#itemQuantity;

	constructor(itemName, itemQuantity) {
		super(itemName, itemQuantity);
		this.#itemName = itemName;
		this.#itemQuantity = itemQuantity;
	}

	get itemName() {
		return this.#itemName;
	}

	get itemQuantity() {
		return this.#itemQuantity;
	}

	set itemQuantity(itemQuantity) {
		this.#itemQuantity = itemQuantity;
	}
}

let stevesList = new ShoppingList();
let item1 = new ShoppingItem("Milk", 1);
let item2 = new ShoppingItem("Eggs", 6);

console.log(item1.itemName);

console.log((item2.itemQuantity = 12));
console.log(stevesList.addItem(item1));
console.log(stevesList.getNumItems());
console.log(stevesList.addItem(item2));
console.log(stevesList.addItem(new ShoppingItem("Sugar", 2)));
console.log(stevesList.getNumItems());
stevesList.getListOfItems();
console.log(stevesList.removeItem("Milk"));
