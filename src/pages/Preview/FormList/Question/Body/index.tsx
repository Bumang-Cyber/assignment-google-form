import Short from "../Categories/Short";
import Long from "../Categories/Long";
import Choice from "../Categories/Choice";
import { CategoryType } from "@/types/category";

interface BodyProps {
  category: CategoryType;
  options: string[];
  index: number;
}

const Body = ({ category, options, index }: BodyProps) => {
  return (
    <>
      {category === "단답형" && <Short />}
      {category === "장문형" && <Long />}

      {category === "객관식 질문" && (
        <Choice //
          questionIndex={index}
          choice={category}
          options={options}
        />
      )}

      {category === "체크박스" && (
        <Choice //
          questionIndex={index}
          choice={category}
          options={options}
        />
      )}

      {category === "드롭다운" && (
        <Choice //
          questionIndex={index}
          choice={category}
          options={options}
        />
      )}
    </>
  );
};

export default Body;
