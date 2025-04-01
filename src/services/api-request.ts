// ejemplo con api publica de spacexdata
import { type Doc, type APISpacexResponce } from "../types/api";

export const fetchLaunches = async () => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {},
      options: {
        limit: 10,
        sort: {
          flight_number: "asc",
        },
      },
    }),
  });

  // const data = JSON.stringify(await res.json());
  // console.log(data);
  const { docs: launches } = (await res.json()) as APISpacexResponce;
  return launches

}

export const fetchLaunchBy = async ({id}: {id: string}) => {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`)

  const launch = (await res.json()) as Doc;
  return launch

}