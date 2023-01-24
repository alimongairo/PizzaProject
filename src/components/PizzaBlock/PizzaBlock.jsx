import React from 'react';
import './PizzaBlock.css'
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';

const doughType = ['тонкое', 'классическое'];
const sizeType = ['26', '30', '40'];

function PizzaBlock(props) {
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const [activePrice, setActivePrice] = React.useState(0);
  const dispatch = useDispatch();

  const onClickAddButton = () => {
    const item = {
      id: Date.now(),
      item_type_id: props.item_type_id,
      title: props.title, 
      price: props.prices[activeSize],
      image: `../${props.img}`,
      type: doughType[activeType],
      size: sizeType[activeSize],
    };
    dispatch(addItem(item));
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={props.img} alt="Pizza" />
      <h4 className="pizza-block__title">{props.title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {props.types.map((type, idx) => (
            <li
              key={idx}
              onClick={() => {
                setActiveType(idx);
                setActiveSize(0);
                setActivePrice(0);
              }}
              className={activeType === idx ? 'active' : ''}>
              {doughType[type]}
            </li>
          ))}
        </ul>
        <ul>
          {props.sizes.map((size, idx) => (
            <li
              key={idx}
              onClick={() => {
                setActiveSize(idx);
                setActivePrice(idx);
              }}
              className={activeSize === idx ? 'active' : ''}>
              {size} см
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="pizza-block__price">{props.prices[activePrice]} ₽</div>
        <div>{props.weights[activeType][activeSize]} г</div>
        <button className="pizza-block__button" onClick={() => onClickAddButton()}>
          &#10010; Добавить
        </button>
      </div>
    </div>
  );
}

export default PizzaBlock;
