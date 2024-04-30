import { getTextAlign } from "../../utils/fonts";
import { relativeToAbsoluteUrls } from "../../utils/relativeToAbsoluteUrls";

export const Paragraph = ({textAlign = "left", content, textColor}) => {
  return (
    <p
      style={{color: textColor}}
      className={`max-w-5xl mx-auto ${getTextAlign(textAlign)}`}
      dangerouslySetInnerHTML={{__html: relativeToAbsoluteUrls(content)}}/>
  )
};
