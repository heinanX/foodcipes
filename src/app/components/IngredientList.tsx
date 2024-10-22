import { iSet } from '../utils/interfaces';

const IngredientList = ({ set }: { set: iSet[] }) => {
  return (
    <>
      {set.map((item, i: number) => (
        <ul key={i}>
          {item.ingredients.map((ingredientItem, j: number) => (
            <li key={j} className="flex py-1">
              <p className="w-28">
                {ingredientItem.unit} {ingredientItem.measurementunit}
              </p>
              <p className="capitalize w-full">{ingredientItem.ingredient}</p>
            </li>
          ))}
        </ul>
      ))}
    </>
  );
};

export default IngredientList;
