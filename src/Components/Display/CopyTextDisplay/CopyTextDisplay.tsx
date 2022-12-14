import Icon from "@/Components/General/Icon/Icon";
import Text from "@/Components/General/Text/Text";
import React from "react";

interface CopyTextDisplayProps {
  value: string;
}

const CopyTextDisplay = ({ value }: CopyTextDisplayProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(value);
  };
  return (
    <div className="flex items-center">
      <Text size={12} weight={600} variant="black">
        {value}
      </Text>
      <span className="ml-4 cursor-pointer" onClick={handleCopy}>
        <Icon icon="copy" size={19} color="#e02b59" />
      </span>
    </div>
  );
};

export default CopyTextDisplay;
