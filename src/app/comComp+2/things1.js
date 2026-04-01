//Why are keys critical in React lists?

//When React re-renders a list, it needs to answer:
//“Which item is the same as before, which changed, which moved, and which is new or removed?”

//Bad Example (No key at all — breaks reconciliation)
/* {items.map(item => (
  <li>{item.name}</li>
))}
 */
//Problematic Example (Index as key — causes bugs)
/* {items.map((item, index) => (
  <li key={index}>{item.name}</li>
))} */

//Good Example (Stable unique key — correct approach)
/* {items.map(item => (
  <li key={item.id}>{item.name}</li>
))}
 */
//“Keys give each div or list item a unique ID, so React tracks changes efficiently. Without them, mapping an array could re-render everything, 
//breaking form validation or slowing the app.”


//this above gives two codes, but the first (bad example) doesnt show without keys, still uses it, figure out wth is a better answer cus this 
//suckss
