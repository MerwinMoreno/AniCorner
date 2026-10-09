import { unitMetadata, unitParams, unitPage } from "../../../components/pages";

export const dynamicParams = false;
export const generateStaticParams = unitParams("anime");
export const generateMetadata = unitMetadata("anime");
export default unitPage("anime");
