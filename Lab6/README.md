# Difference of Household Income to number of Households Living Alone (2014 - 2019)

# Introduction
The topic of this lab is to see the difference of the number of households living alone compared to the difference in Median Household income in Baltimore from 2014 until 2019.

# Data
The data I used is census data from the U.S. census Bureau's American Community Survey Tables: 2015 - 2019 (5-Year Estimates). The data sets that I focused on were 1) Number of Households Living alone, 2) Median Household Income, as well as 3) Total number of Households. The links for the data are provided as follows,

Household (Total Number, Number of Living Alone)-
**https://www.socialexplorer.com/data/ACS2019_5yr/metadata/?ds=ACS19_5yr&var=B11001008**

Median Income In The Past 12 Months (In 2019 Inflation-Adjusted Dollars) By Place Of Birth In The United States
**https://www.socialexplorer.com/data/ACS2019_5yr/metadata/?ds=ACS19_5yr&table=B06011**


# Processing & Transformations
First, we load in the various packages we need. Then I used the get_acs command to get data from the Census specifying which population and housing variables I wanted to get. We now have raw data that we should write out to file and since we're going to save in geojson, we're going to transform to 3857. In order to complete this I used the "st_write" function to create 'st_write(st_transform(bmore_household_2019, 3857), "bmore_household_2019.geojson")'. The next step in Rstudio is to merge the two time periods of 2014 to 2019 in order to compute difference over time. To complete this merge I used "left_join" combining balimore household ACS data from 2014 and 2019 with each files GEOID ID# which looked as such, 'bmore_household <- left_join(bmore_household_2019, bmore_household_2014, by="GEOID")'. After this merge in Rstudio I was able to compute the differences between household data as well as median household income. The final transormation I completed in RStudio was reprojecting the data into web-mercator using the "st_transform" function before using the "st_write" function to make my "bmore_household_diff.geojson".
After bringing the geojson files into QGIS, starting with my "bmore_household_diff" I used the Layer properties in order to change the symbology to Graduated as well as the value to "house_diff" that was created in R. After that I set the classes to 3 and the classification mode to Equal Interval. Following this I duplicated the "bmore_household_diff" file and renamed to "bmore_mhhi_diff" and followed the same steps as before with the household file except assigning the value fro this layer as the "mhhi_diff" value I created previously in RStudio. After this setp I was able to then move onto the Analysis.

# Analysis
What did you learn? What is the **analysis** you'll be performing on your data sets? You may need to explain some of your R code not explained above.
As mentioned before in my analysis I was prepararing to show change over time. To show change over time I computed the differences in household data from the year 2014 until the year 2019 in Baltimore. In order to do this I created a "house_diff" variable from my "bmore_household" data which took the estimated households living alone in 2019 to the estimated households living alone in 2014. To do this I created the function "bmore_household$house_diff <- bmore_household$house_alone19E - bmore_household$house_alone14E" in RStudio. Along with this I created a "mhhi_diff" variable from my "bmore_household" data which took the estimated difference in median household income in 2019 to the estimated households living alone in 2014. To do this I created the function "bmore_household$mhhi_diff <- bmore_household$med_hh_inc19E - bmore_household$med_hh_inc14E" in RStudio.

# Results
With these two data sets I created a Bivariate choropleth map within QGIS. This bivariate choropleth map doesn’t just show two variables at once but it also shows a relationship between these two variables – do they agree or disagree, do they increase/decrease proportionally. The bivariate choropleth map I created is a univariate choropleth with 3 categories each has 9 categories. The first category displays the total difference of Median Household Income in Baltimore from 2014-2019 over suare miles. The second category is the difference of Number of Households Living Alone to the Total number of Households from 2014-2019.

![Patterson_Lab6](https://user-images.githubusercontent.com/78392092/113941369-f9807500-97cc-11eb-94bf-209c3ace0a20.png)

[Patterson_Lab6.pdf](https://github.com/timpatt1/timpatt1.github.io/files/6274816/Patterson_Lab6.pdf)
