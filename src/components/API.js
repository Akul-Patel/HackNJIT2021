import React, {useEffect, useRef} from 'react';
import { Client } from "@petfinder/petfinder-js";

export default function MyAPI(){
// const client = new petfinder.Client({ apiKey: "a4IPsbu4oOEiA3YDmaxyoxClCY148NdAAdiaDVfDiQIQnQq0sn", secret: "PEZ6OyKAJwtbH05eW0y7pL7x4Km10BiMiwbFKOg9" });

// async function showAnimals(animalType, searchBreed) {
//   let page = 1;
//   do {
//     apiResult = await client.animal.search({
//       type: animalType,
//       breed: searchBreed,
//       page,
//       limit: 100,
//     });
//     let dogIdx = (page - 1) * 100;
//     apiResult.data.animals.forEach(function(animal) {
//       console.log(` -- ${++dogIdx}: ${animal.name} id: ${animal.id} url: ${animal.url}`);
//     });

//     page++;
//   } while(apiResult.data.pagination && apiResult.data.pagination.total_pages >= page);
// }

// (async function() {
//   await showAnimals("Dog", "Bernedoodle");
// })();
    return (
        <div className="form-element">
          <h1>API</h1>
        </div>
      );
}