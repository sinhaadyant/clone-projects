import { Movie } from "@/typings";
import MovieCard from "./MovieCard";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import SocialShare from "./SocialShare";
import Link from "next/link";

type Props = { title?: string; movies: Movie[]; isVertical?: boolean };

function MoviesCarousel({ title, movies, isVertical }: Props) {
  movies = movies?.reverse();
  return (
    <div className="z-40">
      <h2 className="text-xl font-bold px-10 py-2">{title}</h2>

      <div
        className={cn(
          "flex space-x-4 overflow-scroll scrollbar-hide px-5 lg:px-10 py-5",
          isVertical && "flex-col space-x-0 space-y-12"
        )}
      >
        {isVertical
          ? movies.map((movie) => (
              <div
                key={movie.id}
                className={cn(
                  isVertical &&
                    "flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5"
                )}
              >
                <Link href={`/movieDetail/${movie.id}`}>
                  <MovieCard movie={movie} />
                  <div className="max-w-2xl">
                    <p className="font-bold">
                      {movie.title} ({movie.release_date?.split("-")[0]})
                      <Button className="ml-2" variant={"secondary"}>
                        UA + {movie?.adult == true ? "18" : "9"}
                      </Button>
                    </p>
                    <hr className="mb-3" />
                    <p className=" z-20 bottom-5 left-5 flex">
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
                      <svg
                        className="ml-2 w5 h-5 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M18.1 17.6A7.2 7.2 0 0 1 12 21a6.6 6.6 0 0 1-5.8-3c-2.7-4.6.3-8.8.9-9.7A4.4 4.4 0 0 0 8 4c1.3 1 6.4 3.3 5.5 10.6 1.5-1.1 2.7-3 2.9-6.2 1.4 1 4 5.5 1.7 9.2Z"
                        />
                      </svg>
                      &nbsp; {movie?.popularity}
                    </p>

                    <p className="">{movie.overview}</p>

                    <SocialShare
                      shareUrl={`${process.env.SITE_BASE_URL}movieDetail/${movie?.id}`}
                      title={movie.title}
                    />
                  </div>
                </Link>
              </div>
            ))
          : movies.map((movie) => (
              <Link key={movie.id} href={`/movieDetail/${movie.id}`}>
                <MovieCard key={movie.id} movie={movie} isVertical />
              </Link>
            ))}
      </div>
    </div>
  );
}

export default MoviesCarousel;
