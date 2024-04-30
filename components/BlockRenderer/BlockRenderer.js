import { Cover } from "components/Cover";
import { Heading } from "components/Heading";
import { Paragraph } from "components/Paragraph";
import { theme } from "../../theme";
import { CallToActionButton } from "../CallToActionButton";
import { Columns } from "../Columns";
import { Column } from "../Column";
import Image from "next/image";
import { PropertySearch } from "../PropertySearch";
import { FormspreeForm } from "../FormspreeForm";
import { PropertyFeatures } from "../PropertyFeatures";
import { Gallery } from "../Gallery";
import { TickItem } from "../TickItem";

export const BlockRenderer = ({ blocks }) => {
    return blocks.map((block) => {
        switch (block.name) {
            case "acf/tickitem" : {
                return (
                  <TickItem
                    key={block.id}>
                      <BlockRenderer blocks={block.innerBlocks} />
                  </TickItem>
                );
            }
            case "core/gallery": {
                return (<Gallery key={block.id} columns={block.attributes?.columns || 3}
                                 cropImages={block.attributes?.imageCrop} items={block.innerBlocks} />);
            }
            case "acf/propertyfeatures": {
                return <PropertyFeatures
                  key={block.id}
                  price={block.attributes.price}
                  bedrooms={block.attributes.bedrooms}
                  bathrooms={block.attributes.bathrooms}
                  hasParking={block.attributes.has_parking}
                  petFriendly={block.attributes.pet_friendly}
                />;
            }
            case "acf/formspreeform": {
                return <FormspreeForm key={block.id} formId={block.attributes.data.form_id} />;
            }
            case "core/group": {
                return (
                  <BlockRenderer key={block.id} blocks={block.innerBlocks} />
                );
            }
            case "core/block": {
                return (
                  <BlockRenderer key={block.id} blocks={block.innerBlocks} />
                );
            }
            case "core/image": {
                return (
                  <Image
                    key={block.id}
                    src={block.attributes.url}
                    height={block.attributes?.height}
                    width={block.attributes?.width}
                    alt={block.attributes?.alt || ""}
                  />
                );
            }
            case "core/column": {
                return (
                  <Column
                    textColor={theme[block.attributes?.textColor] || block.attributes?.style?.color?.text}
                    backgroundColor={theme[block.attributes?.backgroundColor] || block.attributes?.style?.color?.background}
                    key={block.id}>
                      <BlockRenderer blocks={block.innerBlocks} />
                  </Column>
                );
            }
            case "core/columns": {
                return (
                  <Columns
                    key={block.id}
                    textColor={theme[block.attributes.textColor] || block.attributes.style?.color?.text}
                    backgroundColor={theme[block.attributes.backgroundColor] || block.attributes.style?.color?.background}
                    isStackOnMobile={block.attributes.isStackOnMobile}>
                      <div className={"flex items-center"}>
                          <BlockRenderer blocks={block.innerBlocks} />
                      </div>
                  </Columns>
                );
            }
            case "acf/propertysearch": {
                return <PropertySearch key={block.id} />;
            }
            case "acf/ctabutton": {
                return (
                  <CallToActionButton
                    key={block.id}
                    buttonLabel={block.attributes?.data?.label}
                    destination={block.attributes?.data?.destination || "/"}
                    align={block.attributes?.data?.align}
                  />
                );
            }
            case "core/paragraph": {
                return (<Paragraph key={block.id} textAlign={block.attributes.textAlign}
                                   textColor={theme[block.attributes.textColor] || block.attributes.style?.color?.text}
                                   content={block.attributes?.content} />);
            }
            case "core/post-title":
            case "core/heading": {
                return (
                  <Heading
                    key={block.id}
                    level={block.attributes?.level}
                    content={block.attributes?.content}
                    textAlign={block.attributes?.textAlign}
                  />
                );
            }
            case "core/cover": {
                return (
                  <Cover key={block.id} background={block.attributes?.url}>
                      <BlockRenderer blocks={block.innerBlocks} />
                  </Cover>
                );
            }
            default:
                console.log("UNKNOWN BLOCK: ", block);
                return null;
        }
    });
};
