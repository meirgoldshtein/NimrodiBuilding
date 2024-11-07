import roles from "../data/roles.json";

interface IuseActivityParams {
  activity: string;
  role: string;
  activities: string[];
}

const useIsVerified = ({ activity, role, activities }: IuseActivityParams) => {
  const activityIndex = activities.findIndex((item ) => item === activity);
  const roleIndex = roles.findIndex((item) => item === role);
  
  if (activityIndex === -1) {
    return false;
  }
  if (roleIndex < activityIndex) {
    return false;
  }
  return true;
  
};

export default useIsVerified;
