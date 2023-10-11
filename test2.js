let raw = fs.readFileSync("C:\\LearningTech\\Javascript\\JsPratice\\test1.json");
let itemList = JSON.parse(raw);
let found = false;
for (let item of itemList.averages) {
    if (item.name === this.state.data.item_name) {
        found = true;
        item.count += 1;
    }
}
if (!found) {
    let newItem = {
        name: this.state.data.item_name,
        count: 1,
    }
    itemList.averages.push(newItem);
}
let newRaw = JSON.stringify(itemList);
fs.writeFileSync("C:\\LearningTech\\Javascript\\JsPratice\\jsondata.json", newRaw);