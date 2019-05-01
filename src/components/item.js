import React from 'react';
import itemCardStyles from './item.module.scss';

const Item = ({
  item, link, description, image,
}) => (
  <article className={itemCardStyles.card}>
    <img className={itemCardStyles.image} src={image} alt={item} />
    <header className={itemCardStyles.header}>
      <h1 className={itemCardStyles.title}>{item}</h1>
      <h2 className={itemCardStyles.subtitle}><a href={link} target="__blank">Buy Now!</a></h2>

    </header>
    <section className={itemCardStyles.content}>
      {description}
    </section>
  </article>
);

export default Item;
