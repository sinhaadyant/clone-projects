import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const Categories = ({ selectedCategory, setselectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={(e) => {
          setselectedCategory(category.name);
        }}
        style={{
          backgroundColor: category.name === selectedCategory && "#2e2e2e",
          color: "white",
        }}
        key={category.name}
      >
        <span
          style={{
            color: selectedCategory === category.name ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span style={{ opacity: selectedCategory === category.name ? 1 : 0.8 }}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Categories;
