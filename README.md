# Bysykkel data

Digging into Oslo's City Bike data - https://oslobysykkel.no/apne-data

Fetches information from the [station status endpoint](https://oslobysykkel.no/apne-data/sanntid) every 20 minutes using Github's [Flat-Data](https://githubnext.com/projects/flat-data/) approach and actions.

## My findings 

The first question I wanted to dig into was "_how likely am I to find a bike or a parking spot at any station at a given time?_". To answer this I averaged the bike and dock availability at each station by hour and built some graphs from that data. You can browse through those [here](http://htmlpreview.github.io/?https://github.com/Kalli/bysykkel-data/blob/main/charts/bysykkel-station-hour-by-hour-availability.html). For instance here is the availability at a station close to my office: 

![](./images/schous-plass-availability-by-hour.png)

## View the data

Use the Flat Github tool to view the data at [flatgithub.com/kalli/bysykkel-data](https://flatgithub.com/Kalli/bysykkel-data).

## Stay tuned for more!

Once I get a bit of data I hope to look into questions like:

* Are stations at higher elevation more likely to be empty? (My gut feeling is *yes*)
* How likely is it there to be a bike / parking space at a given station at a given time?
* Are there daily, weekly or seasonal patterns to station status?

Any help with this sort of data wrangling is appreciated. As are questions, comments or pull requests. Hit me up at [@karltryggvason](https://twitter.com/karltryggvason) for more.