import React from "react";

import SortMenu from "./SortMenu";
import RepoSearchbar from "./SearchBar";

const ListHeader = ({
  searchQuery,
  onChangeSearch,
  onPress,
  sort,
}) => (
  <>
    <RepoSearchbar searchQuery={searchQuery} onChangeSearch={onChangeSearch} />
    <SortMenu onPress={onPress} sort={sort} />
  </>
);

export default ListHeader;