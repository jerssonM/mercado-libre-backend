const itemsListSerializer = ({ results, filters }) => ({
  author: { name: 'Juan', lastName: 'Torres' },
  categories:
    filters[0]?.values[0]?.path_from_root.map(({ name }) => name) || [],
  items:
    results?.map(
      ({
        id,
        title,
        price,
        prices,
        address,
        condition,
        thumbnail,
        shipping
      }) => ({
        id,
        title,
        condition,
        picture: thumbnail || 'new',
        city_name: address?.city_name || null,
        free_shipping: shipping?.free_shipping || false,
        price: { amount: price || 0, currency: prices[0]?.currency_id || null }
      })
    ) || []
});

const itemSerializer = ({
  id,
  title,
  price,
  shipping,
  pictures,
  condition,
  plain_text,
  sold_quantity
}) => ({
  author: { name: 'Juan', lastName: 'Torres' },
  item: {
    id,
    title,
    condition,
    sold_quantity,
    description: plain_text || '',
    price: { amount: price || 0 },
    pictures: pictures?.map(({ id, url }) => ({ id, url })) || [],
    free_shipping: shipping?.free_shipping || false
  }
});

module.exports = { itemSerializer, itemsListSerializer };
