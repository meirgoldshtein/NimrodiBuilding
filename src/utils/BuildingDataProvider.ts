import { useState, useEffect } from 'react';
import data from '../data/building.json';
interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity:string
}

const useBuildingData = () => {
  const [buildingData, setBuildingData] = useState<Floor[]>([]);
  useEffect(() => {
    setBuildingData(data);
  }, []);

  const getFloorByIndex = (floorIndex:number): Floor |undefined =>
  {
    return data[floorIndex];
  }
  const getListOfActivities = ():string[]=>{
    return data.map((floor: Floor) => floor.activity);
  }
  return {
    buildingData,
    getFloorByIndex,
    getListOfActivities
  };
};

export default useBuildingData;
