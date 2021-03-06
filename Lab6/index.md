---
title: "R Notebook"
subtitle: Census Differences GES 486
output: 
        html_document:
                keep_md: true
author: Tim Patterson (timpatt1@umbc.edu)
date:   2021/04/01
---

# Census Demo
This file 

## Setup
First, we load in the various packages we need. I've added `mapview` here instead of `ggplot` because it allows for easier interactions with `sf`. This chunk of code also sets some defaults for the `tidycensus` package. To use this script, you'll need to sign up for your own census api key. (https://api.census.gov/data/key_signup.html)

```{r setup}
# packages
library(tidyverse)
library(tidycensus)
library(sf)
library(ggplot2)

# settings for tidycensus
options(tigris_class = "sf")
options(tigris_use_cache = TRUE)
# census_api_key("yourkeyhere", install=TRUE)

setwd("C:/Users/vival/Documents/GES 486/Lab6")
```

## Get Census Data
Then we use the `get_acs` command to get data from the Census specifying which population and housing variables we want to get. Here's the Data Dictionary from Social Explorer. (https://www.socialexplorer.com/data/ACS2019_5yr/metadata/?ds=ACS19_5yr)

```{r download census}
# This gets evening and afternoon workers in 2019
bmore_household_2019 <- get_acs(geography = "tract", 
     variables = c("total_household19" = "B11001_001", # Total households
                   "house_alone19" = "B11001_008", # Householder Living alone
                   "med_hh_inc19" = "B19013_001" # Median household income
                   ), 
     year = 2019,
     survey = "acs5",
     state = c(24), 
     county = c(510,5), 
     geometry = TRUE, # download the shapefile with the data
     output = "wide") # need this

# This gets evening and afternoon workers in 2014
bmore_household_2014 <- get_acs(geography = "tract", 
     variables = c("total_household14" = "B11001_001", # Total households
                   "house_alone14" = "B11001_008", # Householder Living alone
                   "med_hh_inc14" = "B19013_001" # Median household income
                   ), 
     year = 2014,
     survey = "acs5",
     state = c(24), 
     county = c(510,5), 
     geometry = FALSE, # download the shapefile with the data
     output = "wide") # need this

# We now have raw data that we should write out to file
# Because we're going to save in geojson, we're going to transform to 3857
st_write(st_transform(bmore_household_2019, 3857), "bmore_household_2019.geojson")

st_write(bmore_household_2014, "bmore_household_2014.csv") # geometry is false!

```

## Merge the two time periods
```{r mergeanddiff}
bmore_household <- left_join(bmore_household_2019, bmore_household_2014, 
                              by="GEOID")

# Compute differences in households
bmore_household$house_diff <- bmore_household$house_alone19E -
        bmore_household$house_alone14E

# Compute difference in median household income
bmore_household$mhhi_diff <- bmore_household$med_hh_inc19E -
        bmore_household$med_hh_inc14E


bmore_household <- st_transform(bmore_household, 3857) # reproject into web-mercator because Google owns everything        
```


## Write to file
Here I'm going to use ggplot. Now that I specified the CRS (projection)
```{r writefile}
st_write(bmore_household, "bmore_household_diff.geojson")
```

