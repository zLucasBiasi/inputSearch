import { useFilter } from "./hooks/useFilter";

export const Search = () => {
  const { handleChange, item } = useFilter();
  return (
    <>
      <input type="text" placeholder="pesquise" onChange={handleChange} />

      {item?.map((item, key) => (
        <ul key={key}>
          <li>{item}</li>
        </ul>
      ))}
    </>
  );
};
