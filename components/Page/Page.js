import { MainMenu } from "../MainMenu";
import { BlockRenderer } from "../BlockRenderer";
import Head from "next/head";

export const Page = (props) => {
    return (
      <div>
          <Head>
              <title>{props.seo.title}</title>
              <meta name={"description"} content={props.seo.metaDesc} />
          </Head>
          <MainMenu items={props.mainMenuItems}
                    callToActionLabel={props.callToActionLabel}
                    callToActionDestination={props.callToActionDestination} />
          <BlockRenderer blocks={props.blocks} />
      </div>
    );
};