import useGenres from "../hooks/useGenres";
import { Genre } from "../hooks/useGenres";
const GenreList = () => {
  const { genres } = useGenres();
  return (
    <ul>
      {genres.map((genre: Genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
