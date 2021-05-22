---
title: "Final Project"
author: "Tim Patterson"
date: "04/28/2021"
output:
  html_document: default
  word_document: default
  pdf_document: default
---

```{r, setup, include=FALSE}
#setup
knitr::opts_knit$set(root.dir = "C:/Users/vival/Documents/GES 486/Lab8")
library(tidyverse)
library(tidycensus)
library(ggplot2)
#theme_set(theme_bw()) uncomment to use the bw theme in all ggplot maps
library(sf)
library(sp)
library(scales)
library(janitor)
library(readr)
library(dplyr)
library(knitr)    # For knitting document and include_graphics function

# Install and load biscale package
library(biscale)
# Install and load cowplot package
library(cowplot)
# Install and load png package
library(png)
```

```{r}
# settings for tidycensus
options(tigris_class = "sf")
options(tigris_use_cache = TRUE)
census_api_key("7da13c910d6b0d231eff70a1168b636ee281edd3", overwrite = TRUE)

setwd("C:/Users/vival/Documents/GES 486/Lab8")


# This gets African American Population and MHHI in 2019
AA_Data <- get_acs(geography = "tract", 
     variables = c("total_population" = "B01003_001", # Total population
                   "black_pop" = "B01001B_001",
                   "med_hh_inc" = "B19013_001" # Median household income
                   ), 
     year = 2019,
     survey = "acs5",
     state = c(24), 
     county = c(003),
     geometry = TRUE, # download the shapefile with the data
     output = "wide")%>% clean_names() # need this 2019
```
```{r}
# Measuring census tract with highest AA. proportion
AA_black_pop = AA_Data$black_pop_e[!is.na(AA_Data$black_pop_e)]

# Measuring census tract with highest MHHI  
AA_mhhi = AA_Data %>% filter(!is.na(AA_Data$med_hh_inc_e))

# Creating a Bi_class for A.A. County
AA_bi_data = bi_class(AA_mhhi, x= black_pop_e, y = med_hh_inc_e, style = "quantile", dim = 3)

# Mapping Bivariate Data for AA County
AA_bi_map =
  ggplot()+
  geom_sf(data = AA_bi_data, mapping = aes(fill = bi_class), color = "white", size = 0.5, show.legend = FALSE) +
  bi_scale_fill(pal = "DkViolet", dim = 3)+
  labs(
    title = "Proportion of Income and Race", 
    subtitle = "Anne Arundel County")+
  bi_theme()

  
  ggplot()+
  geom_sf(data = AA_bi_data, mapping = aes(fill = bi_class), color = "white", size = 0.5, show.legend = FALSE) +
  bi_scale_fill(pal = "DkViolet", dim = 3)+
  labs(
    title = "Proportion of Income and Race", 
    subtitle = "Anne Arundel County")+
  bi_theme()
  
```
```{r}
# Creating bivariate legend using cowplot
AA_legend <- bi_legend(pal = "DkViolet",
                    dim = 3,
                    xlab = "Higher Proportion African American ",
                    ylab = "Higher Median Income ",
                    size = 6)

# Combining map with legend
AA_legend_plot <- ggdraw() +
  draw_plot(AA_bi_map, 0, 0, 1, 1) +
  draw_plot(AA_legend, 0.01, .01, 0.3, 0.3)

AA_legend_plot
```

**8. Write the bi_class output to a geojson file. (1 points)**

```{r}
#st_write(AA_bi_data, "Patterson_AAcounty.geojson")
```

Add a new chunk by clicking the *Insert Chunk* button on the toolbar or by pressing *Ctrl+Alt+I*.

When you save the notebook, an HTML file containing the code and output will be saved alongside it (click the *Preview* button or press *Ctrl+Shift+K* to preview the HTML file).

The preview shows you a rendered HTML copy of the contents of the editor. Consequently, unlike *Knit*, *Preview* does not run any R code chunks. Instead, the output of the chunk when it was last run in the editor is displayed.
