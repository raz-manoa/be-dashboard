import React, { ComponentType } from "react";
import { RouteObject } from "react-router-dom";
export interface IRoute extends RouteObject {
  name: string;
  component: React.LazyExoticComponent<ComponentType>;
  skeleton?: ComponentType;
  exact?: boolean;
  children?: IRoute[];
}
