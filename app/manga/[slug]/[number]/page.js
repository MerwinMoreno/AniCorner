import { unitMetadata, unitParams, unitPage } from "../../../components/pages";

export const dynamicParams = false;
export const generateStaticParams = unitParams("manga");
export const generateMetadata = unitMetadata("manga");
export default unitPage("manga");
