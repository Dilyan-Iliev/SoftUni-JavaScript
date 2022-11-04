function loadRepos() {
   //with XMLHttp Request
   const url = 'https://api.github.com/users/testnakov/repos';
   const request = new XMLHttpRequest();
   const ul = document.getElementById('data');

   const resultSection = document.getElementById('res');

   // request.addEventListener('readystatechange', () => {
   //    if (request.readyState == 4 && request.status == 200) {
   //       resultSection.textContent = request.responseText;
   //    }
   // });

   // request.open('GET', url);
   // request.send();

   //With Promise

   // fetch(url)
   // .then(response => {
   //    return response.json();
   // })
   // .then(result => {
   //    console.log(result);
   //    for (const data of result) {
   //       let li = document.createElement('li');
   //       li.textContent = data.name;
   //       ul.appendChild(li);
   //    }
   // })
   // .catch(err => {
   //    console.log(err);
   // })

   //With async-await

   async function aSynchronous(url) {
      try {
         let response = await fetch(url);
         let data = await response.json();

         return data;
      } catch (error) {
         console.log(error);
      }
   }

   aSynchronous(url).then(result => {
      for (const data of result) {
         let li = document.createElement('li');
         li.textContent = data.name;
         ul.appendChild(li);
      }
   });
}