import { titleMetadata, titleParams, titlePage } from "../../components/pages";

export const dynamicParams = false;
export const generateStaticParams = titleParams("anime");
export const generateMetadata = titleMetadata("anime");
export default titlePage("anime");
