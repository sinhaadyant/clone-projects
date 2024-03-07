import getImagePath from "@/lib/getImagePath";
import { Movie } from "@/typings";
import Image from "next/image";

type Props = {
  movie: Movie;
  isVertical?: boolean;
};
const MovieCard = ({ movie, isVertical }: Props) => {
  return (
    <div className="flex-shrink-0 relative cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-gray-300 dark:to-[#1A1C29]/80 z-10" />

      {isVertical == false ? (
        <p className="absolute z-20 bottom-10 left-5">{movie.title}</p>
      ) : (
        <p className="absolute z-20 bottom-5 left-5">{movie.title}</p>
      )}
      {isVertical == false && (
        <p className="absolute z-20 bottom-5 left-5 flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 mt-1 text-yellow-300"
            viewBox="0 0 24 24"
            fill="currentColor"
            role="presentation"
          >
            <path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path>
          </svg>{" "}
          &nbsp; {movie?.vote_average}
        </p>
      )}
      <Image
        className="w-fit lg:min-w-[400px] h-56 object-cover object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-sm"
        src={getImagePath(movie.backdrop_path || movie.poster_path)}
        alt={movie.title}
        width={1920}
        height={1080}
        key={movie.id}
        loading="lazy"
        placeholder="blur"
        blurDataURL="o8z.webp"
      />
    </div>
  );
};

export default MovieCard;
