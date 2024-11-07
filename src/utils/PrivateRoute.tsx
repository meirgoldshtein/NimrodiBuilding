import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import Forbidden from "../pages/Forbidden/Forbidden";

interface IPrivateRoute{
    component: ReactNode,
}

const PrivateRoute = ({ component}:IPrivateRoute) => {
    const currentRole = useSelector((state: { role: string }) => state.role);
    const access = useSelector((state: { floorAccess: { floorAccess: [boolean, boolean, boolean, boolean, boolean] } }) => state.floorAccess.floorAccess);
    const { index } = useParams<{ index: string }>();

    if (!access[parseInt(index || "0")]) {
      return <Forbidden />;
    }
    
    if (access[parseInt(index || "0")]) {
      return component;
    } else {
      return <Forbidden />
    }
};

export default PrivateRoute