class FoodApp {
  constructor() {
    this.foodList = [];
    this.firstSetup();
  }

  firstSetup() {
    this.loadFromLocalStorage();
    this.firstFoodList();
    this.setupEventListeners();
  }

  setupEventListeners() {
    const addFoodButton = document.getElementById('addFood');
    addFoodButton.addEventListener('click', () => this.addFood());
  }

  addFood() {
    const foodNameInput = document.getElementById('foodName');
    const foodName = foodNameInput.value.trim();
    if (foodName !== '') {
      this.foodList.push(foodName);
      foodNameInput.value = '';
      this.saveToLocalStorage();
      this.firstFoodList();
    }
  }

  firstFoodList() {
    const foodListContainer = document.getElementById('foodList');
    foodListContainer.innerHTML = '';
    this.foodList.forEach(food => {
      const listItem = document.createElement('li');
      listItem.textContent = food;
      foodListContainer.appendChild(listItem);
    });
  }

  saveToLocalStorage() {
    localStorage.setItem('foodList', JSON.stringify(this.foodList));
  }

  loadFromLocalStorage() {
    const savedFoodList = localStorage.getItem('foodList');
    if (savedFoodList) {
      this.foodList = JSON.parse(savedFoodList);
    }
  }
}

const app = new FoodApp();