import { useEffect, useState } from "react";
import * as Style from "./GenrerOption-style";
import { GenrerTypes } from "types/interfaces";
import { Genrers } from "Service/genrerService";

const GenrerOption = () => {
  const [genrers, setGenrers] = useState<GenrerTypes[]>([]);

  useEffect(() => {
    const fetchGenrer = async () => {
      const payload: any = await Genrers.AllGenrers();
      setGenrers(payload.data);
    };
    fetchGenrer();
  }, []);

  return (
    <Style.ContainerOption>
      <Style.OptionSelect>
        <Style.Options value="default">
          Gêneros
        </Style.Options>
        {genrers.map((genrer) => (
          <Style.Options value="" key={genrer.id}>{genrer.name}</Style.Options>
        ))}
      </Style.OptionSelect>
    </Style.ContainerOption>
  );
};

export default GenrerOption;
