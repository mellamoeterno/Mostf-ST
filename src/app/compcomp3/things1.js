/* 
{items.map((item, index) => (
  <li key={index}>{item.name}</li>
))}


 */

//With proper keys:

/* 
{items.map(item => (
  <li key={item.id}>{item.name}</li>
))}
 */