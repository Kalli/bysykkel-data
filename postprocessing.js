import { readJSON, writeTXT } from "https://deno.land/x/flat@0.0.15/mod.ts";

// Reads the newest version of station_status and appends the information to the station_status csv
const filename = Deno.args[0];
const json = await readJSON(filename);

json.data.stations.map((element) => {
   writeTXT("station_status.csv", Object.values(element).join(",") + "\n", {append: true});
});
