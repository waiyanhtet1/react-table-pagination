import _ from "lodash";

export const returnPaginationRange = (
  totalPage: number,
  page: number,
  limit: number,
  sliblings: number
) => {
  const totalPageNoInArray = 7 + sliblings;
  if (totalPageNoInArray >= totalPage) {
    return _.range(1, totalPage + 1);
  }

  const leftSiblingsIndex = Math.max(page - sliblings, 1);
  const rightSiblingIndex = Math.min(page + sliblings, totalPage);

  const showLeftDots = leftSiblingsIndex > 2;
  const showRightDots = rightSiblingIndex < totalPage - 2;

  if (!showLeftDots && showRightDots) {
    const leftItemsCount = 3 + 2 * sliblings;
    const leftRange = _.range(1, leftItemsCount + 1);
    return [...leftRange, " ...", totalPage];
  } else if (showLeftDots && !showRightDots) {
    const rightItemsCount = 3 + 2 * sliblings;
    const rightRange = _.range(totalPage - rightItemsCount + 1, totalPage + 1);
    return [1, "... ", ...rightRange];
  } else {
    const middleRange = _.range(leftSiblingsIndex, rightSiblingIndex + 1);
    return [1, "... ", ...middleRange, " ...", totalPage];
  }
};
