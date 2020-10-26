// PaginationHelper
// https://www.codewars.com/kata/515bb423de843ea99400000a

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
  let pages = [];
  while(collection.length > 0){
    pages.push(collection.splice(0, itemsPerPage));
  }

  PaginationHelper.prototype.pages = pages;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  console.log(PaginationHelper.prototype.pages);
  return PaginationHelper.prototype.pages.reduce((total, currentPage) => {
    return total + currentPage.length;
  }, 0)
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  return PaginationHelper.prototype.pages.length;
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  if (pageIndex < 0 || pageIndex >= PaginationHelper.prototype.pages.length) return -1;
  return PaginationHelper.prototype.pages[pageIndex].length;
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  if (itemIndex > PaginationHelper.prototype.itemCount() || PaginationHelper.prototype.itemCount() === 0) return -1;

  let currentPage = -1;
  while (itemIndex >= 0){
    currentPage++;
    itemIndex -= PaginationHelper.prototype.pages[currentPage].length;
  }

  return currentPage;
}