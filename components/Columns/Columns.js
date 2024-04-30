export const Columns = ({ isStackOnMobile, children, backgroundColor, textColor }) => {
    const textColorStyle = textColor ? {color: textColor} : {};
    const backgroundColorStyle = backgroundColor ? {backgroundColor} : {};
    return (
      <div className={"my-10"} style={{...textColorStyle, ...backgroundColorStyle}}>
          <div className={`max-w-5xl mx-auto ${isStackOnMobile ? "flex-col" : "flex"}`}>
              {children}
          </div>
      </div>
    );
};