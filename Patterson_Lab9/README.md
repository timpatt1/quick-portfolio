---
title: "Patterson_Lab8"
author: "Tim Patterson"
date: "04/28/2021"
output: html_document
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


**1. Use `tidycensus` to download 1. race/ethnicity (B03002) and 2. median household income for Baltimore City. Store this data in a new object. Choose which race/ethnicity you'd like to relate to income (Non-Hispanic Black and Non-Hispanic White work best). Which census tract has the highest _percentage_ of your target race/ethnicity (and what is the percent) and which has the highest median household income (and how much is it?)? (5 points)** Reminder: Since we will be mapping our data, make sure you include use `geometry = TRUE` in `get_acs()` 

```{r}

# settings for tidycensus
options(tigris_class = "sf")
options(tigris_use_cache = TRUE)
census_api_key("7da13c910d6b0d231eff70a1168b636ee281edd3", overwrite = TRUE)

setwd("C:/Users/vival/Documents/GES 486/Lab8")


# This gets African American Population and MHHI in 2019
MD_household_2019 <- get_acs(geography = "tract", 
     variables = c("total_population" = "B01003_001", # Total population
                   "black_pop" = "B01001B_001",
                   "med_hh_inc" = "B19013_001" # Median household income
                   ), 
     year = 2019,
     survey = "acs5",
     state = c(24), 
     county = c(510),
     geometry = TRUE, # download the shapefile with the data
     output = "wide")%>% clean_names() # need this 2019

```
```{r}
MD_household_2019$blackprop = MD_household_2019$black_pop_e / 
MD_household_2019$total_population_e
max(MD_household_2019$black_pop_e)
baltdrop2 = MD_household_2019$blackprop[!is.na(MD_household_2019$blackprop)]
max(baltdrop2)


baltdata1 = MD_household_2019 %>% filter(!is.na(MD_household_2019$med_hh_inc_e))

max(baltdata1$med_hh_inc_e)
```
Census tract 2711.02 gave me the highest median household income with an amount of $195,156. Census Tract 2007.02 gave me the highest Percentage of African Americans with 99.3 %.

**2. Please reproject this data to Web Mercator. (1 points)**

```{r}
baltdata1transform = st_transform(baltdata1, 3857)
```

**3. Create two plots. In the first plot highlight the tract with the highest concentration of your selected race/eth. In the second plot highlight the tract with the highest median household income? (5 points)**

```{r}
colnames(baltdata1)
bidata = bi_class(baltdata1, x = blackprop, y= med_hh_inc_e, style = "quantile", dim = 3)

highest_black = baltdata1 %>% filter(med_hh_inc_e == 195156)
highest_mhhi = baltdata1 %>% filter(blackprop > 0.99)

# Mapping Highest Percentage of African Americans of Baltimore City
ggplot(bidata)+
  geom_sf(mapping = aes(fill = bi_class), color = "white", size = 0.1, show.legend = FALSE)+
  bi_scale_fill(pal = "DkBlue", dim = 3)+
  geom_sf(data = highest_black , fill = "red", color = NA)+ # Highest Percentage of A.A. displayed in red
  labs(
    title = "Highest Proportion of African American",
    subtitle = "Baltimore City")+
  bi_theme()

```
```{r}
# Mapping Highest Median Household Income of Baltimore City
ggplot(bidata)+
  geom_sf(mapping = aes(fill = bi_class), color = "white", size = 0.1, show.legend = FALSE)+
  bi_scale_fill(pal = "DkBlue", dim = 3)+
  geom_sf(data = highest_mhhi , fill = "red", color = NA)+ # Highest Median Household Income displayed in red
  labs(
    title = "Highest Median Household Income",
    subtitle = "Baltimore City")+
  bi_theme()
```


**4. Create a third column using the bi_class function from the tutorial. (2 points)**

```{r}
colnames(baltdata1)
#Creating a third column using the bi_class function
bidata = bi_class(baltdata1, x= blackprop, y = med_hh_inc_e, style = "quantile", dim = 3)
```

**5. Create a bivariate map with your data. (3 points)**  

```{r}
# Creating Bi-Variate Map
bi_map =
  ggplot()+
  geom_sf(data = bidata, mapping = aes(fill = bi_class), color = "white", size = 0.1, show.legend = FALSE) +
  bi_scale_fill(pal = "DkBlue", dim = 3)+
  labs(
    title = "Proportion of Income and Race", 
    subtitle = "Batimore City")+
  bi_theme()
```

**6. Use the cowplot package and ggdraw, like in the tutorial to add a legend (2 points)**.

```{r}
# Creating bivariate legend using cowplot
legend <- bi_legend(pal = "DkBlue",
                    dim = 3,
                    xlab = "Higher Proportion African American ",
                    ylab = "Higher Median Income ",
                    size = 6)

# Combining map with legend
legend_plot <- ggdraw() +
  draw_plot(bi_map, 0, 0, 1, 1) +
  draw_plot(legend, 0.01, .01, 0.3, 0.3)

legend_plot
```

**7. Rinse and repeat for another county of your choosing, using a _different_ color scheme. Be sure to use Psuedo-Mercator (3857). (5 points)**

```{r}
# This gets African American Population and MHHI in 2019 for A.A. county
AA_Data =  get_acs(geography = "tract", 
     variables = c("total_population" = "B01003_001", # Total population
                   "black_pop" = "B01001B_001",
                   "med_hh_inc" = "B19013_001" # Median household income
                   ), 
     year = 2019,
     survey = "acs5",
     state = c(24), 
     county = "Anne Arundel",
     geometry = TRUE, # download the shapefile with the data
     output = "wide")%>% clean_names() # need this 2019
```
```{r}
colnames(AA_Data)

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
#st_write(AA_bi_data, "Patterson_Lab8.geojson")
```

**9. Now open your geojson output and create a QGIS map of your bivariate map. Put an image of that map here. (2 points)**

```{r}
# Inserting the image into this Rmarkdown document
img1_path1 <- "C:/Users/vival/Documents/GES 486/Lab8/Patterson_AAcounty.PNG"
img1 <- readPNG(img1_path1, native = TRUE, info = TRUE)
attr(img1, "info")
include_graphics(img1_path1)

```
[Patterson_Lab8]()

**10. Use qgis2web and put a link here to your github site with the webmap of your bivariate map. (3 points)**



## 3. Reflection (3 points)

From this assignment I have gained a better understanding of how the organization of data is detrimental in the work flow process. Taking the time to label code chunks as well as leaving comments allows for you to look back at your code and use it more efficiently in the future. I struggled with that I would like to remember for this assignment is editing specific data within a map. The process of transforming specific data in order to drop and generate variables was very beneficial it allowed me to better edit my map and highlight specific areas of interest. This is something I plan to use for projects in the future.

## 4. Extra Credit (2 points)

**Put an image as a legend in your web map.**

Knit your document to a .html file.  Submit this knitted document.
