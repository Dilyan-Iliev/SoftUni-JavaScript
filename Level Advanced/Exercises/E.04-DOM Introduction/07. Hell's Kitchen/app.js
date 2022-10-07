function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      // let input = JSON.parse(document.querySelector('#inputs textarea').value);
      // let bestRestaurantInfo = document.querySelector('#bestRestaurant p');
      // let bestRestaurantWorker = document.querySelector('#workers p');

      // let result = [];
      // for (const line of input) {
      //    let [name, employers] = line.split(' - ');

      //    if (!result.find(e => e.name == name)) {
      //       result.push({
      //          name,
      //          avgSalary: 0,
      //          bestSalary: 0,
      //          sumSalary: 0,
      //          workerList: []
      //       });
      //    }
      //    let currentRestaurant = result.find(e => e.name == name);
      //    workerList = workerList && workerList.split(', ');

      //    for (const currentWorker of employers) {
      //       updateRestaurant(currentRestaurant, currentWorker);
      //    }

      // }

      // let bestRestaurant = result.sort((a, b) => b.avgSalary - a.avgSalary)[0];

      // bestRestaurantInfo.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;

      // let sortListOfWorker = bestRestaurant.workerList.sort((a, b) => b.salary - a.salary);

      // let buffer = '';
      // for (const worker of sortListOfWorker) {
      //    buff += `Name: ${worker.name} With Salary: ${worker.salary}`;
      // }

      // bestRestaurantWorker.textContent += buffer;

      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      let avgSalary = 0;
      let totalSalary = 0;
      let currAvgSalary = 0;
      let bestName = '';
      let output = {};

      for (const line of input) {
         let restaurantInfo = line.split(' - ');
         let restaurantName = restaurantInfo.shift();
         let workersData = restaurantInfo[0].split(', ');

         for (const worker of workersData) {
            let [name, salary] = worker.split(' ');
            salary = Number(salary);

            if (!output.hasOwnProperty(restaurantName)) {
               output[restaurantName] = {};
            }
            if (output.hasOwnProperty(restaurantName)) {
               output[restaurantName][name] = salary;
            }
         }
      }

      let entries = Object.entries(output);
      for (const entry of entries) {
         let key = entry[0];
         let values = Object.entries(entry[1]);

         for (const [name,salary] of values) {
            totalSalary += salary;
         }

         avgSalary = totalSalary / values.length;

         if (avgSalary > currAvgSalary) {
            currAvgSalary = avgSalary;
            bestName = key;
            totalSalary = 0;
         }
      }

      let result = Object.entries(output[bestName]).sort((a, b) => b[1] - a[1]);
      let print = '';

      result.forEach(x => print += `Name: ${x[0]} With Salary: ${x[1]}`);
      document.querySelector('#bestRestaurant p').textContent = `Name: ${bestName} Average Salary: ${currAvgSalary.toFixed(2)} Best Salary: ${result[0][1].toFixed(2)}`;
      document.querySelector('#workers p').textContent = print;
   }

   function updateRestaurant(obj, worker) {
      let [name, salary] = worker.split(' ');
      salary = Number(salary);
      obj.sumSalary += salary;

      if (obj.bestSalary < salary) {
         obj.bestSalary = salary;
      }
      obj.workerList.push({
         name,
         salary
      });

      obj.avgSalary = obj.sumSalary / obj.workerList.length;
   }
}

