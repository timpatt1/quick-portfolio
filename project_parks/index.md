## Project 2: Parks in Manhattan
<img src = "project_parks/Parks.jpg">
**Project description:** This project explores the relationship between urban tree canopy in Baltimore City and socioeconomic, demographic dimensions. At the same time identifying an additional factor in order to conduct a spatial analysis that ties together Baltimore City’s tree canopy cover change dataset. The two building block datasets that I will be using for this lab is the set of neighborhood statistical areas for Baltimore City from the BNIA ArcGIS online site, as well as Baltimore City’s Tree canopy change from 2007-2015.

After downloading the Baltimore city neighborhoods shapefile from the BNIAs website, I brought it into ArcMap. After that I added the tree canopy data into the layer and joined the Baltimore city NSA file to it by using the FID numbers to align the data accordingly. Inside of the attribute table of the Tree canopy layer I chose the selection by attribute option. From there I broke down the tree canopy shapefile into individual classes of loss, no gain, and gain. I used ArcToolbox to convert the table from the Tree canopy layer to an excel file. I found that manipulating data in excel was much more efficient. From there I broke down the tree canopy data into individual classes into their own excel sheet of loss, no gain, and gain. After bringing them back tinto arcmap I clipped each individual class from the NSA shapefile in order to create their own layer I could calculate my data from. 

When comparing the two variables side by side I think it is clear that the areas with a higher percentage of vacant properties have little to no gain in tree cover through this time. If you zoom in, this can be observed in the central part of the town. Additionally, when comparing tree canopy to the Occupied housing it is evident that there is a correlation between occupied properties to tree cover. If you focus on the North Eastern/Western parts of town it can clearly be seen this very close relation of tree cover to occupied homes in the city of Baltimore.



<img src="images/dummy_thumbnail.jpg?raw=true"/>
