export const stringShortener = (item,size) => {
  if (item?.length > size) item = item.substring(0, size) + ".....";
  return item;
};
