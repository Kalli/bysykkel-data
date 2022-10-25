import { readJSON, writeTXT } from "https://deno.land/x/flat@0.0.15/mod.ts";

// Reads the newest version of station_status and appends the information to the station_status csv
const filename = Deno.args[0];
const json = await readJSON(filename);

// we can't specify timezones for github workflow cron schedules, so check for Oslo time here
const d = new Date();
const hour = Number(d.toLocaleTimeString('en-GB', {timeZone: "Europe/Oslo"}).slice(0, 2));
// Oslo bikes aren't accessible between 1 and 5, so we don't need to update within that time
if (hour > 5 || hour < 1){
   json.data.stations.map((element) => {
      writeTXT("station_status.csv", Object.values(element).join(",") + "\n", {append: true});
   });   
} 
