import React from "react";
import SortMenu from "./SortMenu";

const ListHeader = ({
  onPress,
  sort,
}) => (
    <SortMenu onPress={onPress} sort={sort} />
);

export default ListHeader;