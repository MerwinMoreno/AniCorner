import { titleMetadata, titleParams, titlePage } from "../../components/pages";

export const dynamicParams = false;
export const generateStaticParams = titleParams("manga");
export const generateMetadata = titleMetadata("manga");
export default titlePage("manga");
