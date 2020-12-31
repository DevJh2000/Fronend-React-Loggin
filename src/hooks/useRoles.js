import { useEffect, useState } from "react";
import { fetchData } from "../helpers/fetch";

export const useRoles = (InitialValues = [{}]) => {
  const [roles, setRoles] = useState(InitialValues);

  const getRol = async () => {
    const { data } = await fetchData(true, `admin/roles?campos=nombre _id`);
    setRoles(data.roles, ...roles);
    console.log(data);
  };

  useEffect(() => {
    getRol(setRoles);
  }, [setRoles]);
    
  return roles;
};
